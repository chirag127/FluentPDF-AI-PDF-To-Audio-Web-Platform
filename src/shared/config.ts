// src/shared/config.ts

export const DEFAULT_SYSTEM_PROMPT =
    "You are an expert Audiobook Script Writer. Your goal is to convert technical documents (PDFs) into engaging, listenable audio scripts. You must rewrite raw code, tables, and diagrams into natural, descriptive English suitable for Text-to-Speech. Never read raw code or data structures verbatim. CRITICAL: Do NOT add spaces between letters in words.";

export const DEFAULT_RULES_PROMPT =
    "1. **NARRATIVE FLOW**: Rewrite content as a continuous, engaging narrative. Avoid bullet points if possible; use full sentences.\n2. **CODE & DATA**: Do NOT read code (SQL, Python, etc.) or tables row-by-row. Instead, describe what they do (e.g., 'This SQL script creates three tables for a fantasy sports database: performance, league, and team...').\n3. **VISUALS**: Describe charts and diagrams naturally (e.g., 'The chart shows a steady increase in revenue...').\n4. **CLEANUP**: Fix broken OCR text, join hyphenated words, and remove page numbers/headers/footers.\n5. **NO FILLER**: Output ONLY the script. No 'Here is the text' or markdown code blocks.\n6. **CRITICAL**: Write normal words without spaces between letters. 'files' not 'f i l e s'.";

export const DEFAULT_CONCURRENCY = 5;
export const DEFAULT_RETRY_DELAY = 3000;

export interface AppConfig {
    concurrency: number;
    retryDelay: number;
    systemPrompt: string;
    rulesPrompt: string;
    apiKeys: Record<string, string>;
    modelOrder: string[];
    theme: "light" | "dark";
}

const STORAGE_PREFIX = "sf_";

export const ConfigManager = {
    get: (key: string): string | null => {
        return localStorage.getItem(`${STORAGE_PREFIX}${key}`);
    },

    set: (key: string, value: string): void => {
        localStorage.setItem(`${STORAGE_PREFIX}${key}`, value);
    },

    getJSON: <T>(key: string): T | null => {
        const item = localStorage.getItem(`${STORAGE_PREFIX}${key}`);
        return item ? JSON.parse(item) : null;
    },

    setJSON: <T>(key: string, value: T): void => {
        localStorage.setItem(`${STORAGE_PREFIX}${key}`, JSON.stringify(value));
    },

    // Specific Getters
    getConcurrency: (): number => {
        const val = ConfigManager.get("set_concurrency");
        return val ? Number.parseInt(val, 10) : DEFAULT_CONCURRENCY;
    },

    getRetryDelay: (): number => {
        const val = ConfigManager.get("set_retryDelay");
        return val ? Number.parseInt(val, 10) : DEFAULT_RETRY_DELAY;
    },

    getSystemPrompt: (): string => {
        return ConfigManager.get("set_sysPrompt") || DEFAULT_SYSTEM_PROMPT;
    },

    getRulesPrompt: (): string => {
        return ConfigManager.get("set_rulesPrompt") || DEFAULT_RULES_PROMPT;
    },

    getModelOrder: (): string[] => {
        return ConfigManager.getJSON<string[]>("modelOrder") || [];
    },

    setModelOrder: (order: string[]): void => {
        ConfigManager.setJSON("modelOrder", order);
    },

    getApiKey: (provider: string): string | null => {
        return ConfigManager.get(`key_${provider}`);
    },

    setApiKey: (provider: string, key: string): void => {
        ConfigManager.set(`key_${provider}`, key);
    },

    getTheme: (): "light" | "dark" => {
        return (ConfigManager.get("theme") as "light" | "dark") || "light";
    },

    setTheme: (theme: "light" | "dark"): void => {
        ConfigManager.set("theme", theme);
    },

    export: (): void => {
        const data: Record<string, string | null> = {};
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key?.startsWith(STORAGE_PREFIX)) {
                data[key] = localStorage.getItem(key);
            }
        }
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "fluentpdf_config.json";
        a.click();
        URL.revokeObjectURL(url);
    },

    import: (file: File): Promise<void> => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = (e) => {
                try {
                    const data = JSON.parse(e.target?.result as string);
                    for (const k of Object.keys(data)) {
                        if (k.startsWith(STORAGE_PREFIX)) {
                            localStorage.setItem(k, data[k]);
                        }
                    }
                    resolve();
                } catch (err) {
                    reject(err);
                }
            };
            reader.onerror = reject;
            reader.readAsText(file);
        });
    },
};
