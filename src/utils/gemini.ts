import { GoogleGenAI, Modality } from "@google/genai";
import sharp from "sharp";
import * as fs from "node:fs";

const API_KEY = process.env.GEMINI_API_KEY || process.env.NEXT_PUBLIC_GEMINI_API_KEY;

export async function GenerateImage(prompt:string) {
  const ai = new GoogleGenAI({ apiKey: API_KEY });

  try {
    if (!prompt || !prompt.trim()) {
      return {
        success: false,
        status: 400,
        error: "Prompt tidak boleh kosong"
      }
    }
    
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash-exp-image-generation",
      contents: prompt,
      config: {
        responseModalities: [Modality.TEXT, Modality.IMAGE],
      },
    });
    
    if (!response?.candidates || response.candidates.length === 0) {
      console.error("No candidates in response");
      return {
        success: false,
        status: 400,
        error: "Maaf, saya tidak dapat menghasilkan respons saat ini."
      }
    }

    const candidate = response.candidates[0];
    if (!candidate.content?.parts || candidate.content.parts.length === 0) {
      console.error("No content parts in candidate");
      return {
        success: false,
        status: 400,
        error: "Tidak dapat menghasilkan gambar"
      }
    }

    let imageBase64: string | null = null;

    for (const part of candidate.content.parts) {
      if (part.inlineData?.data) {
        imageBase64 = part.inlineData.data;
        break; // Ambil gambar pertama yang ditemukan
      }
    }

    if (!imageBase64) {
      return {
        success: false,
        status: 500,
        error: "Gagal memproses gambar"
      }
    }

    const webpBuffer = await sharp(Buffer.from(imageBase64, "base64"))
      .webp()
      .toBuffer();
    
    return {
      success: true,
      status: 200,
      data: {
        base64: imageBase64,
        buffer: Buffer.from(imageBase64, "base64"),
        webp: webpBuffer
      }
    }
  } catch (error) {
    console.error("Error generating image:", error);
    return {
      success: false,
      status: 500,
      error: "Internal server error"
    }
  }
}