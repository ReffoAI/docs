# <span class="breadcrumb-parent">Beacon ›</span> Installation

## npm (recommended)

```bash
npm install pelagora
```

## Interactive installer

```bash
npx pelagora-cli-installer
```

The installer walks you through setup and optionally installs the MCP server.

## From source

```bash
git clone https://github.com/ReffoAI/pelagora.git
cd pelagora
npm install
npm run build
npm start
```

## Requirements

- Node.js 18+
- npm 9+
- ~50MB disk space for the application
- SQLite (bundled via better-sqlite3)
