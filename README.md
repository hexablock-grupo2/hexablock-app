# HexaBlock Suite — Game Client

[![commitlint](https://github.com/hexablock-grupo2/hexablock-app/actions/workflows/commitlint.yml/badge.svg?event=pull_request)](https://github.com/hexablock-grupo2/hexablock-app/actions/workflows/commitlint.yml)
<!-- TODO: build/test badge, test types badges, license badge -->

> Four hexagonal puzzle games — Hexa Lines, Hexa Fit, Hexa Sort, Hexa Merge — built on **one generic engine**.

## Table of contents

- [Description](#description)
- [Demo / Screenshots](#demo--screenshots)
- [Architecture](#architecture)
- [Generic Engine](#generic-engine)
- [Design Patterns](#design-patterns)
- [SOLID Principles](#solid-principles)
- [AOP](#aop)
- [Getting Started](#getting-started)
- [Running Tests](#running-tests)
- [AI Usage Documentation](#ai-usage-documentation)
- [Contributing](#contributing)
- [License](#license)

## Description

TODO: what it is, what it is for, technologies used.

## Demo / Screenshots

TODO: screenshots or GIF of the four variants.

## Architecture

TODO: Clean Architecture explanation (4 layers, dependency rule, ports & adapters).

![Clean Architecture layers](docs/diagrams/img/clean-architecture-layers.png)

Editable source: [`docs/diagrams/src/`](docs/diagrams/src/)

## Generic Engine

TODO: generic types, their parameters and **bounded constraints with the reason for each**, and how each variant instantiates them.

| Generic | Hexa Lines | Hexa Fit | Hexa Sort | Hexa Merge |
| --- | --- | --- | --- | --- |
| `TCell` | TODO | TODO | TODO | TODO |
| `TMove` | TODO | TODO | TODO | TODO |
| `TState` | TODO | TODO | TODO | TODO |

![Class diagram](docs/diagrams/img/class-diagram.png)

How to add a fifth variant: see [`docs/EXTENSIBILITY.md`](docs/EXTENSIBILITY.md).

## Design Patterns

| Category | Pattern | Where (link to code) | Why |
| --- | --- | --- | --- |
| Creational | Abstract Factory | TODO | TODO |
| Behavioural | Strategy | TODO | TODO |
| Structural | TODO | TODO | TODO |

## SOLID Principles

TODO: one subsection per principle with a real code excerpt, the class/module and the justification.

## AOP

TODO: aspects implemented, decorator/proxy strategy over the generic use cases, why no library is used.

## Getting Started

### Prerequisites

TODO

### Installation

```bash
TODO
```

### Run

```bash
TODO
```

## Running Tests

```bash
TODO
```

TODO: test types (unit, integration, widget/UI) and how CI runs them on every pull request.

## AI Usage Documentation

See [`AI_USAGE.md`](AI_USAGE.md).

## Contributing

See [`CONTRIBUTING.md`](CONTRIBUTING.md) (Conventional Commits, branch workflow, pull request process).

## License

TODO
