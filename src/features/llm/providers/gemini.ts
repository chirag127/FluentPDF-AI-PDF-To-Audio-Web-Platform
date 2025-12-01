import type { LLMRequest } from "../types";
// src/features/llm/providers/gemini.ts
import { BaseProvider } from "./base";

export class GeminiProvider extends BaseProvider {
    name = "gemini";

    getEndpoint(modelId: string, apiKey: string): string {
        return `https://generativelanguage.googleapis.com/v1beta/models/${modelId}:generateContent?key=${apiKey}`;
    }

    getHeaders(): Record<string, string> {
        return { "Content-Type": "application/json" };
    }

    getPayload(_modelId: string, request: LLMRequest): unknown {
        return {
            contents: [
                {
                    parts: [
                        {
                            text: `${request.systemPrompt}\n\nRULES:\n${request.rulesPrompt}\n\nINPUT TEXT TO CONVERT:\n${request.userContent}`,
                        },
                    ],
                },
            ],
        };
    }

    extractResponse(data: unknown): string {
        // biome-ignore lint/suspicious/noExplicitAny: External API response is untyped
        const d = data as any;
        return d.candidates?.[0]?.content?.parts?.[0]?.text || "";
    }
}
