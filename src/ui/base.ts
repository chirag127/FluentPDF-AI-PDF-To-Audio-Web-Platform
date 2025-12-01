// src/ui/base.ts
export abstract class BaseController {
    protected element: HTMLElement | null = null;

    constructor(protected containerId: string) {}

    mount(): void {
        this.element = document.getElementById(this.containerId);
        if (!this.element) {
            console.error(`Element with id ${this.containerId} not found`);
            return;
        }
        this.init();
    }

    protected abstract init(): void;

    protected show(): void {
        this.element?.classList.remove("hidden");
    }

    protected hide(): void {
        this.element?.classList.add("hidden");
    }
}
