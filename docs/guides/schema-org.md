# Schema.org Integration

Pelagora uses [Schema.org](https://schema.org) vocabulary to make product data interoperable with the broader web ecosystem.

## Why Schema.org?

- **Standard vocabulary** — Recognized by Google, Bing, and other search engines
- **Rich product types** — Covers products, offers, organizations, and more
- **JSON-LD support** — Clean, machine-readable data format
- **Interoperability** — Other systems can understand Pelagora data

## How Pelagora uses Schema.org

### Product data

Each Ref maps to a Schema.org `Product` (or more specific type like `Book`, `Vehicle`):

```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Vintage Guitar",
  "description": "1965 Fender Stratocaster in excellent condition",
  "brand": {
    "@type": "Brand",
    "name": "Fender"
  },
  "itemCondition": "https://schema.org/UsedCondition",
  "offers": {
    "@type": "Offer",
    "price": "2500.00",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock"
  }
}
```

### Offer data

Pelagora offers map to Schema.org `Offer`:

```json
{
  "@type": "Offer",
  "price": "2200.00",
  "priceCurrency": "USD",
  "seller": {
    "@type": "Person",
    "identifier": "beacon-id-here"
  }
}
```

## Category type mapping

| Pelagora Category | Schema.org Type |
|---|---|
| Electronics | `Product` |
| Books | `Book` |
| Vehicles | `Vehicle` |
| Clothing | `Product` → `IndividualProduct` |
| Furniture | `Product` |

## Extending the mapping

When adding new categories, choose the most specific Schema.org type available. See the [Adding Categories guide](/guides/adding-categories) for details.
