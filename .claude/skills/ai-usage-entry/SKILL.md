---
name: ai-usage-entry
description: Drafts a new entry for AI_USAGE.md describing the AI-assisted work done in this session. Run manually with /ai-usage-entry after a significant AI-assisted task.
disable-model-invocation: true
---

Draft one new entry for the "Task log" section of `AI_USAGE.md`, following the template already in that file.

Rules:

1. Base the entry only on what actually happened in this session (prompts, files changed, commands run) and on the matching entries of `.ai-logs/prompt-log.md` if it exists. Do not invent anything.
   - When a prompt was refined with `/refine-prompt`, record **both** versions: the original verbatim and the refined one, labelled as such. Never present the refined version as if it were the original.
2. Fill in: date (today), short title, task/problem, tool and model (state the exact model you are running as), a faithful paraphrase of the main prompt(s), and the result (files/classes created or changed, decisions proposed).
3. Leave **"Modifications made by the team"** and **"Lessons learned / limitations found"** as `TODO(team): ...` with one guiding question each. Those must be written by the humans.
4. If the session produced several unrelated tasks, propose one entry per task.
5. Show the draft to the user first. Only append it to `AI_USAGE.md` (at the end of section 2, chronological order) after the user confirms.
6. Write the entry in English.
7. Only log work on logic, architecture, project structure or tests (see the scope note in `AI_USAGE.md`). If the session was only queries or tooling setup, say that no entry is needed and stop.
8. **Used by** (section 1): the GitHub username of the person running the session, from `gh api user --jq .login`. If you cannot get it, ask. Never guess. Add the username to the row for the tool used, and add a row if the tool is not listed. Show this change with the draft and apply it only after the user confirms.
