# Utilities

Helper functions exported by `@pelagora/pim-protocol`.

## blurLocation

Adds random noise to GPS coordinates for privacy. Used when sharing approximate location with peers.

```typescript
function blurLocation(location: Location, radiusKm?: number): Location
```

- `radiusKm` — Blur radius in kilometers (default: 1)
- Returns a new `Location` with `blurred: true`

## sanitize

Sanitizes user input strings to prevent XSS and injection.

```typescript
function sanitize(input: string): string
```

Strips HTML tags and dangerous characters while preserving readable text.

## validateRef

Validates a Ref object against its category schema.

```typescript
function validateRef(ref: Partial<Ref>): ValidationResult
```

Returns validation errors if required fields are missing or traits don't match the category schema.
