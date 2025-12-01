# 🚀 Contributing to FluentPDF-AI-PDF-To-Audio-Web-Platform

Thank you for considering contributing to FluentPDF! We appreciate your interest in making this project even better. This document outlines the guidelines for contributing to ensure a smooth and effective collaboration for everyone involved.

## 🌟 Code of Conduct

Please note that this project maintains a high standard of professional and respectful interaction. By participating in this project, you agree to uphold these standards, ensuring an inclusive and welcoming environment for all contributors.

## ✨ How Can I Contribute?

There are many ways to contribute to FluentPDF, whether you're a developer, designer, writer, or user:

### 🐛 Reporting Bugs

If you find a bug, please help us by [opening a bug report issue](ISSUE_TEMPLATE/bug_report.md). Provide a clear and concise description of the problem, including steps to reproduce it, expected behavior, and actual behavior. Screenshots or error logs are highly appreciated.

### 💡 Suggesting Enhancements

Have an idea for a new feature or an improvement to an existing one? We'd love to hear it! Please [open a new issue](https://github.com/your-organization/FluentPDF-AI-PDF-To-Audio-Web-Platform/issues/new/choose) and describe your suggestion in detail. Explain why it would be valuable to the project and provide any relevant examples or mockups.

### 📓 Improving Documentation

Documentation is crucial for any project. If you find errors, omissions, or areas that could be clearer in our `README.md`, or any other documentation, please consider submitting a pull request.

### 💻 Writing Code

If you're interested in contributing code, please follow the guidelines below.

---

## 🛠️ Getting Started: Development Setup

To get a local copy of FluentPDF up and running, follow these steps:

### Prerequisites

Ensure you have the following installed:
*   **Node.js** (LTS version, e.g., 20.x or higher)
*   **pnpm** (preferred package manager): `npm install -g pnpm`
*   **Git**

### 1. Fork and Clone the Repository

First, fork the FluentPDF repository on GitHub. Then, clone your forked repository to your local machine:

```bash
git clone https://github.com/your-organization/FluentPDF-AI-PDF-To-Audio-Web-Platform.git
cd FluentPDF-AI-PDF-To-Audio-Web-Platform
```

### 2. Install Dependencies

Install all project dependencies using `pnpm`:

```bash
pnpm install
```

### 3. Environment Variables

FluentPDF utilizes environment variables for configuration. Create a `.env` file in the root directory and populate it with necessary values (e.g., API keys for LLM providers). Refer to `.env.example` for required variables.

```env
# .env example
VITE_GEMINI_API_KEY=YOUR_GEMINI_API_KEY
VITE_GROQ_API_KEY=YOUR_GROQ_API_KEY
# Add other necessary keys for Cerebras, etc.
```

### 4. Run the Development Server

Start the development server:

```bash
pnpm dev
```

This will typically launch the application in your browser at `http://localhost:5173`.

### 5. Run Tests

Execute unit and integration tests:

```bash
pnpm test
```

For end-to-end tests (requires Playwright setup):

```bash
pnpm test:e2e
```

---

## 🌿 Branching Strategy

We use a `main` branch strategy.
*   All new features and bug fixes should be developed in dedicated feature branches (e.g., `feat/add-dark-mode`, `fix/login-bug`).
*   Branch names should be descriptive and use `kebab-case`.
*   Regularly pull from `upstream/main` to keep your branch up-to-date.

---

## ✍️ Commit Guidelines

We enforce **Conventional Commits** for clear commit history and automated changelog generation.

*   **Format:** `<type>(<scope>): <description>`
*   **Types:** `feat` (new feature), `fix` (bug fix), `docs` (documentation), `style` (formatting, no code change), `refactor` (code refactoring), `perf` (performance improvement), `test` (adding tests), `chore` (build process or auxiliary changes).
*   **Scope:** (Optional) A short description of the part of the codebase affected (e.g., `feat(parser): add-pdf-parser`, `fix(ui): dark-mode-toggle`).
*   **Description:** A concise, imperative, present-tense description.

**Example:**
```
feat(ui): add dark mode toggle
fix(parser): handle malformed PDF headers
docs: update contributing guidelines
```

---

## ⛒️ Code Style & Linting

We use **Biome** for code formatting and linting. This ensures consistent code style across the project.
*   Before committing, run: `pnpm format` or `pnpm lint:fix`
*   Your CI/CD pipeline will automatically check for formatting and linting issues.

---

## ✅ Testing Guidelines

*   **Comprehensive Coverage:** Every feature or bug fix should be accompanied by relevant tests (unit, integration, or E2E).
*   **Test Folder Structure:** Tests reside exclusively in the `tests/` directory, mirroring the source structure.
*   **The FIRST Principles:** Tests should be **F**ast, **I**solated, **R**epeatable, **S**elf-validating, and **T**horough.
*   **Zero-Error Standard:** All tests **must pass** before a pull request can be merged. Ensure 1:1 test coverage where applicable.

---

## 🔒 Security Practices

Security is paramount.
*   **Zero Trust:** Assume all inputs are malicious. Sanitize and validate all user-provided data.
*   **Dependency Audits:** Ensure your changes do not introduce new vulnerabilities. Our CI/CD includes automated dependency audits.
*   Refer to our dedicated [Security Policy](SECURITY.md) for more detailed guidelines.

---

## 📤 Pull Request Guidelines

Before submitting a Pull Request (PR):

1.  **Sync:** Ensure your branch is up-to-date with the `main` branch.
2.  **Test:** Run `pnpm test` and `pnpm lint` locally. All tests and lint checks must pass.
3.  **Conventional Commits:** Ensure your commit messages follow the Conventional Commits specification.
4.  **Descriptive Title:** Provide a clear, concise PR title.
5.  **Detailed Description:**
    *   Explain the problem your PR solves or the feature it adds.
    *   Describe your solution and any notable design decisions.
    *   Reference any related issues (e.g., `Closes #123`, `Fixes #456`).
    *   Include screenshots or GIFs for UI changes.
6.  **Code Review:** Be prepared for constructive feedback during the code review process. Address comments promptly.

---

## ⚖️ License

By contributing, you agree that your contributions will be licensed under the [CC BY-NC License](LICENSE).

We look forward to your contributions!
