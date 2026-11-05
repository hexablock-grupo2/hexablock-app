# Documentation index

| Path | Content | Required by the statement? |
| --- | --- | --- |
| `adr/` | Architecture Decision Records (one file per decision, numbered) | No (strongly recommended) |
| `EXTENSIBILITY.md` | How to add a fifth variant and swap an infrastructure adapter | Yes (§3.1) |
| `SCORING.md` | Scoring criteria per variant | Yes (§5.1.6) |
| `diagrams/src/` | Editable diagram sources (`.puml` / `.drawio`) | Yes (§4) |
| `diagrams/img/` | Exported high-resolution images, embedded in the README | Yes (§4) |
| `specs/` | Behaviour specs / use cases that drive implementation and tests | No (recommended, see class material on Spec-Driven Development) |

Expected diagrams: `class-diagram`, `clean-architecture-layers`, `extensibility-diagram`.

Diagram conventions:

- Prefer **PlantUML** (`.puml`): plain text, diff-able in PRs, readable by AI tools, supports generic/template classes (`class HexBoard<TCell>`).
- Every diagram has the same base name in `src/` and `img/` (e.g. `src/class-diagram.puml` → `img/class-diagram.png`).
- Mark the Clean Architecture layer of each class with a stereotype or colour and include a legend.
