// src/lib/aiClient.ts
import type { AIContentParams, AIContentResponse } from "@/types/aiResponses";
import OpenAI from "openai";
import { movexosStructure } from "@/lib/movexosStructure";

// ✅ Bättre API key check med fallback
const apiKey = process.env.OPENAI_API_KEY;
const openai = apiKey ? new OpenAI({ apiKey }) : null;

interface AIParsedContent {
  seoTitle?: string;
  seoDescription?: string;
  seoImage?: string | null;
  [key: string]: string | null | undefined;
}

interface OpenAIError {
  status?: number;
  code?: string;
  message?: string;
}

// ✅ Fallback content generator
function generateFallbackContent(from: string, to: string): AIContentResponse {
  const contentArray = Object.values(movexosStructure).map((instruction, index) => {
    const instructionText = instruction as string;
    
    if (instructionText.includes('headline') || instructionText.includes('heading')) {
      return `Moving from ${from} to ${to} - Professional Services`;
    }
    else if (instructionText.includes('subheading')) {
      return `Experience seamless relocation with our expert moving team from ${from} to ${to}. We handle all logistics for a stress-free move.`;
    }
    else if (instructionText.includes('step') || instructionText.includes('How the move works')) {
      return `Step ${index - 11}: Professional moving process with quality service`;
    }
    else if (instructionText.includes('paragraph')) {
      const wordMatch = instructionText.match(/(\d+)-?word/);
      const wordCount = wordMatch ? parseInt(wordMatch[1]) : 50;
      
      let baseText = `Our professional moving services from ${from} to ${to} ensure safe and efficient relocation. `;
      
      if (wordCount > 70) {
        baseText += `We provide comprehensive solutions including packing, transportation, and customs clearance. Our experienced team handles all aspects of your international move with care and professionalism. Trust movexos for a seamless relocation experience across borders.`;
      } else if (wordCount > 40) {
        baseText += `We handle packing, secure transport, and all necessary documentation. Our team ensures your belongings arrive safely at your new destination.`;
      } else {
        baseText += `Complete relocation services with insurance and tracking.`;
      }
      
      return baseText;
    }
    else {
      return `movexos Professional Moving: ${from} to ${to}`;
    }
  });

  return {
    slug: `${from}-${to}`,
    title: `Moving from ${from} to ${to} | Professional Relocation Services`,
    description: `Expert moving services from ${from} to ${to}. Get free quote for your relocation. Professional, insured, and reliable.`,
    seoTitle: `Moving from ${from} to ${to} | MovexOS Relocation Services`,
    seoDescription: `Professional moving company for ${from} to ${to} relocations. Full-service packing, transport, and insurance. Free quote available.`,
    seoImage: null,
    content: contentArray,
  };
}

export const generateAIContent = async ({
  from,
  to,
  query,
}: AIContentParams): Promise<AIContentResponse> => {
  // ✅ Bättre API key check
  if (!openai) {
    console.log("🔄 No OpenAI API key configured, using fallback content");
    return generateFallbackContent(from, to);
  }

  try {
    const structurePrompt = JSON.stringify(movexosStructure, null, 2);

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: `You are a professional SEO copywriter specialized in moving services. 
          You MUST return exactly ${Object.keys(movexosStructure).length} content items in the exact order specified.`,
        },
        {
          role: "user",
          content: `
            Generate structured SEO content for a moving service from ${from} to ${to}${
            query ? `, focusing on: ${query}` : ""
          }.

            Use the following EXACT JSON structure as your template - you MUST return all ${Object.keys(movexosStructure).length} items:
            ${structurePrompt}

            Return your response in valid JSON format ONLY with the same keys (0, 1, 2, etc.) - no extra text, no markdown, no explanations.
            Each value should be the generated content for that specific instruction.
          `,
        },
      ],
      temperature: 0.7,
      max_tokens: 4000,
    });

    let contentText = response.choices?.[0]?.message?.content ?? "";
    contentText = contentText.replace(/```json|```/g, "").trim();

    let parsed: AIParsedContent;
    try {
      parsed = JSON.parse(contentText);
    } catch {
      const match = contentText.match(/\{[\s\S]*\}/);
      if (match) {
        try {
          parsed = JSON.parse(match[0]);
        } catch {
          console.warn("⚠️ AI response contains invalid JSON, using fallback");
          return generateFallbackContent(from, to);
        }
      } else {
        console.warn("⚠️ No JSON found in AI response, using fallback");
        return generateFallbackContent(from, to);
      }
    }

    const contentArray: string[] = [];
    const totalItems = Object.keys(movexosStructure).length;
    
    for (let i = 0; i < totalItems; i++) {
      const content = parsed[i] || parsed[i.toString()];
      contentArray.push(content || `Content for moving from ${from} to ${to} - section ${i}`);
    }

    return {
      slug: `${from}-${to}`,
      title: parsed.seoTitle || `Moving from ${from} to ${to}`,
      description: parsed.seoDescription || `Professional moving services from ${from} to ${to}`,
      seoTitle: parsed.seoTitle || `Moving from ${from} to ${to} | MovexOS`,
      seoDescription: parsed.seoDescription || `Professional moving company for ${from} to ${to} relocations.`,
      seoImage: parsed.seoImage || null,
      content: contentArray,
    };
  } catch (err) {
    console.error("💥 AI generation error:", err);
    
    const error = err as OpenAIError;
    if (error.status === 429 || error.code === 'insufficient_quota') {
      console.log("🔄 Using FALLBACK content due to OpenAI quota");
      return generateFallbackContent(from, to);
    }
    
    console.log("🔄 Using FALLBACK content due to unknown error");
    return generateFallbackContent(from, to);
  }
};