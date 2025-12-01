---
name: 🐛 Bug Report
about: Report an issue or unexpected behavior in FluentPDF
title: "[BUG] - Short, descriptive summary of the issue"
labels: ["bug", "triage"]
assignees: ""
projects: []

---

## 🔴 CORE PROBLEM STATEMENT (BLUF)

> Describe the bug in one concise sentence. **What happened** vs **What was expected?**

---

## 🔬 ENVIRONMENT & CONTEXT

To expedite resolution, please provide comprehensive context regarding where and how the failure occurred. Adherence to these fields ensures alignment with the **Apex Technical Authority's** zero-defect standard.

### 1. APPLICATION VERSION
<!-- Use the current semantic version (e.g., 1.2.0 or latest build hash) -->
- **FluentPDF Version:** 

### 2. PLATFORM DETAILS

- **Operating System:** (e.g., Windows 11, macOS Sonoma 14.5, Ubuntu 24.04)
- **Browser/Runtime:** (e.g., Chrome 120, Node 20.x, Tauri/Electron Shell)

### 3. AI/LLM CONFIGURATION

<!-- Which provider and settings were active when the bug manifested? -->
- **Active LLM Provider:** (e.g., Gemini Pro, Groq Llama 3, Local WASM)
- **Audio Synthesis Setting:** (e.g., High Fidelity, Standard Speed)

---

## 📝 STEPS TO REPRODUCE

Follow these steps precisely. The process must be 100% repeatable. Use numeric lists.

1. Navigate to the main processing page (`/convert`).
2. Upload PDF: `[Name of specific PDF file or general characteristics, e.g., 150-page technical manual]`.
3. Configure settings: `[List specific settings used, e.g., Target Speed: 1.2x, Skip Images: True]`.
4. Initiate conversion/playback.
5. **Observed Result:** `[What actually happened? Error message, incorrect audio, crash, etc.]`
6. **Expected Result:** `[What should have happened based on the application's promise?]`

---

## 💾 ARTIFACTS & EVIDENCE

Provide any necessary supporting data. **Security Note:** Do not upload proprietary or highly sensitive documents. If necessary, upload a redacted or minimal example file that reproduces the issue.

### Console Logs
<!-- Paste the raw console output (including errors/warnings) from the browser developer tools or terminal. -->
```console

```

### Screen Recording / Screenshots
<!-- Link to an external host (Imgur, Cloud Storage) if necessary. -->

---

## 💡 ADDITIONAL CONTEXT (If Applicable)

*   **Prior State:** Did this ever work correctly? If so, what changed immediately before the failure? (e.g., Updated Node.js, changed API key configuration).
*   **Workaround:** Have you found any temporary method to avoid this issue?
*   **Architectural Observation:** Does this appear related to state management, I/O handling, or LLM response parsing? (Optional, for advanced contributors.)
