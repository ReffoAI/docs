# Configuration

Pelagora can be configured via environment variables or programmatically.

## Environment variables

| Variable | Default | Description |
|---|---|---|
| `PORT` | `3737` | HTTP server port |
| `ENABLE_DHT` | `true` | Enable Hyperswarm DHT networking |
| `DB_PATH` | `./data/pelagora.db` | SQLite database file path |
| `REFFO_SYNC_ENABLED` | `false` | Enable cloud sync |
| `REFFO_API_KEY` | — | API key for cloud sync |

## Programmatic configuration

```js
const { createApp } = require('pelagora')

const app = createApp({
  port: 3737,
  enableDht: true,
  dbPath: './data/pelagora.db',
})
```

## Data directory

By default, Pelagora stores its database and configuration in `./data/` relative to the working directory. The database uses SQLite in WAL (Write-Ahead Logging) mode for concurrent read performance.
