import { BaseController } from "@/ui/base";
// tests/ui/base.test.ts
import { beforeEach, describe, expect, it, vi } from "vitest";

class TestController extends BaseController {
    public initCalled = false;
    protected init(): void {
        this.initCalled = true;
    }
}

describe("BaseController", () => {
    let controller: TestController;

    beforeEach(() => {
        document.body.innerHTML = '<div id="test"></div>';
        controller = new TestController("test");
    });

    it("should find element and call init on mount", () => {
        controller.mount();
        expect(controller.initCalled).toBe(true);
    });

    it("should log error if element not found", () => {
        const consoleSpy = vi.spyOn(console, "error").mockImplementation(() => {});
        const badController = new TestController("missing");
        badController.mount();
        expect(consoleSpy).toHaveBeenCalled();
        expect(badController.initCalled).toBe(false);
    });
});
