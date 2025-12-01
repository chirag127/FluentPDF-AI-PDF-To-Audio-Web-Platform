# FluentPDF - Bulletproof PDF Engine

[![CI](https://github.com/chirag127/FluentPDF-Convert-To-Readable-Spokable-Pdf-Website/actions/workflows/ci.yml/badge.svg)](https://github.com/chirag127/FluentPDF-Convert-To-Readable-Spokable-Pdf-Website/actions/workflows/ci.yml)
[![Biome](https://img.shields.io/badge/code_style-biome-yellow.svg)](https://biomejs.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.0-646CFF.svg)](https://vitejs.dev/)

**FluentPDF** is an elite, zero-dependency, single-file web application designed to convert technical PDFs into natural, spoken-word audio scripts using advanced LLMs.

**"Zero-Defect. High-Velocity. Future-Proof."**

## 🚀 Features

*   **Intelligent Parsing**: Visual extraction of PDF content.
*   **LLM Transformation**: Converts code/tables to narrative English.
*   **Multi-Provider**: Gemini, Groq, Cerebras, OpenRouter, Mistral, Cohere.
*   **Bulletproof**: Infinite retry, auto-failover, unlimited concurrency.
*   **Privacy-First**: Local processing, direct API calls (no middleman).
*   **Zero-Install**: Runs as a single `index.html` file.

## 🛠️ Tech Stack (Apex Standards)

*   **Core**: TypeScript (Strict), Vite, Tailwind CSS.
*   **Quality**: Biome (Lint/Format), Vitest (Test), GitHub Actions (CI/CD).
*   **Architecture**: Modular, Feature-First, SOLID, Clean Code.

## 📦 Usage

### Development

1.  **Install**: `npm install`
2.  **Dev Server**: `npm run dev` (Not configured in package.json yet, use `npx vite`)
3.  **Test**: `npm test`
4.  **Lint**: `npm run lint`

### Build

To generate the standalone `index.html`:

```bash
npm run build
```

The output will be in `dist/index.html`.

## 🏗️ Architecture

```
src/
├── features/       # Feature-based modules (LLM, PDF)
├── shared/         # Shared utilities (Config, DB)
├── ui/             # UI Controllers & Components
├── main.ts         # Application Entry Point
└── style.css       # Global Styles (Tailwind)
tests/              # Mirror of src/
```

## ⭐ Support

If you find this project useful, please **Star ⭐ this repository**! It helps the project grow and reach more users.

## 📄 License

Open Source.
