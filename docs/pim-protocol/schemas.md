# Category Schemas

PIM Protocol includes category schemas that define structured attributes for different types of products. These schemas are aligned with [Schema.org](https://schema.org) vocabulary.

## How schemas work

Each category (e.g., "Electronics", "Furniture") has a schema that defines:
- Required and optional attributes
- Data types and valid values
- Schema.org property mappings

When a Ref is created with a category, its `traits` field is validated against the corresponding schema.

## Built-in categories

| Category | Schema.org Type | Key Attributes |
|---|---|---|
| Electronics | `Product` | brand, model, condition |
| Furniture | `Product` | material, dimensions, style |
| Clothing | `Product` | size, color, brand, material |
| Books | `Book` | author, isbn, publisher |
| Vehicles | `Vehicle` | make, model, year, mileage |

## Schema.org mapping

Product data exports to Schema.org JSON-LD format for interoperability:

```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Vintage Guitar",
  "description": "1965 Fender Stratocaster",
  "brand": { "@type": "Brand", "name": "Fender" },
  "offers": {
    "@type": "Offer",
    "price": "2500",
    "priceCurrency": "USD"
  }
}
```

## Adding custom categories

See the [Adding Categories guide](/guides/adding-categories) for how to extend the schema system.
