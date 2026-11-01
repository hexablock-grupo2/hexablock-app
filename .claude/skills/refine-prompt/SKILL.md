---
name: refine-prompt
description: Turns a rough request into a precise, structured prompt for this project, shows it for approval, logs the original and refined versions, and only then executes it. Usage - /refine-prompt <rough request>
argument-hint: [rough request]
disable-model-invocation: true
---

Rough request written by the user (keep it verbatim, it is the ORIGINAL):

$ARGUMENTS

## Step 1 — Refine (do not execute anything yet)

Rewrite the request as a structured prompt **in Spanish** (identifiers in English) with these sections:

- **Objetivo**: one or two sentences.
- **Contexto**: files, classes, ADRs or specs involved. Read them first; do not guess names.
- **Capa(s)**: which Clean Architecture layer(s) are affected.
- **Restricciones**: the non-negotiable rules from CLAUDE.md that apply to this task.
- **Criterios de aceptación**: verifiable, including the tests to add (AAA, `should_X_when_Y`).
- **Fuera de alcance**: what must not be touched.
- **Preguntas abiertas**: at most 2.

Fidelity rules:

- The refined prompt must **mean the same** as the original. Do not add features or requirements the user did not ask for.
- If you infer something, mark it `(inferido)` so the user can accept or remove it.
- If the original is ambiguous, ask instead of choosing.

## Step 2 — Ask for approval

Show the refined prompt and ask: "¿Lo ejecuto así, lo ajustas o lo descartamos?"
Stop and wait for the answer.

## Step 3 — Log (after approval)

Append an entry to `.ai-logs/prompt-log.md` (create the folder and file if needed; the folder is gitignored):

```
## <YYYY-MM-DD HH:MM> — <short title>
- Author (git user.name): <value of `git config user.name`>
- Model: <the exact model you are running as>
- Original prompt: <verbatim $ARGUMENTS>
- Refined prompt: <final approved version>
- User adjustments before approval: <none / summary>
```

Never delete or rewrite previous entries. Never log secrets: if the prompt contains credentials or personal data, replace them with `[REDACTED]` and tell the user.

## Step 4 — Execute

Execute the approved prompt following CLAUDE.md. Non-trivial work still starts with a design/plan that the user must confirm.
