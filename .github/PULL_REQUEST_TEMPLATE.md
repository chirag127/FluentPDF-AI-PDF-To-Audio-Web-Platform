# Pull Request Template

## 1. APEX TECHNICAL AUTHORITY: PR CHECKLIST

This pull request is being submitted for review. Please ensure all checks are complete before merging.

### 🚀 CODE QUALITY & ARCHITECTURE

- [ ] **Code Adheres to SOLID Principles:** Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion are all respected.
- [ ] **Modularity Maintained:** Code organized using Feature-First Structure (e.g., `features/auth`).
- [ ] **Command-Query Separation (CQS):** Methods are strictly either Commands (actions) or Queries (data retrieval), never both.
- [ ] **DRY & KISS Applied:** Repetitive logic is abstracted; complexity is minimized.
- [ ] **Self-Documenting Code:** Comments used ONLY for the "Why", not the "What".
- [ ] **Guard Clauses Used:** Deep nesting avoided; early returns are preferred.
- [ ] **12-Factor App Compliance:** Configuration externalized, services treated as attached resources.

### 🧪 TESTING & RELIABILITY

- [ ] **1:1 Test Coverage:** Every source file has a corresponding test file in `tests/`.
- [ ] **Comprehensive Test Scenarios:** Success, failure, and edge cases are covered.
- [ ] **Zero Console Errors:** Application runs with no runtime errors.
- [ ] **Resilient Exception Handling:** Critical I/O wrapped in `try-catch-finally`; graceful degradation or recovery implemented.
- [ ] **Retry Logic:** Implemented for transient failures with exponential backoff.
- [ ] **Zero Trust Input Sanitization:** All external inputs (user, API, file) are validated and sanitized (OWASP 2025 Top 10).
- [ ] **SBOM Generation:** Software Bill of Materials is generated for all builds.

### ⚡ PERFORMANCE & UX

- [ ] **INP Optimized:** Interactions complete within 200ms.
- [ ] **Optimistic UI:** UI updates precede server confirmation where appropriate.
- [ ] **Lazy Loading:** Resources are loaded only when needed.
- [ ] **Fluid Animations:** CSS transitions are used for smooth motion.

### 🛠️ TOOLCHAIN & AUTOMATION

- [ ] **Biome/Ruff Applied:** Code is formatted and linted without errors.
- [ ] **Vitest/Pytest Passed:** All unit and integration tests are passing.
- [ ] **Playwright E2E Passed:** End-to-end tests are passing.
- [ ] **CI/CD Workflow Passes:** GitHub Actions pipeline for linting, testing, and building completes successfully.

### 📚 DOCUMENTATION & COMMIT STANDARDS

- [ ] **README Updated:** `README.md` reflects the changes made in this PR.
- [ ] **Conventional Commit:** PR title follows the Conventional Commits specification (e.g., `feat: Add PDF parsing capabilities`).
- [ ] **Atomic Commits:** Each commit in the PR is logical and focused.

## 2. DESCRIPTION OF CHANGES

<!-- Briefly describe the purpose and impact of this pull request. -->

## 3. RELATED ISSUES

<!-- Link to any relevant issues that this PR addresses. -->

## 4. REVIEWER NOTES

<!-- Add any specific instructions or points of interest for the reviewer. -->
