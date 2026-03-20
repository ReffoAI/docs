# MCP Server Installation

## Prerequisites

- A running Pelagora node (default: `http://localhost:3737`)
- An MCP-compatible AI assistant (e.g., Claude Desktop)

## Install

```bash
npm install @pelagora/mcp
```

## Claude Desktop configuration

Add the server to your `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "pelagora": {
      "command": "npx",
      "args": ["@pelagora/mcp"]
    }
  }
}
```

### Custom node URL

If your node runs on a different port or host:

```json
{
  "mcpServers": {
    "pelagora": {
      "command": "npx",
      "args": ["@pelagora/mcp"],
      "env": {
        "PELAGORA_URL": "http://localhost:4000"
      }
    }
  }
}
```

## Environment variables

| Variable | Default | Description |
|---|---|---|
| `PELAGORA_URL` | `http://localhost:3737` | Pelagora node URL |

## Verify connection

After configuring, ask your AI assistant:

> "Check the health of my Pelagora node"

If connected, it will return node status information.
