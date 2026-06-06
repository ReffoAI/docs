# PIM Protocol

`@pelagora/pim-protocol` is a TypeScript package that defines the shared data structures used across the Pelagora network, plus a small set of zero-dependency runtime helpers (location, sanitization, validation, category schemas). It has no external runtime dependencies.

## Install

```bash
npm install @pelagora/pim-protocol
```

## What's included

- **[Types](/glossary/pim-protocol/types)** — Core interfaces: `Ref`, `Offer`, `RefMedia`, `Conversation`, `PeerMessage`, the `/.well-known/pim` discovery types, and more
- **[Schemas](/glossary/pim-protocol/schemas)** — Schema.org-aligned category schemas for structured product data
- **[Utilities](/glossary/pim-protocol/utilities)** — Helper functions for location blurring, sanitization, validation, and checkout-URL checks

## Design principles

- **Platform-agnostic** — No dependency on any specific database, runtime, or framework
- **Vendor-neutral** — The canonical surface names no payment provider or brand; checkout and payment-method vocabularies are open
- **Schema.org aligned** — Product data maps to Schema.org vocabulary
- **Type-safe** — Full TypeScript types with strict mode
- **Zero external dependencies** — Types plus small self-contained runtime helpers
