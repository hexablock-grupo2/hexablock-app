# CLAUDE.md — HexaBlock Suite (game client (mobile app))

Instructions for Claude Code. Loaded at the start of every session. Keep it short; put long material in `docs/` and reference it.

## Context

- University team project (3 students). The team must be able to **explain and defend every line** in an oral exam.
- Source of truth for requirements: the project statement (HexaBlock Suite v1.0) summarized in `docs/` and in the ADRs under `docs/adr/`. If a request contradicts them, say so before doing anything.
- Two repos: game client (mobile app with ONE generic engine + 4 variants) and backend (REST API). This repo is: **game client (mobile app)**.
- Talk to the team in **Spanish**. Code, identifiers, commits, README and docs in **English**.

## Stack and commands

<!-- TODO: fill in once the stack is decided (ADR). Claude must use exactly these commands. -->
- Language / framework: TODO
- Install deps: `TODO`
- Run app / server: `TODO`
- Run all tests: `TODO`
- Run a single test file: `TODO`
- Lint / static analysis: `TODO`
- Format: `TODO`

## Non-negotiable architecture rules

1. **Clean Architecture, 4 layers**, dependencies point inwards only. The domain layer imports nothing from frameworks, UI, DB or network. Folder ↔ layer mapping: TODO (see ADR).
2. **One generic engine** (client): `HexBoard<TCell>`, `IGameRules<TCell, TMove, TState>`, `GameEngine<...>`, `IPieceSource<TPiece>`, `IScoringPolicy<TState>`, `IProgressModel`. Never duplicate board, rendering, persistence, game flow or use cases per variant. **No conditionals on the variant type** (no `switch`/`if` on game id or concrete rules class) inside the engine or the generic use cases.
3. New variant or rule change = **new classes or configuration**, never edits to the engine (Open/Closed). Keep `docs/EXTENSIBILITY.md` true.
4. **Strategy** and **Abstract Factory** are mandatory; other GoF patterns must be justified, not decorative.
5. **AOP without libraries**: cross-cutting concerns (logging, errors, metrics, auth, cache) are decorators/proxies over the generic use cases. No logger calls inside business code.
6. Bounded generic constraints must be documented in the README with the reason.

## How to work

- Main session: for any development task, load the `orchestrate` skill first.
- **Plan first.** For anything non-trivial, propose the design (interfaces, responsibilities, layer, files) and wait for confirmation before writing code.
- Small, reviewable diffs. Do not touch files unrelated to the task.
- Do **not** add dependencies, change the folder structure or modify CI without asking.
- Every code change comes with tests: **AAA** structure, names `should_<expected>_when_<condition>`, engine tested with a **fake cell type**, randomness injected with a **fixed seed**. Test behaviour, not implementation details.
- Run the tests and the linter before saying a task is done, and report the result honestly (including failures).
- Commits: Conventional Commits in English (`feat(engine): ...`). Never push to `main`, never force-push.
- If a request for non-trivial work is vague (missing goal, layer, acceptance criteria or scope), first restate it as a structured prompt in the format of `/refine-prompt`, mark inferences as `(inferido)`, and wait for approval. Never change its meaning.
- After an AI-assisted task on logic, architecture, project structure or tests, remind the user to run `/ai-usage-entry`. Queries and tooling setup need no entry.
- If you are unsure or lack context, say so explicitly instead of guessing.

## Where things live

- `docs/adr/` — architecture decisions (read before proposing structural changes)
- `docs/diagrams/` — class, layers and extensibility diagrams (`src/` editable, `img/` exported)
- `docs/specs/` — behaviour specs / use cases
- `AI_USAGE.md` — mandatory AI log
