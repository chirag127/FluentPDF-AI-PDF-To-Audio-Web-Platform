import { PdfRenderer } from "@/features/pdf/renderer";
import { jsPDF } from "jspdf";
import { beforeEach, describe, expect, it, vi } from "vitest";

// Mock jsPDF
vi.mock("jspdf", () => {
    return {
        jsPDF: vi.fn().mockImplementation(() => ({
            internal: {
                pageSize: {
                    getWidth: () => 210,
                    getHeight: () => 297,
                },
            },
            setFontSize: vi.fn(),
            setFont: vi.fn(),
            splitTextToSize: vi.fn().mockReturnValue(["line1", "line2"]),
            text: vi.fn(),
            addPage: vi.fn(),
            output: vi.fn().mockReturnValue(new Blob(["pdf-content"])),
        })),
    };
});

describe("PdfRenderer", () => {
    let renderer: PdfRenderer;

    beforeEach(() => {
        renderer = new PdfRenderer();
        vi.clearAllMocks();
    });

    it("should create a PDF blob from chunks", () => {
        const chunks = ["# Title", "Paragraph"];
        const blob = renderer.createPdf("test.pdf", chunks);

        expect(blob).toBeInstanceOf(Blob);
        expect(jsPDF).toHaveBeenCalled();
    });
});
