// src/features/llm/types.ts

export interface LLMRequest {
    systemPrompt: string;
    rulesPrompt: string;
    userContent: string;
}

export interface LLMResponse {
    text: string;
    usage?: {
        promptTokens: number;
        completionTokens: number;
    };
}

export interface ModelDefinition {
    id: string;
    name: string;
    provider: string;
}

export interface LLMProvider {
    name: string;
    generate(modelId: string, apiKey: string, request: LLMRequest): Promise<LLMResponse>;
}

export const MODELS: ModelDefinition[] = [
    // --- User Preferred Models (Top Priority) ---
    { id: "gemini-2.0-flash", name: "Gemini 2.0 Flash", provider: "gemini" },
    {
        id: "gemini-2.0-flash-lite-preview-02-05",
        name: "Gemini 2.0 Flash Lite",
        provider: "gemini",
    },
    { id: "gemini-1.5-flash", name: "Gemini 1.5 Flash", provider: "gemini" },

    // Cerebras
    { id: "llama3.1-70b", name: "Cerebras: Llama 3.1 70B", provider: "cerebras" },
    { id: "llama-3.3-70b", name: "Cerebras: Llama 3.3 70B", provider: "cerebras" },

    // Groq
    { id: "llama-3.3-70b-versatile", name: "Groq: Llama 3.3 70B", provider: "groq" },
    { id: "llama-3.1-8b-instant", name: "Groq: Llama 3.1 8B", provider: "groq" },
    { id: "mixtral-8x7b-32768", name: "Groq: Mixtral 8x7b", provider: "groq" },
    { id: "deepseek-r1-distill-llama-70b", name: "Groq: DeepSeek R1 Distill", provider: "groq" },

    // OpenRouter
    {
        id: "deepseek/deepseek-r1:free",
        name: "OpenRouter: DeepSeek R1 (Free)",
        provider: "openrouter",
    },
    {
        id: "deepseek/deepseek-r1-distill-llama-70b:free",
        name: "OpenRouter: R1 Distill Llama 70B",
        provider: "openrouter",
    },
    {
        id: "meta-llama/llama-3.3-70b-instruct:free",
        name: "OpenRouter: Llama 3.3 70B",
        provider: "openrouter",
    },

    // Mistral
    { id: "mistral-small-latest", name: "Mistral: Small", provider: "mistral" },

    // Cohere
    { id: "command-r-plus-08-2024", name: "Cohere: Command R+", provider: "cohere" },
];
