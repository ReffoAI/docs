# CLI Installer

`pelagora-cli-installer` is an interactive setup wizard that scaffolds a new Pelagora node project.

## Usage

```bash
npx pelagora-cli-installer
```

## What it does

The installer prompts you through setup:

1. **Project name** — Creates a directory for your node
2. **Port selection** — Choose the HTTP port (default: 3737)
3. **DHT** — Enable or disable peer discovery
4. **MCP Server** — Optionally install `@pelagora/mcp` for AI assistant integration
5. **Start script** — Generates a `start.js` entry point

## Generated structure

```
my-node/
├── package.json
├── start.js
└── data/          (created on first run)
    └── pelagora.db
```

## After installation

```bash
cd my-node
node start.js
```

Your node will be running at `http://localhost:3737`.
