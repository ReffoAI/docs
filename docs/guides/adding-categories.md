# Adding Categories

Categories define the structured attributes available for different types of products. This guide explains how to add new categories to the PIM Protocol schema system.

## Category structure

Each category is defined as a schema with:
- A name and Schema.org type mapping
- A set of typed attributes (traits)
- Required vs optional designations

## Defining a new category

Add your category schema to the schemas directory in `@pelagora/pim-protocol`:

```typescript
export const musicalInstruments = {
  name: 'Musical Instruments',
  schemaOrgType: 'Product',
  traits: {
    brand: { type: 'string', required: false },
    instrumentType: { type: 'string', required: true },
    condition: { type: 'string', required: false },
    year: { type: 'number', required: false },
    material: { type: 'string', required: false },
  },
}
```

## Schema.org alignment

Map your category attributes to Schema.org properties where possible:

| Trait | Schema.org Property |
|---|---|
| `brand` | `brand.name` |
| `condition` | `itemCondition` |
| `year` | `productionDate` |
| `material` | `material` |

## Registration

Register the category in the taxonomy so it appears in the UI and API:

```typescript
import { musicalInstruments } from './schemas/musical-instruments'

taxonomy.register('musical-instruments', musicalInstruments)
```

## Testing

After adding a category:
1. Create a Ref with the new category
2. Verify traits are validated correctly
3. Check Schema.org JSON-LD export
4. Test the category appears in the taxonomy API
