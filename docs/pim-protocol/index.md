# PIM Protocol

`@pelagora/pim-protocol` is a type-only TypeScript package that defines the shared data structures used across the Pelagora network. It has no runtime dependencies.

## Install

```bash
npm install @pelagora/pim-protocol
```

## What's included

- **[Types](/pim-protocol/types)** — Core interfaces: `Ref`, `Offer`, `PeerMessage`, `Want`, and more
- **[Schemas](/pim-protocol/schemas)** — Schema.org-aligned category schemas for structured product data
- **[Utilities](/pim-protocol/utilities)** — Helper functions for location blurring, sanitization, and validation

## Design principles

- **Platform-agnostic** — No dependency on any specific database, runtime, or framework
- **Schema.org aligned** — Product data maps to Schema.org vocabulary
- **Type-safe** — Full TypeScript types with strict mode
- **Zero runtime** — Types only; no runtime code shipped to production
