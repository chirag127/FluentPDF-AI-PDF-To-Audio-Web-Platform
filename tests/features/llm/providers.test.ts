import { GeminiProvider } from "@/features/llm/providers/gemini";
import type { LLMRequest } from "@/features/llm/types";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

// Mock fetch
const fetchMock = vi.fn();
global.fetch = fetchMock;

describe("GeminiProvider", () => {
    let provider: GeminiProvider;

    beforeEach(() => {
        provider = new GeminiProvider();
        fetchMock.mockClear();
    });

    it("should generate correct endpoint and payload", async () => {
        fetchMock.mockResolvedValueOnce({
            ok: true,
            json: async () => ({
                candidates: [{ content: { parts: [{ text: "Response" }] } }],
            }),
        });

        const req: LLMRequest = {
            systemPrompt: "Sys",
            rulesPrompt: "Rules",
            userContent: "User",
        };

        const res = await provider.generate("gemini-1.5", "key", req);

        expect(res.text).toBe("Response");
        expect(fetchMock).toHaveBeenCalledWith(
            expect.stringContaining("gemini-1.5:generateContent?key=key"),
            expect.objectContaining({
                method: "POST",
                headers: { "Content-Type": "application/json" },
            }),
        );
    });

    it("should handle errors", async () => {
        fetchMock.mockResolvedValueOnce({
            ok: false,
            status: 400,
            text: async () => "Bad Request",
        });

        const req: LLMRequest = { systemPrompt: "", rulesPrompt: "", userContent: "" };
        await expect(provider.generate("model", "key", req)).rejects.toThrow(
            "HTTP 400: Bad Request",
        );
    });

    it("should handle empty response", async () => {
        fetchMock.mockResolvedValueOnce({
            ok: true,
            json: async () => ({ candidates: [] }),
        });
        const req: LLMRequest = { systemPrompt: "", rulesPrompt: "", userContent: "" };
        await expect(provider.generate("model", "key", req)).rejects.toThrow("Empty Response");
    });
});
