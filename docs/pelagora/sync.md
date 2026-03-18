# Sync

Pelagora nodes can optionally sync with the Reffo cloud platform for backup, cross-device access, and enhanced discovery.

## How sync works

1. Node authenticates with the Reffo API using an API key
2. Local inventory changes are pushed to the cloud
3. Cloud changes (e.g., from the Reffo web app) are pulled to the node
4. Sync runs periodically in the background

## Configuration

Set your sync credentials:

```bash
REFFO_API_KEY=your-api-key
REFFO_SYNC_ENABLED=true
```

## Privacy

- Sync is **opt-in** — disabled by default
- Only inventory data is synced, not peer connections or local settings
- You can disable sync at any time without losing local data
