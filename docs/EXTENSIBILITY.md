# Extensibility guide — adding a fifth variant

> Required by §3.1 of the project statement. Must reference **real classes and files**.
> Keep this document true: if a PR breaks one of these steps, the PR must update it.

![Extensibility diagram](diagrams/img/extensibility-diagram.png)

## Worked example: "Hexa Fill" (paint cells with constraints)

### 1. Files to CREATE

| # | File | Implements / extends | Layer |
| --- | --- | --- | --- |
| 1 | TODO (cell type) | TODO | Entities |
| 2 | TODO (move type) | TODO | Entities |
| 3 | TODO (state type) | TODO | Entities |
| 4 | TODO (rules) | `IGameRules<TCell, TMove, TState>` | Entities |
| 5 | TODO (piece source) | `IPieceSource<TPiece>` | Entities |
| 6 | TODO (scoring) | `IScoringPolicy<TState>` | Entities |
| 7 | TODO (factory) | Abstract Factory interface | TODO |
| 8 | TODO (presentation of the cell) | TODO | Interface Adapters |

### 2. Files to MODIFY (should be configuration/registration only)

| File | Change | Why it does not violate OCP |
| --- | --- | --- |
| TODO (composition root / registry) | Register the new factory | TODO |

### 3. Files that must NOT change

- TODO: `HexBoard`, `GameEngine`, generic use cases, persistence, AOP decorators, screens...

### 4. Tests to add

- TODO

## Small rule variations (expected in the oral defense)

| Variation | Where it goes | Files touched |
| --- | --- | --- |
| New board size / shape | TODO | TODO |
| Different scoring policy | TODO | TODO |
| New piece shape | TODO | TODO |

## Swapping an infrastructure adapter

Any infrastructure piece must be replaceable without the inner layers noticing. Each swap creates a new adapter for an existing port and changes only the composition root or configuration.

| Piece | Port | Current adapter | Files to create | Files to change |
| --- | --- | --- | --- | --- |
| Local database | TODO | TODO | TODO | TODO |
| Remote API client | TODO | TODO | TODO | TODO |
| Audio | TODO | TODO | TODO | TODO |
| Level source | TODO | TODO | TODO | TODO |

The port's contract test suite must pass against the new adapter before the swap counts as done.
