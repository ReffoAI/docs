# <span class="breadcrumb-parent">Pelagora ›</span> DHT Networking

Pelagora uses the [Hyperswarm](https://docs.pears.com/building-blocks/hyperswarm) DHT for decentralized peer discovery and communication.

## How it works

1. **Topic-based discovery** — Nodes join a shared topic derived from the network key
2. **Direct connections** — Once discovered, peers establish direct encrypted streams
3. **Message passing** — Nodes exchange `PeerMessage` objects over these streams

## PeerMessage format

All DHT messages follow the `PeerMessage` type from `@pelagora/pim-protocol`:

```typescript
interface PeerMessage {
  type: string    // Message type identifier
  beaconId: string // Sender's node ID
  payload: any     // Message-specific data
}
```

## Built-in message types

| Type | Description |
|---|---|
| `inventory` | Share full inventory with a peer |
| `search` | Search request broadcast to peers |
| `search-response` | Results returned for a search |
| `offer` | Make an offer on a peer's item |

## Skill message namespacing

Skills can register custom message types using the namespace pattern:

```
skill:{skill-id}:{message-type}
```

For example, the reverse auction skill uses `skill:reverse-auction:bid`.

## Enabling DHT

DHT is enabled by default. To disable it:

```js
const app = createApp({
  enableDht: false,
})
```

Or set the environment variable:

```bash
ENABLE_DHT=false
```
