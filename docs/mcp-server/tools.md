# MCP Tools

The Pelagora MCP server exposes the following tools to AI assistants.

## Inventory Management

### `list_items`
List all items in your inventory with optional filtering.

| Parameter | Type | Description |
|---|---|---|
| `status` | string | Filter by status: `active`, `sold`, `archived` |
| `category` | string | Filter by category |
| `limit` | number | Max items to return |

### `get_item`
Get details for a specific item.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | string | Yes | Item ID |

### `create_item`
Create a new inventory item.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `title` | string | Yes | Item title |
| `description` | string | No | Item description |
| `category` | string | No | Category name |
| `price` | number | No | Asking price |
| `condition` | string | No | Item condition |

### `update_item`
Update an existing item.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | string | Yes | Item ID |
| `title` | string | No | New title |
| `description` | string | No | New description |
| `price` | number | No | New price |
| `status` | string | No | New status |

### `delete_item`
Remove an item from inventory.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | string | Yes | Item ID |

### `mark_sold`
Mark an item as sold.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | string | Yes | Item ID |

## Network

### `search_network`
Search for items across connected peers.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `query` | string | Yes | Search query |
| `category` | string | No | Filter by category |
| `maxPrice` | number | No | Maximum price |

### `get_health`
Check node health and connection status.

*No parameters.*

### `get_settings`
Get current node settings.

*No parameters.*

### `set_location`
Set your node's location for proximity-based discovery.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `lat` | number | Yes | Latitude |
| `lng` | number | Yes | Longitude |
| `label` | string | No | Location label |

## Offers & Negotiations

### `create_offer`
Make an offer on a peer's item.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `refId` | string | Yes | Item ID to make offer on |
| `amount` | number | No | Offer amount |
| `message` | string | No | Message to seller |

### `list_offers`
List all offers (sent and received).

| Parameter | Type | Description |
|---|---|---|
| `direction` | string | `sent` or `received` |
| `status` | string | Filter by status |

### `get_offer`
Get details of a specific offer.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | string | Yes | Offer ID |

### `update_offer`
Update an existing offer.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | string | Yes | Offer ID |

### `delete_offer`
Withdraw/delete an offer.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | string | Yes | Offer ID |

## Negotiations

### `list_negotiations`
List active negotiations.

### `get_negotiation`
Get details of a specific negotiation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | string | Yes | Negotiation ID |

### `send_proposal`
Send a counter-proposal in a negotiation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `negotiationId` | string | Yes | Negotiation ID |
| `amount` | number | No | Proposed amount |
| `message` | string | No | Message |

### `respond_to_proposal`
Accept or reject a proposal.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `proposalId` | string | Yes | Proposal ID |
| `action` | string | Yes | `accept` or `reject` |

### `withdraw_proposal`
Withdraw a sent proposal.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `proposalId` | string | Yes | Proposal ID |

## Media

### `list_media`
List media attached to an item.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `refId` | string | Yes | Item ID |

### `delete_media`
Remove media from an item.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | string | Yes | Media ID |

## Favorites

### `list_favorites`
List favorited items from the network.

### `toggle_favorite`
Add or remove an item from favorites.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `refId` | string | Yes | Item ID |

## Skills

### `list_skills`
List installed skills and their status.

### `get_taxonomy`
Get the category taxonomy tree.
