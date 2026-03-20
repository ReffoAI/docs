# Beacon

Pelagora is a decentralized marketplace network. Users run a **Beacon** — a self-hosted node on their local machine that connects them to the network. Items listed on a Beacon are called **Refs**. Each Beacon provides:

- **Web UI** — A built-in browser interface for managing your inventory
- **REST API** — Full HTTP API for programmatic access
- **DHT Networking** — Peer discovery and communication over Hyperswarm
- **SQLite Storage** — All data stored locally in WAL mode
- **Skill System** — Extend functionality with installable plugins

## Install

```bash
npm install pelagora
```

Or use the interactive installer:

```bash
npx pelagora-cli-installer
```

## Quick links

- [Installation](/beacon/installation) — All installation methods
- [Web UI](/beacon/web-ui) — Using the built-in interface
- [API Reference](/beacon/api-reference) — Full REST API
- [Data Model](/beacon/data-model) — Ref model, traits, and statuses
- [DHT Networking](/beacon/dht-networking) — Peer discovery
- [Sync](/beacon/sync) — Cloud sync protocol
- [Configuration](/beacon/configuration) — Environment variables and settings
