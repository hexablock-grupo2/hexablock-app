# Contributing

## Workflow (GitHub Flow)

1. `main` is protected: nobody pushes to it directly, everything goes through a pull request.
2. Create a short-lived branch from an up-to-date `main`:
   ```bash
   git switch main && git pull
   git switch -c feat/engine-hexboard
   ```
3. Branch names: `<type>/<short-description>` — e.g. `feat/hexa-sort-cascade`, `fix/hexa-merge-nw-slide`, `docs/extensibility`, `test/engine-fake-cell`.
4. Commit small and often. Push and open a PR as soon as there is something reviewable (draft PRs are fine).
5. At least **one other team member** reviews and approves. All conversations must be resolved and CI must be green.
6. Merge strategy: **TODO (team decision — see docs/adr)**.
7. The branch is deleted automatically after merge.

## Commit messages (Conventional Commits, in English)

```
<type>(<scope>): <description in imperative, lowercase>
```

Types: `feat`, `fix`, `refactor`, `test`, `docs`, `ci`, `chore`, `perf`, `style`, `build`, `revert`.

Examples (from the project statement):

```
feat(engine): add generic HexBoard with axial coordinates
feat(hexa-sort): implement cascade transfer rule
fix(hexa-merge): correct slide direction on north-west axis
test(engine): add unit tests for GameEngine with fake cell type
docs(readme): add extensibility guide
refactor(hexa-lines): extract line detection to Strategy
```

Commits are validated in CI by `commitlint` (`commitlint.config.mjs`).

## Git identity (important for contribution tracking)

Your commits only count as yours on GitHub if the commit e-mail is linked to your GitHub account:

```bash
git config --global user.name  "Your Name"
git config --global user.email "the-email-of-your-github-account@example.com"
```

## Using AI

AI assistance is allowed **only** if documented in `AI_USAGE.md`. Never commit AI-generated code you cannot explain.
