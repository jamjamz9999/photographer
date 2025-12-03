import { GoogleGenAI, Type } from "@google/genai";
import { Photo, SearchResponse } from '../types';

// Initialize the Gemini client
// NOTE: The API key is expected to be in process.env.API_KEY
// If it is not set, the app will fail gracefully in the UI.
const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const searchPhotosWithGemini = async (query: string, photos: Photo[]): Promise<string[]> => {
  if (!apiKey) {
    console.warn("No API Key found for Gemini.");
    // Fallback: basic text match
    const lowerQuery = query.toLowerCase();
    return photos
      .filter(p => 
        p.title.toLowerCase().includes(lowerQuery) || 
        p.description.toLowerCase().includes(lowerQuery) || 
        p.category.toLowerCase().includes(lowerQuery)
      )
      .map(p => p.id);
  }

  try {
    // Prepare a simplified list of photos for the context
    const photoContext = photos.map(p => ({
      id: p.id,
      title: p.title,
      description: p.description,
      category: p.category
    }));

    const prompt = `
      You are an intelligent photo curator for a photography portfolio.
      
      Here is a list of available photos with their metadata:
      ${JSON.stringify(photoContext)}

      The user is searching for: "${query}"

      Your task:
      1. Analyze the user's request (it might be abstract, emotional, or literal).
      2. Select the IDs of the photos that best match the intent.
      3. Return ONLY the JSON object matching the schema. Do not add markdown formatting.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            matchedIds: {
              type: Type.ARRAY,
              items: {
                type: Type.STRING
              }
            }
          }
        }
      }
    });

    const jsonStr = response.text;
    if (!jsonStr) return [];

    const result = JSON.parse(jsonStr) as SearchResponse;
    return result.matchedIds || [];

  } catch (error) {
    console.error("Error searching with Gemini:", error);
    return [];
  }
};
