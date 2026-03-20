# Quick Start

Get a Pelagora node running in under 2 minutes.

## Start with the AI Skill

The fastest way to get started is with the [Pelagora AI Skill](https://pelagora.org/dev-resources/index.html). Drop a single file into your project and your AI assistant can set up a Beacon, connect to the network, and start building for you.

```bash
# Copy the skill into your Claude Code project
mkdir -p .claude/skills
curl -o .claude/skills/pelagora.md https://pelagora.org/dev-resources/pelagora.md
```

Once installed, just ask your AI assistant something like *"I want to join the Pelagora network"* and it will handle the rest — scaffolding a Beacon, connecting to the mesh, and setting up the MCP server.

## Prerequisites

- **Node.js** 18 or later
- **npm** 9 or later

## Install with the CLI installer

The fastest way to get started:

```bash
npx pelagora-cli-installer
```

The installer will:
1. Create a project directory
2. Install the `pelagora` package
3. Generate a starter configuration
4. Optionally install the MCP server for AI assistant integration

## Or install manually

```bash
mkdir my-node && cd my-node
npm init -y
npm install pelagora
```

Create a start script:

```js
// start.js
const { createApp } = require('pelagora')

const app = createApp({
  port: 3737,
  enableDht: true,
})

app.listen(3737, () => {
  console.log('Pelagora node running at http://localhost:3737')
})
```

```bash
node start.js
```

## Verify it's working

Open [http://localhost:3737](http://localhost:3737) in your browser to see the web UI.

Or check the API:

```bash
curl http://localhost:3737/health
```

## Connect an AI assistant

If you installed the MCP server, add this to your Claude Desktop config (`claude_desktop_config.json`):

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

Now you can manage your inventory and search the network through natural language.

## Next steps

- [Architecture →](/getting-started/architecture) — How the pieces fit together
- [Web UI Guide →](/glossary/pelagora/web-ui) — Using the built-in interface
- [API Reference →](/glossary/beacon/api-reference) — Full REST API documentation
- [MCP Tools →](/glossary/mcp-server/tools) — All available AI assistant commands
