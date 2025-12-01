// src/ui/layout.ts
import { ConfigManager } from "@/shared/config";
import { BaseController } from "./base";

export class LayoutController extends BaseController {
    constructor() {
        super("app"); // Mount to root for global events
    }

    protected init(): void {
        this.applyTheme(ConfigManager.getTheme());
        this.setupEventListeners();
    }

    private setupEventListeners(): void {
        document.getElementById("themeToggle")?.addEventListener("click", () => {
            const current = ConfigManager.getTheme();
            const next = current === "dark" ? "light" : "dark";
            this.applyTheme(next);
            ConfigManager.setTheme(next);
        });

        // Settings Modal Toggles
        document.getElementById("openSettingsBtn")?.addEventListener("click", () => {
            document.getElementById("settingsModal")?.classList.remove("hidden");
            setTimeout(
                () =>
                    document.getElementById("settingsPanel")?.classList.remove("translate-x-full"),
                10,
            );
        });

        document
            .getElementById("closeSettingsBtn")
            ?.addEventListener("click", () => this.closeSettings());
        document
            .getElementById("settingsBackdrop")
            ?.addEventListener("click", () => this.closeSettings());
    }

    closeSettings(): void {
        document.getElementById("settingsPanel")?.classList.add("translate-x-full");
        setTimeout(() => document.getElementById("settingsModal")?.classList.add("hidden"), 300);
    }

    private applyTheme(theme: "light" | "dark"): void {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }
}
