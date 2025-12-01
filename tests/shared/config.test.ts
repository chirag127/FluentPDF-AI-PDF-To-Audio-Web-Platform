import { ConfigManager, DEFAULT_CONCURRENCY } from "@/shared/config";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

describe("ConfigManager", () => {
    beforeEach(() => {
        localStorage.clear();
        vi.clearAllMocks();
    });

    it("should get default concurrency if not set", () => {
        expect(ConfigManager.getConcurrency()).toBe(DEFAULT_CONCURRENCY);
    });

    it("should get set concurrency", () => {
        ConfigManager.set("set_concurrency", "10");
        expect(ConfigManager.getConcurrency()).toBe(10);
    });

    it("should store and retrieve API keys", () => {
        ConfigManager.setApiKey("gemini", "12345");
        expect(ConfigManager.getApiKey("gemini")).toBe("12345");
        expect(localStorage.getItem("sf_key_gemini")).toBe("12345");
    });

    it("should handle JSON config", () => {
        const order = ["a", "b", "c"];
        ConfigManager.setModelOrder(order);
        expect(ConfigManager.getModelOrder()).toEqual(order);
    });
});
