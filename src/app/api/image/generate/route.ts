import { addImageResult, getAllUserImageGenerate } from "@/utils/actions/db.action";
import { GenerateImage } from "@/utils/gemini";
import { NextRequest, NextResponse } from "next/server"

export async function POST(req:NextRequest) {
  try {
    if (!req.body) {
      return NextResponse.json({
        success: false,
        error: "Request body is empty"
      }, { status: 400 });
    }

    const { prompt, aspectRatio, size, userId } = await req.json().catch(() => {
      throw new Error("Invalid JSON format");
    });

    const AiPrompt = `generate and image of ${prompt} with the resolution of ${size.width} x ${size.height} and with aspect ratio of ${aspectRatio}.`

    const result = await GenerateImage(AiPrompt);
    if (!result?.success) {
      return NextResponse.json({ success: false, error: 'AI generation failed' }, { status: 500 })
    }

    // add to database
    const imageResult = await addImageResult(prompt, size, aspectRatio, result?.data?.base64, userId)
    if (!imageResult.success) {
      return NextResponse.json({ error: imageResult.error }, { status: 500 })
    }

    return NextResponse.json({
      success: true,
      status: 200,
      data: {
        id: imageResult?.id,
        image: imageResult?.data
      }
    })
  } catch (error) {
    console.error("Error processing request:", error);
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : "Invalid request format"
    }, { status: 400 });
  }
}

export async function GET(request: Request) {
  try {
    // Parse query parameters
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('id');

    // Validasi parameter
    if (!userId || typeof userId !== 'string') {
      return NextResponse.json(
        { success: false, error: 'Invalid user ID' },
        { status: 400 }
      );
    }

    // Eksekusi query database
    const images = await getAllUserImageGenerate(userId);
    
    return NextResponse.json({
      data: images
    });

  } catch (error: any) {
    console.error("[API ERROR] /api/images:", error);
    return NextResponse.json(
      { 
        success: false, 
        error: error.message || 'Internal server error',
        stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
      },
      { status: 500 }
    );
  }
}