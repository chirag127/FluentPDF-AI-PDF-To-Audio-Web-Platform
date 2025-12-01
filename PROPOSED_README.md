# FluentPDF-Audio-Narrative-Generation-Web-App

## Vision Statement

This repository archives the architectural blueprint for a privacy-centric, zero-dependency TypeScript/Vite web application designed to convert static PDF documents into high-fidelity, natural spoken-word audio narratives entirely within the user's browser. By leveraging in-browser LLM integration, this solution ensures zero data leakage, maintaining absolute document confidentiality.

## 🤖 Agent Directives & Architectural Alignment

<details>
<summary><strong>⚙️ Apex AI Agent Protocol: Configuration for Future Iteration</strong></summary>

This project is scoped as a **Frontend/Web Application** utilizing the **Apex TypeScript Standard (2025 Edition)**. Future maintenance agents must adhere to the following constraints:

### 1. Core Technology Stack Definition
*   **Language:** TypeScript (Strict Mode enforced).
*   **Bundler/Runner:** Vite 7 (Targeting modern module formats).
*   **Styling:** TailwindCSS v4 (Utility-First, Responsive Design).
*   **Architecture Pattern:** Feature-Sliced Design (FSD) for robust modularity and scalability.
*   **State Management:** Signals (Leveraging modern reactivity patterns over heavy stores).
*   **Local Execution Environment:** Node.js 20+ required.

### 2. Verification & Quality Gates
*   **Static Analysis:** **Biome** (Linter/Formatter) must pass with zero errors (`npx @biomejs/biome check .`). Adherence to the established `.eslintrc.cjs` and `biome.json` configuration is mandatory.
*   **Unit Testing:** **Vitest** is the standard testing framework. Aim for >90% coverage on all service and core logic layers.
*   **E2E Testing:** **Playwright** must validate the core narrative generation pipeline flow, including PDF upload and audio playback initiation.
*   **Dependency Audit:** **`npx audit-ci --strict`** must pass. No dependency older than Q4 2025 is permitted unless explicitly whitelisted in `package.json`.

### 3. Core Architectural Principles Enforced
*   **SOLID:** Strict adherence, especially Dependency Inversion Principle (DIP) for abstracting the browser-side Text-to-Speech (TTS) engine and potential future WebAssembly LLM interfaces.
*   **DRY:** All UI components must be composable, leveraging the established Tailwind configuration. No duplicated styles or logic segments.
*   **YAGNI:** Features must only exist if they directly support the core PDF-to-Audio mandate. Avoid pre-emptive complexity.

### 4. Core LLM Integration Requirements
*   **Data Handling:** Strict enforcement of **client-side-only** processing. Under no circumstances should document text or user inputs leave the client context for narrative generation APIs. If external LLMs are required for *summary* (not TTS), this must be implemented as an opt-in, explicitly warned feature.
*   **TTS Strategy:** Primary reliance on the native `window.speechSynthesis` API. Fallback strategy must be documented but not implemented unless performance benchmarks fail.

</details>

---

## 🚀 Architecture Diagram (Feature-Sliced Design)**

ascii
       [Presentation Layer: UI/Pages/Modals]
                 |
       [Features Layer: Modules/NarrativeGenerator]
                 |
       [Entities Layer: Domain Logic/PDFParser/TtsEngine]
                 |
[Shared Layer: Types/Utils/Config/Theme (Tailwind)]


## 📦 Quick Access & Badges

[![Build Status](https://img.shields.io/github/actions/workflow/status/chirag127/FluentPDF-Audio-Narrative-Generation-Web-App/ci.yml?style=flat-square&logo=github)](https://github.com/chirag127/FluentPDF-Audio-Narrative-Generation-Web-App/actions/workflows/ci.yml)
[![Code Coverage](https://img.shields.io/codecov/c/github/chirag127/FluentPDF-Audio-Narrative-Generation-Web-App?style=flat-square&token=YOUR_CODECOV_TOKEN)](https://codecov.io/gh/chirag127/FluentPDF-Audio-Narrative-Generation-Web-App)
[![Language](https://img.shields.io/badge/TypeScript-3.9%2B-007ACC?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Framework](https://img.shields.io/badge/Vite%207%20%7C%20TS-FF6A00?style=flat-square&logo=vite)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-CC%20BY--NC%204.0-blue?style=flat-square)](LICENSE)
[![GitHub Stars](https://img.shields.io/github/stars/chirag127/FluentPDF-Audio-Narrative-Generation-Web-App?style=flat-square&logo=github)](https://github.com/chirag127/FluentPDF-Audio-Narrative-Generation-Web-App)

[⭐ Star this Repo to follow its evolution! ⭐](https://github.com/chirag127/FluentPDF-Audio-Narrative-Generation-Web-App)

## 📋 Table of Contents

1.  [Vision Statement](#vision-statement)
2.  [Agent Directives & Architectural Alignment](#-ai-agent-directives--architectural-alignment)
3.  [Architecture Diagram (Feature-Sliced Design)](#-architecture-diagram-feature-sliced-design)
4.  [Quick Access & Badges](#-quick-access--badges)
5.  [Table of Contents](#-table-of-contents)
6.  [Core Features](#-core-features)
7.  [Development & Setup](#-development--setup)
    *   [Prerequisites](#prerequisites)
    *   [Installation](#installation)
    *   [Execution Scripts](#execution-scripts)
8.  [Architectural Principles](#-architectural-principles)
9.  [Contributing](#-contributing)
10. [License](#-license)

## ✨ Core Features

*   **Zero-Leakage Processing:** All PDF parsing and text extraction occurs exclusively in the browser sandbox, guaranteeing client privacy.
*   **High-Fidelity TTS:** Utilizes modern Web Speech Synthesis APIs for natural, non-robotic voice output.
*   **Vite/Tailwind Rapid Development:** Leverages the speed of Vite 7 and the utility-first approach of TailwindCSS v4 for efficient UI iteration.
*   **FSD Structure:** Implements Feature-Sliced Design for clear separation between presentation, business logic (features), and core domain entities.

## 🛠️ Development & Setup

### Prerequisites
*   Node.js (v20.0.0+)
*   npm or uv (If integrated for specific tooling, though primarily using npm/pnpm for frontend tooling)

### Installation

bash
git clone https://github.com/chirag127/FluentPDF-Audio-Narrative-Generation-Web-App.git
cd FluentPDF-Audio-Narrative-Generation-Web-App
npm install


### Execution Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the development server with Hot Module Replacement (HMR). |
| `npm run build` | Produces the production-ready, optimized static assets. |
| `npm test` | Runs Vitest unit tests across all feature layers. |
| `npm run test:e2e` | Executes Playwright End-to-End tests. |
| `npx @biomejs/biome check` | Runs static analysis and formatting checks. |

## 🏛️ Architectural Principles

This archive adheres to the following foundational software engineering tenets:

1.  **SOLID:** Design for maintainability and extension.
2.  **DRY:** Eliminate redundant code segments.
3.  **YAGNI:** Implement functionality only when necessary.
4.  **Immutability:** Favor immutable data structures, especially within state logic.

## 🤝 Contributing

Please refer to the comprehensive guidelines in the `.github/CONTRIBUTING.md` file before submitting pull requests or reporting issues. All contributions must pass the established CI pipeline defined in `ci.yml`.

## 📜 License

This project is licensed under the **Creative Commons Attribution-NonCommercial 4.0 International License**. See the [LICENSE](LICENSE) file for full details.
