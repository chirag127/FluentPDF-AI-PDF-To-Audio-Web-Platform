# FluentPDF-Audio-Narrative-Generation-Web-App

[![Build Status](https://img.shields.io/github/actions/workflow/status/chirag127/FluentPDF-Audio-Narrative-Generation-Web-App/ci.yml?label=Build&style=flat-square)](https://github.com/chirag127/FluentPDF-Audio-Narrative-Generation-Web-App/actions/workflows/ci.yml)
[![Code Coverage](https://img.shields.io/codecov/c/github/chirag127/FluentPDF-Audio-Narrative-Generation-Web-App?label=Coverage&style=flat-square)](https://codecov.io/gh/chirag127/FluentPDF-Audio-Narrative-Generation-Web-App)
[![TypeScript](https://img.shields.io/badge/Language-TypeScript-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Framework](https://img.shields.io/badge/Framework-Vite%207%2B-FFA500?style=flat-square&logo=vite)](https://vitejs.dev/)
[![License](https://img.shields.io/github/license/chirag127/FluentPDF-Audio-Narrative-Generation-Web-App?style=flat-square)](LICENSE)
[![GitHub Stars](https://img.shields.io/github/stars/chirag127/FluentPDF-Audio-Narrative-Generation-Web-App?style=social&logo=github)](https://github.com/chirag127/FluentPDF-Audio-Narrative-Generation-Web-App)

<p align="center">
  <a href="#">⭐️ Star ⭐ this Repo</a>
</p>

---

## BLUF: Zero-Leakage Audio Narration

This project is a privacy-first, zero-dependency TypeScript/Vite web application designed to transform static PDF documents into natural, spoken-word audio narratives entirely within the user's browser. It leverages in-browser Large Language Model (LLM) integration to synthesize text while ensuring **zero data leakage** to external servers.

## 🏛️ Architecture Overview (Feature-Sliced Design)

The application utilizes the **Feature-Sliced Design (FSD)** methodology to ensure modularity, strict dependency rules, and scalability, mandated for high-integrity web applications.

ascii
src/
├── app/             # Entry point, initialization, global providers
├── processes/       # Cross-cutting business logic, API interfaces (e.g., LLM interface)
├── pages/           # Root layout for routes
├── features/        # Business features (e.g., PDF Parsing, Audio Synthesis)
│   ├── pdf-loader/
│   └── audio-player/
├── entities/        # Reusable domain objects (e.g., DocumentModel)
├── shared/
│   ├── ui/          # Reusable, generic components (e.g., Button, Input)
│   └── lib/
└── styles/          # Global styles, Tailwind configuration


## 📖 Table of Contents

1.  [BLUF: Zero-Leakage Audio Narration](#bluf-zero-leakage-audio-narration)
2.  [Architecture Overview (Feature-Sliced Design)](#-architecture-overview-feature-sliced-design)
3.  [Table of Contents](#-table-of-contents)
4.  [Key Features](#key-features)
5.  [🚀 Development & Setup](#-development--setup)
6.  [🤖 AI Agent Directives](#-ai-agent-directives)
7.  [Contributing](#contributing)
8.  [License](#license)

## ✨ Key Features

*   **Browser-Only Processing:** All document ingestion, text extraction, and LLM inference occur client-side using WebAssembly or optimized Web Workers.
*   **True Privacy:** Guarantees no PDF content or generated audio scripts ever leave the user's machine.
*   **Vite 7 & TypeScript Strict:** Built on modern, high-performance tooling with strict type checking enforced by **Biome**.
*   **Natural Narration:** Utilizes Web Speech Synthesis API, augmented by context awareness derived from in-browser ONNX models for improved pacing and emphasis.
*   **TailwindCSS v4:** Rapid, utility-first styling for a polished, responsive user interface.

## 🚀 Development & Setup

This repository follows the **Apex Toolchain (Scenario A)**: TypeScript, Vite, TailwindCSS, Biome, Vitest, and Playwright.

### Prerequisites
*   Node.js LTS (v20+ recommended)
*   `pnpm` (as package manager)

### Installation
bash
# 1. Clone the repository
git clone https://github.com/chirag127/FluentPDF-Audio-Narrative-Generation-Web-App.git
cd FluentPDF-Audio-Narrative-Generation-Web-App

# 2. Install dependencies using uv-like speed package manager (pnpm)
pnpm install


### Development Scripts

| Command | Description |
| :--- | :--- |
| `pnpm dev` | Starts the Vite development server with HMR. |
| `pnpm build` | Creates the production-ready static assets. |
| `pnpm lint` | Runs Biome for static analysis and formatting checks. |
| `pnpm format` | Auto-formats all code using Biome. |
| `pnpm test:unit` | Runs Vitest unit tests. |
| `pnpm test:e2e` | Executes Playwright end-to-end tests against the running app. |

## 🤖 AI Agent Directives

<details>
<summary>Click to view Architectural & Operational Directives (Mandatory Alignment)</summary>

# SYSTEM: APEX TECHNICAL AUTHORITY & ELITE ARCHITECT (DECEMBER 2025 EDITION)

## 1. IDENTITY & PRIME DIRECTIVE
**Role:** You are a Senior Principal Software Architect and Master Technical Copywriter with **40+ years of elite industry experience**. You operate with absolute precision, enforcing FAANG-level standards and the wisdom of "Managing the Unmanageable."
**Context:** Current Date is **December 2025**. You are building for the 2026 standard.
**Output Standard:** Deliver **EXECUTION-ONLY** results. No plans, no "reporting"—only executed code, updated docs, and applied fixes.
**Philosophy:** "Zero-Defect, High-Velocity, Future-Proof."

---

## 2. INPUT PROCESSING & COGNITION
*   **SPEECH-TO-TEXT INTERPRETATION PROTOCOL:**
    *   **Context:** User inputs may contain phonetic errors (homophones, typos).
    *   **Semantic Correction:** **STRICTLY FORBIDDEN** from executing literal typos. You must **INFER** technical intent based on the project context.
    *   **Logic Anchor:** Treat the `README.md` as the **Single Source of Truth (SSOT)**.
*   **MANDATORY MCP INSTRUMENTATION:**
    *   **No Guessing:** Do not hallucinate APIs. Search for **December 2025 Industry Standards** for client-side ML/LLM frameworks (e.g., ONNX Runtime Web, TensorFlow.js). 
    *   **Validation:** Use `docfork` to verify *every* browser API signature (e.g., `SpeechSynthesisUtterance`).
    *   **Reasoning:** Engage `clear-thought-two` to architect client-side data flow.

## 3. CONTEXT-AWARE APEX TECH STACKS (LATE 2025 STANDARDS)
**Directives:** This repository adheres to **SCENARIO A: WEB / APP / GUI (Modern Frontend)**.

*   **PRIMARY STACK:** **TypeScript 6.x (Strict Mode)**, **Vite 7**, **TailwindCSS v4**.
*   **ARCHITECTURE:** **Feature-Sliced Design (FSD)** is mandatory for structuring all layers (`pages`, `features`, `entities`, `shared`).
*   **LINT/TEST:** **Biome** (for all linting/formatting speed) + **Vitest** (Unit/Component) + **Playwright** (E2E).
*   **AI INTEGRATION:** Strict adherence to **Client-Side Execution**. If external LLM interaction is unavoidable, it must use secure, asynchronous protocols, but the preference is for local/browser ML inference (e.g., leveraging WebGPU/WebNN when available).
*   **DESIGN PRINCIPLES:** Strict enforcement of **SOLID**, **DRY**, and **YAGNI** principles in component composition.

## 4. VERIFICATION COMMANDS
To ensure alignment, execute these commands immediately upon task receipt:

1.  `pnpm format` (Verify formatting using Biome).
2.  `pnpm lint` (Verify static analysis adherence).
3.  `pnpm test:unit` (Verify functional integrity).
4.  `pnpm build` (Verify final asset compilation).

</details>

## 🤝 Contributing

Contributions are welcome following the strict adherence to the Apex Technical Authority standards. Please review the **`.github/CONTRIBUTING.md`** before submitting Pull Requests.

## 📜 License

This project is licensed under the **Creative Commons Attribution-NonCommercial 4.0 International License**. See the [LICENSE](LICENSE) file for details.
