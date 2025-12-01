// src/features/llm/providers/base.ts
import type { LLMProvider, LLMRequest, LLMResponse } from "../types";

export abstract class BaseProvider implements LLMProvider {
    abstract name: string;
    abstract getEndpoint(modelId: string, apiKey: string): string;
    abstract getHeaders(apiKey: string): Record<string, string>;
    abstract getPayload(modelId: string, request: LLMRequest): unknown;
    abstract extractResponse(data: unknown): string;

    async generate(modelId: string, apiKey: string, request: LLMRequest): Promise<LLMResponse> {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 60000); // 60s timeout

        try {
            const response = await fetch(this.getEndpoint(modelId, apiKey), {
                method: "POST",
                headers: this.getHeaders(apiKey),
                body: JSON.stringify(this.getPayload(modelId, request)),
                signal: controller.signal,
            });

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`HTTP ${response.status}: ${errorText}`);
            }

            const data = await response.json();
            const text = this.extractResponse(data);

            if (!text || text.trim().length === 0) {
                throw new Error("Empty Response from Provider");
            }

            return { text };
        } finally {
            clearTimeout(timeoutId);
        }
    }
}
