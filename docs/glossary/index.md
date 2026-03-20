# Glossary

Key terms used throughout the Pelagora documentation.

## Core concepts

<h3 id="pelagora"><a href="/glossary/pelagora/">Pelagora</a></h3>

The open, decentralized peer-to-peer commerce network. Defines shared protocols, data models, and the networking layer.

<h3 id="beacon"><a href="/glossary/beacon/">Beacon</a></h3>

A running instance of the Pelagora software. Each user operates their own Beacon locally.

<h3 id="ref"><a href="/glossary/pelagora/ref">Ref</a></h3>

A reference to a physical item — the basic unit of inventory in Pelagora. Contains title, description, category, price, condition, traits, and media.

<h3 id="pim-protocol"><a href="/glossary/pim-protocol/">PIM Protocol</a></h3>

Personal Inventory Management Protocol — the shared type system that defines how data is structured across the network.

<h3 id="dht"><a href="/glossary/pelagora/dht-networking">DHT</a></h3>

Distributed Hash Table — the decentralized peer discovery mechanism (Hyperswarm) that lets nodes find each other without a central server.

## Network

<h3 id="peer">Peer</h3>

Another node on the network that your node has discovered and connected to.

<h3 id="hyperswarm"><a href="/glossary/pelagora/dht-networking">Hyperswarm</a></h3>

The DHT implementation used by Pelagora for peer discovery and direct encrypted connections.

<h3 id="topic">Topic</h3>

A DHT topic that nodes join to find peers on the same network.

<h3 id="peermessage">PeerMessage</h3>

The standard message format for communication between nodes over the DHT.

## Trading

<h3 id="offer">Offer</h3>

A proposal to buy or trade for a Ref. Includes an optional price and message.

<h3 id="negotiation">Negotiation</h3>

A back-and-forth exchange of proposals between buyer and seller.

<h3 id="want">Want</h3>

A "wanted" listing describing something a user is looking for.

## AI integration

<h3 id="mcp"><a href="/glossary/mcp-server/">MCP</a></h3>

Model Context Protocol — an open standard for connecting AI assistants to external tools and data sources.

<h3 id="mcp-server"><a href="/glossary/mcp-server/">MCP Server</a></h3>

The bridge between a Pelagora node and an AI assistant. Exposes node capabilities as tools.

<h3 id="tool"><a href="/glossary/mcp-server/tools">Tool</a></h3>

An MCP capability that an AI assistant can invoke (e.g., `create_item`, `search_network`).

## Extensions

<h3 id="skill"><a href="/guides/building-skills">Skill</a></h3>

A plugin that extends Pelagora with new capabilities — routes, DHT messages, MCP tools, and database tables.

<h3 id="category-schema"><a href="/guides/adding-categories">Category Schema</a></h3>

A definition of structured attributes for a product type, aligned with Schema.org vocabulary.

<h3 id="traits">Traits</h3>

Category-specific attributes stored on a Ref (e.g., brand, size, material).
