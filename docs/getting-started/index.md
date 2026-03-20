# Getting Started

Pelagora is an open, decentralized peer-to-peer marketplace network. It consists of four packages that work together:

| Package | What it does | npm |
|---|---|---|
| **[Beacon](/beacon/)** | Local marketplace node with web UI, REST API, and DHT networking | `pelagora` |
| **[PIM Protocol](/pim-protocol/)** | Shared TypeScript types and category schemas | `@pelagora/pim-protocol` |
| **[MCP Server](/mcp-server/)** | AI assistant integration via Model Context Protocol | `@pelagora/mcp` |
| **[CLI Installer](/cli-installer/)** | Interactive setup wizard | `pelagora-cli-installer` |

## How it works

1. **Install a node** — Each user runs their own Pelagora node locally
2. **List items** — Add inventory through the web UI, REST API, or AI assistant
3. **Discover peers** — Nodes find each other over the Hyperswarm DHT
4. **Trade** — Browse, make offers, and negotiate directly peer-to-peer

No central server. No platform fees. Your data stays on your machine.

## Next steps

- [Quick Start →](/getting-started/quick-start) — Install and run your first node in 2 minutes
- [Architecture →](/getting-started/architecture) — Understand how the pieces fit together
