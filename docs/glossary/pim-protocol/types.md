# Types

Core TypeScript interfaces exported by `@pelagora/pim-protocol`.

## Ref

The fundamental data unit — a reference to a physical item.

```typescript
interface Ref {
  id: string
  title: string
  description?: string
  category?: string
  subcategory?: string
  condition?: string
  price?: number
  currency?: string
  status: 'active' | 'sold' | 'archived'
  traits?: Record<string, any>
  media?: RefMedia[]
  location?: Location
  createdAt: string
  updatedAt: string
}
```

## Offer

A proposal to buy or trade for a Ref.

```typescript
interface Offer {
  id: string
  refId: string
  fromBeaconId: string
  amount?: number
  currency?: string
  message?: string
  status: 'pending' | 'accepted' | 'rejected' | 'withdrawn'
  createdAt: string
}
```

## PeerMessage

The envelope for all DHT communication.

```typescript
interface PeerMessage {
  type: string & {}
  beaconId: string
  payload: any
}
```

The `type` field uses `string & {}` to allow both built-in and skill-defined message types.

## Want

A "wanted" listing — something a user is looking for.

```typescript
interface Want {
  id: string
  title: string
  description?: string
  category?: string
  maxPrice?: number
  currency?: string
  status: 'active' | 'fulfilled' | 'archived'
  createdAt: string
}
```

## Location

Geographic coordinates with optional blurring for privacy.

```typescript
interface Location {
  lat: number
  lng: number
  label?: string
  blurred?: boolean
}
```

## RefMedia

Media attachments for a Ref.

```typescript
interface RefMedia {
  id: string
  refId: string
  url: string
  type: 'image' | 'video'
  isPrimary?: boolean
}
```
