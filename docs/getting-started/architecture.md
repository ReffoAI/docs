# Architecture

Pelagora is built as a set of composable packages that work together to form a decentralized marketplace.

## Package overview

```
┌─────────────────────────────────────────────────┐
│                  AI Assistants                   │
│            (Claude, etc. via MCP)                │
└────────────────────┬────────────────────────────┘
                     │
              ┌──────┴──────┐
              │  MCP Server │  @pelagora/mcp
              │  (bridge)   │
              └──────┬──────┘
                     │ HTTP
              ┌──────┴──────┐
              │   Pelagora  │  pelagora
              │    Node     │
              │  ┌────────┐ │
              │  │ Web UI │ │
              │  │REST API│ │
              │  │ SQLite │ │
              │  └────────┘ │
              └──┬───────┬──┘
                 │       │
          ┌──────┴──┐  ┌─┴──────────┐
          │  DHT    │  │  PIM       │  @pelagora/pim-protocol
          │(Hyper-  │  │  Protocol  │
          │ swarm)  │  │  (types)   │
          └────┬────┘  └────────────┘
               │
        ┌──────┴──────┐
        │ Other Nodes │
        └─────────────┘
```

## Data flow

### Local operations
1. User interacts via **Web UI**, **REST API**, or **MCP Server**
2. Pelagora node processes the request
3. Data is stored in a local **SQLite** database (WAL mode)
4. Changes are broadcast to connected peers via the **DHT**

### Peer discovery
1. Node joins the **Hyperswarm DHT** on startup
2. Peers discover each other by topic (derived from network key)
3. Connections are established directly between nodes
4. Peer messages follow the `PeerMessage` format defined in **PIM Protocol**

### AI integration
1. **MCP Server** connects to the node's REST API over HTTP
2. Exposes node capabilities as **tools** (list items, search, make offers)
3. AI assistants call these tools in response to natural language requests

## Key design decisions

- **Local-first** — All data is stored locally in SQLite. No cloud dependency.
- **Schema.org aligned** — Product data uses Schema.org vocabulary for interoperability.
- **Plugin architecture** — Skills extend node capabilities without modifying core code.
- **Protocol-first** — Shared types in `@pelagora/pim-protocol` ensure all packages speak the same language.

## Next steps

- [Beacon →](/glossary/beacon/) — Deep dive into the node
- [PIM Protocol →](/glossary/pim-protocol/) — Understand the type system
- [MCP Server →](/glossary/mcp-server/) — AI integration details
