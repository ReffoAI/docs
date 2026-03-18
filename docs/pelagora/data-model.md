# Data Model

A **Ref** is the universal base unit in Pelagora. Every listing — whether it's a car, a guitar, or a restaurant voucher — is a Ref. Refs are Schema.org-compatible so they can be understood by search engines, LLMs, and third-party platforms.

## Base Fields

Every Ref has these universal fields:

| Field | Type | Description |
|---|---|---|
| `id` | string | Unique identifier (UUID) |
| `name` | string | Display name (Schema.org: `name`) |
| `description` | string | Free-text description (Schema.org: `description`) |
| `category` | string | Top-level category (e.g., "Vehicles") |
| `subcategory` | string | Subcategory (e.g., "Cars") |
| `listingStatus` | enum | Visibility: `private`, `for_sale`, `willing_to_sell`, `archived_sold`, `archived_deleted` |
| `quantity` | number | Units available |
| `sku` | string? | Optional SKU or serial number |
| `condition` | string? | Category-appropriate condition value |
| `attributes` | object? | Category-specific attributes (JSON) |
| `beaconId` | string | Public key of the owning node |
| `createdAt` | string | ISO 8601 creation timestamp |
| `updatedAt` | string | ISO 8601 last-modified timestamp |

### Location Fields

| Field | Type | Description |
|---|---|---|
| `locationLat` | number? | Latitude |
| `locationLng` | number? | Longitude |
| `locationAddress` | string? | Street address (stored locally only, never shared over DHT) |
| `locationCity` | string? | City |
| `locationState` | string? | State/province |
| `locationZip` | string? | Zip/postal code |
| `locationCountry` | string? | Country code |
| `sellingScope` | enum? | `global`, `national`, or `range` |
| `sellingRadiusMiles` | number? | Radius in miles (when scope = `range`) |

### Sync Fields

| Field | Type | Description |
|---|---|---|
| `reffoSynced` | boolean | Whether this Ref is synced to the Reffo platform |
| `reffoRefId` | string? | The Ref ID on the platform (if synced) |

## Trait System

Refs compose behavior through **traits** — capability labels that describe what a Ref supports. Traits document the category's data shape.

| Trait | Description |
|---|---|
| **Priceable** | Has a price and currency. Can receive offers. |
| **Conditional** | Has a condition field with category-appropriate values. |
| **Valueable** | Has appraised or market value significance. |
| **Serialized** | Has a unique serial/identification number (VIN, IMEI, parcel ID). |
| **LocationBound** | Physical location matters for the transaction. |
| **Consumable** | Used up or redeemed (gift cards, vouchers). |
| **TimeBounded** | Has an expiration or validity window. |

### Category Composition

Each category defines which traits apply:

```
CarRef       = Ref + Priceable + Conditional + Valueable + Serialized + LocationBound
HousingRef   = Ref + Priceable + Conditional + Valueable + Serialized + LocationBound
PhoneRef     = Ref + Priceable + Conditional + Valueable + Serialized
ArtRef       = Ref + Priceable + Conditional + Valueable
FurnitureRef = Ref + Priceable + Conditional + LocationBound
DiningRef    = Ref + Priceable + Consumable + TimeBounded + LocationBound
```

## Listing Status Flow

```
private  ──►  for_sale  ──►  archived_sold
   │              │
   │              ▼
   │        willing_to_sell
   │              │
   ▼              ▼
archived_deleted  archived_sold
```

- **private**: Not visible to other nodes or the network.
- **for_sale**: Actively listed with a price. Discoverable via DHT.
- **willing_to_sell**: Open to offers but no fixed price. Discoverable.
- **archived_sold**: Transaction completed. No longer discoverable.
- **archived_deleted**: Removed by owner. No longer discoverable.

## Privacy Tiers

| Tier | What's shared | Where |
|---|---|---|
| **Local only** | Full address, exact lat/lng | Stored in node SQLite, never transmitted |
| **DHT (blurred)** | City, state, zip, blurred lat/lng (~0.7 mi precision) | Shared with peers via Hyperswarm |
| **Platform (synced)** | City, state, zip, blurred lat/lng, Schema.org data | Stored in Supabase when sync is enabled |

The `blurLocation()` function rounds coordinates to 2 decimal places (~0.7 mile / zip-code precision) before any network transmission.

## Schema.org Compatibility

Every Ref maps to a Schema.org type. The `attributes` object holds category-specific fields, and the `buildSchemaOrg()` function transforms them into standard JSON-LD:

```json
{
  "@type": "Car",
  "name": "2020 Toyota Camry XLE",
  "description": "One owner, clean title, dealer maintained",
  "vehicleModelDate": "2020",
  "brand": { "@type": "Brand", "name": "Toyota" },
  "model": "Camry",
  "mileageFromOdometer": {
    "@type": "QuantitativeValue",
    "value": 45000,
    "unitCode": "SMI"
  },
  "vehicleTransmission": "automatic",
  "offers": {
    "@type": "Offer",
    "price": 18500,
    "priceCurrency": "USD"
  }
}
```

See the [Schema.org guide](/guides/schema-org) for the full mapping reference and the [Adding Categories guide](/guides/adding-categories) for extending the schema system.
