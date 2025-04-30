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

    const { prompt, aspectRatio, size } = await req.json().catch(() => {
      throw new Error("Invalid JSON format");
    });

    const AiPrompt = `generate and image of ${prompt} with the resolution of ${size.width} x ${size.height} and with aspect ratio of ${aspectRatio}.`

    const result = await GenerateImage(AiPrompt);
    if (!result?.success) {
      return NextResponse.json({
        success: false,
        status: 500,
        data: null
      })
    }

    return NextResponse.json({
      success: true,
      status: 200,
      data: result?.data?.base64
    })
  } catch (error) {
    console.error("Error processing request:", error);
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : "Invalid request format"
    }, { status: 400 });
  }
}