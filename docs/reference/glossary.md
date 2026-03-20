# Glossary

Key terms used throughout the Pelagora documentation.

## Core concepts

**[Ref](/beacon/data-model)**
: A reference to a physical item — the basic unit of inventory in Pelagora. Contains title, description, category, price, condition, traits, and media.

**[Beacon](/beacon/)**
: A running instance of the Pelagora software. Each user operates their own Beacon locally.

**[PIM Protocol](/pim-protocol/)**
: Personal Inventory Management Protocol — the shared type system that defines how data is structured across the network.

**[DHT](/beacon/dht-networking)**
: Distributed Hash Table — the decentralized peer discovery mechanism (Hyperswarm) that lets nodes find each other without a central server.

## Network

**Peer**
: Another node on the network that your node has discovered and connected to.

**[Hyperswarm](/beacon/dht-networking)**
: The DHT implementation used by Pelagora for peer discovery and direct encrypted connections.

**Topic**
: A DHT topic that nodes join to find peers on the same network.

**PeerMessage**
: The standard message format for communication between nodes over the DHT.

## Trading

**Offer**
: A proposal to buy or trade for a Ref. Includes an optional price and message.

**Negotiation**
: A back-and-forth exchange of proposals between buyer and seller.

**Want**
: A "wanted" listing describing something a user is looking for.

## AI integration

**[MCP](/mcp-server/)**
: Model Context Protocol — an open standard for connecting AI assistants to external tools and data sources.

**[MCP Server](/mcp-server/)**
: The bridge between a Pelagora node and an AI assistant. Exposes node capabilities as tools.

**[Tool](/mcp-server/tools)**
: An MCP capability that an AI assistant can invoke (e.g., `create_item`, `search_network`).

## Extensions

**[Skill](/guides/building-skills)**
: A plugin that extends Pelagora with new capabilities — routes, DHT messages, MCP tools, and database tables.

**[Category Schema](/guides/adding-categories)**
: A definition of structured attributes for a product type, aligned with Schema.org vocabulary.

**Traits**
: Category-specific attributes stored on a Ref (e.g., brand, size, material).
