
import { GoogleGenAI } from "@google/genai";

// The API key is sourced from process.env.API_KEY and its availability is assumed.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateText = async (prompt: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });
    return response.text;
  } catch (error) {
    console.error("Error generating text with Gemini:", error);
    return "Failed to generate text. Please check the console for more details.";
  }
};
