import { LLMEngine } from "@/features/llm/engine";
import { ConfigManager } from "@/shared/config";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

// Mock Config
vi.mock("@/shared/config", () => ({
    ConfigManager: {
        getApiKey: vi.fn(),
        getModelOrder: vi.fn().mockReturnValue([]),
        getSystemPrompt: vi.fn().mockReturnValue("sys"),
        getRulesPrompt: vi.fn().mockReturnValue("rules"),
    },
}));

describe("LLMEngine", () => {
    let engine: LLMEngine;

    beforeEach(() => {
        engine = new LLMEngine();
        vi.clearAllMocks();
    });

    it("should return error string in results if no models available", async () => {
        (ConfigManager.getApiKey as any).mockReturnValue(null);
        // processBatch does not throw, it returns results array with error messages.
        const results = await engine.processBatch(["chunk"], vi.fn());
        expect(results[0]).toContain("No API Keys configured");
    });
});
