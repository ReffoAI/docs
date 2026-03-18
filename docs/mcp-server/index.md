# MCP Server

`@pelagora/mcp` connects your Pelagora node to AI assistants like Claude via the [Model Context Protocol](https://modelcontextprotocol.io).

## What it does

The MCP server exposes your node's capabilities as tools that AI assistants can call:

- **List and manage inventory** — Create, update, and delete items
- **Search the network** — Find items across connected peers
- **Make and manage offers** — Negotiate deals through natural language
- **Check node status** — Health, settings, and peer info

## Quick start

```bash
npm install @pelagora/mcp
```

Add to your Claude Desktop config:

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

Make sure your Pelagora node is running, then ask Claude something like:

> "List my inventory" or "Search the network for vintage guitars"

## Learn more

- [Installation](/mcp-server/installation) — Setup and configuration
- [Tools](/mcp-server/tools) — All available MCP tools
- [Prompts](/mcp-server/prompts) — Built-in prompt templates
- [Resources](/mcp-server/resources) — Exposed MCP resources
