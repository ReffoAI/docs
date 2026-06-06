# Utilities

Runtime helper functions exported by `@pelagora/pim-protocol`. The package has **no external runtime dependencies** — these ship as plain functions.

## Location

### blurLocation

Reduces GPS precision to ~0.7 mi / zip-code level before sharing approximate location with peers.

```typescript
function blurLocation(lat: number, lng: number): { lat: number; lng: number }
```

### haversineDistanceMiles

Great-circle distance in miles between two lat/lng points.

```typescript
function haversineDistanceMiles(lat1: number, lng1: number, lat2: number, lng2: number): number
```

### validateCoordinates

Validates that a lat/lng pair is within bounds (`[-90, 90]` / `[-180, 180]`). Accepts `unknown` by design — it coerces with `Number()` and reports `NaN`/out-of-range as invalid, so it is safe on untrusted input.

```typescript
function validateCoordinates(lat: unknown, lng: unknown): CoordinateValidationResult
```

## Sanitization

### stripHtml

Removes HTML tags from a string.

```typescript
function stripHtml(s: string): string
```

### sanitizeField

Sanitizes a single user-supplied field against `FIELD_CONSTRAINTS`. The first argument is the **value** to sanitize; the second is the **field name** used to look up the constraint. In the default `'truncate'` mode it trims to the max length; in `'reject'` mode it throws a `SanitizationError` (use this at HTTP API boundaries).

```typescript
function sanitizeField(value: string, fieldName: string, mode?: SanitizeMode): string
```

### sanitizeObject

Sanitizes every known field on an object in one pass.

```typescript
function sanitizeObject<T extends Record<string, unknown>>(obj: T, mode?: SanitizeMode): T
```

### isValidEmail

Basic email format validation.

```typescript
function isValidEmail(email: string): boolean
```

### delimitUserText

Wraps untrusted user text in labeled delimiters for safe inclusion in LLM prompts.

```typescript
function delimitUserText(text: string, label: string): string
```

## Checkout

### isValidCheckoutUrl

Validates a `Ref.sellerCheckoutUrl`. **Provider-neutral:** asserts a well-formed `https` URL with no embedded credentials — it does **not** restrict the host to any payment vendor. Returns `true` for `undefined` (the field is optional).

```typescript
function isValidCheckoutUrl(value: string | undefined): boolean
```

```typescript
isValidCheckoutUrl(undefined);                           // true (optional)
isValidCheckoutUrl('https://buy.stripe.com/abc');        // true
isValidCheckoutUrl('https://checkout.example.com/pay');  // true (any provider)
isValidCheckoutUrl('http://example.com/pay');            // false (not https)
isValidCheckoutUrl('https://user:pass@example.com/pay'); // false (embedded credentials)
```

## DHT

### parseDhtMessage

Parses a raw DHT frame into a typed `PeerMessage`, or returns `null` if invalid.

```typescript
function parseDhtMessage(raw: Buffer | string): PeerMessage | null
```

## Constants

### RECOMMENDED_PAYMENT_METHODS

The advisory generic-rail vocabulary for `acceptedPaymentMethods` (the `PaymentMethod` type stays open — any string is valid).

```typescript
const RECOMMENDED_PAYMENT_METHODS = ['cash', 'check', 'bank_transfer', 'card', 'bitcoin', 'lightning'] as const;
```
