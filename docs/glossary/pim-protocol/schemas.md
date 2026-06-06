# Category Schemas

PIM Protocol includes category schemas that define structured attributes for different types of products. These schemas are aligned with [Schema.org](https://schema.org) vocabulary.

## How schemas work

A `CategorySchema` defines, for a given category:

- a `schemaOrgType` (e.g. `Car`, `Product`, `Book`)
- a list of `attributes` (`AttributeField[]`) — the structured fields for that category
- `conditionOptions` and descriptive `traits`
- a `buildSchemaOrg()` mapping to JSON-LD

A `Ref` stores its category-specific values in its **`attributes`** field (a free-form `Record<string, unknown>`); the matching `CategorySchema` describes which attributes that category expects. Look up a schema with `getCategorySchema(category, subcategory)`, which resolves the `"Category|Subcategory"` key and falls back to a default schema when there's no exact match.

```typescript
import { getCategorySchema, getAttributeKeys, buildSchemaOrgLD } from '@pelagora/pim-protocol';

const schema = getCategorySchema('Vehicles', 'Cars'); // schemaOrgType: 'Car'
const keys = getAttributeKeys('Vehicles', 'Cars');     // ['year','make','model','trim','mileage', ...]
```

## Built-in categories

Schemas are keyed by `Category|Subcategory`. Top-level categories include:

| Category | Example subcategories |
|---|---|
| Electronics | Phones & Tablets, Computers & Laptops, Audio & Headphones, Cameras, Gaming |
| Music | Guitars, Bass, Drums & Percussion, Keyboards & Pianos, Amplifiers, Effects & Pedals |
| Home & Garden | Furniture, Kitchen & Dining, Tools & Hardware, Appliances, Outdoor & Garden, Lighting |
| Clothing & Accessories | Mens, Womens, Kids, Shoes, Bags & Wallets, Activewear, Vintage |
| Jewelry & Watches | Fine Jewelry, Fashion Jewelry, Watches, Loose Stones & Beads |
| Sports | Cycling, Fitness & Gym, Water Sports, Winter Sports, Team Sports, Outdoor & Camping |
| Books & Media | Books, Vinyl & Records, CDs & DVDs, Video Games, Magazines, Textbooks, Comics |
| Vehicles | Cars, Motorcycles, Bicycles, Trucks & Vans, Boats, Parts & Accessories, Trailers, EVs |
| Real Estate | Apartment, and more |

Each subcategory maps to a `schemaOrgType` (e.g. `Vehicles|Cars` → `Car`, `Vehicles|Boats` → `Vehicle`). Categories without an exact match resolve to a general default schema.

## Schema.org mapping

`buildSchemaOrgLD()` exports a `Ref` (plus its category attributes) to Schema.org JSON-LD for interoperability. The `@context` is an object that maps the default vocabulary to Schema.org and adds a `reffo:` namespace for Reffo-specific fields (e.g. condition is emitted as `reffo:condition`):

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "reffo": "https://reffo.ai/ns/"
  },
  "@type": "Product",
  "name": "Vintage Guitar",
  "description": "1965 Fender Stratocaster",
  "reffo:condition": "used",
  "offers": {
    "@type": "Offer",
    "price": 2500,
    "priceCurrency": "USD"
  }
}
```

## Adding custom categories

See the [Adding Categories guide](/guides/adding-categories) for how to extend the schema system.
