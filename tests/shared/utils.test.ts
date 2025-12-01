import { chunkText, formatBytes, sanitizeFileName } from "@/shared/utils";
import { describe, expect, it } from "vitest";

describe("Utils", () => {
    describe("chunkText", () => {
        it("should chunk text correctly based on size", () => {
            const text = "Line 1\nLine 2\nLine 3";
            const chunks = chunkText(text, 10); // Small chunk size
            // "Line 1\n" is 7 chars. "Line 2\n" is 7 chars.
            // 7 < 10. 7+7 = 14 > 10. So split.
            expect(chunks.length).toBeGreaterThan(1);
            expect(chunks[0]).toContain("Line 1");
        });

        it("should handle empty text", () => {
            expect(chunkText("", 100)).toEqual([]);
        });
    });

    describe("formatBytes", () => {
        it("should format bytes to human readable string", () => {
            expect(formatBytes(0)).toBe("0 Bytes");
            expect(formatBytes(1024)).toBe("1 KB");
            expect(formatBytes(1024 * 1024)).toBe("1 MB");
        });
    });

    describe("sanitizeFileName", () => {
        it("should remove special characters", () => {
            expect(sanitizeFileName("Hello World!.pdf")).toBe("hello_world__pdf");
        });
    });
});
