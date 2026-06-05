# Types

Core TypeScript interfaces exported by `@pelagora/pim-protocol`. All types are importable from the package entrypoint:

```typescript
import type { Ref, Offer, RefMedia, PeerMessage, PimRefsFeed } from '@pelagora/pim-protocol';
```

## Ref

The fundamental data unit — a Schema.org-aligned reference to an item a Beacon owns. Location is stored as flat fields; the precise address is kept local and never shared.

```typescript
interface Ref {
  id: string;
  name: string;                       // Schema.org: name
  description: string;
  category: string;
  subcategory: string;
  image?: string;                     // URL
  sku?: string;
  listingStatus: ListingStatus;       // visibility status
  quantity: number;
  stockType?: StockType;              // 'tracked' | 'unlimited'
  negotiable?: boolean;
  reffoSynced: boolean;
  reffoRefId?: string;
  locationLat?: number;
  locationLng?: number;
  locationAddress?: string;           // stored locally only, never shared
  locationCity?: string;
  locationState?: string;
  locationZip?: string;
  locationCountry?: string;
  sellingScope?: SellingScope;        // 'global' | 'national' | 'range'
  sellingRadiusMiles?: number;
  attributes?: Record<string, unknown>; // category-specific fields
  condition?: string;
  rentalTerms?: string;
  rentalDeposit?: number;
  rentalDuration?: number;
  rentalDurationUnit?: RentalDurationUnit;
  purchaseDate?: string;
  purchasePrice?: number;
  collectionId?: string;
  acceptedPaymentMethods?: PaymentMethod[];
  networkPublished: boolean;
  shareUrl?: string;
  sellerCheckoutUrl?: string;         // optional seller-hosted checkout (provider-neutral)
  beaconId: string;                   // owning Beacon public key
  createdAt: string;
  updatedAt: string;
}
```

`RefCreate` and `RefUpdate` are derived input types (`RefCreate` omits server-assigned fields; `RefUpdate = Partial<RefCreate>`).

### `sellerCheckoutUrl` (v0.6.0+)

Optional. When present, agent surfaces (ACP feeds, Pelagora Skills) route buyers directly to the seller's checkout. The PIM operator never sees payment data — it is a pure pass-through URL. **Provider-neutral:** any well-formed `https` checkout endpoint is valid (Stripe Payment Link, BTCPay/Lightning invoice, or any other processor). Validate with [`isValidCheckoutUrl`](/glossary/pim-protocol/utilities).

### `acceptedPaymentMethods`

An **open vocabulary** of payment-method identifiers. The `PaymentMethod` type is `RECOMMENDED_PAYMENT_METHODS[number] | (string & {})` — any string is valid, so novel/regional methods are never gated. The recommended generic rails (advisory, for interop) are `cash`, `check`, `bank_transfer`, `card`, `bitcoin`, `lightning`. Brand names are intentionally **not** part of the canonical vocabulary.

## Offer

A priced availability for a `Ref`.

```typescript
interface Offer {
  id: string;
  refId: string;
  price: number;
  priceCurrency: string;              // ISO 4217
  status: OfferStatus;                // 'active' | 'sold' | 'withdrawn'
  sellerId: string;                   // seller Beacon public key
  location?: string;
  createdAt: string;
  updatedAt: string;
}
```

## RefMedia

A photo or video attached to a `Ref`.

```typescript
interface RefMedia {
  id: string;
  refId: string;
  mediaType: MediaType;               // 'photo' | 'video'
  filePath: string;
  mimeType: string;
  fileSize: number;
  sortOrder: number;
  createdAt: string;
}
```

## Conversations

Buyer ↔ seller messaging (replaces the legacy `Negotiation` types, which remain exported for transition).

```typescript
interface Conversation {
  id: string;
  refId: string;
  refName: string;
  counterpartBeaconId: string;
  role: 'buyer' | 'seller';
  status: ConversationStatus;         // 'open' | 'closed'
  closedBy?: string;
  lastMessageAt: string;
  createdAt: string;
  updatedAt: string;
}

interface ConversationMessage {
  id: string;
  conversationId: string;
  senderBeaconId: string;
  messageType: ChatMessageType;       // 'text' | 'offer' | 'counter' | 'accept' | 'reject' | 'withdraw' | 'sold' | 'system'
  content?: string;
  amount?: number;
  currency?: string;
  createdAt: string;
}
```

## PeerMessage

The envelope for DHT peer-to-peer messages.

```typescript
interface PeerMessage {
  type: 'query' | 'response' | 'announce' | 'proposal'
      | 'proposal_response' | 'chat_message' | 'conversation_close' | (string & {});
  beaconId: string;
  payload: unknown;
}
```

Typed payloads are exported for each message kind: `QueryPayload`, `AnnouncePayload`, `ChatMessagePayload`, `ConversationClosePayload`, `ProposalPayload`, `ProposalResponsePayload`. Parse raw DHT frames with [`parseDhtMessage`](/glossary/pim-protocol/utilities).

## Beacon

```typescript
interface BeaconSettings {
  id: string;
  locationLat?: number;
  locationLng?: number;
  locationAddress?: string;
  locationCity?: string;
  locationState?: string;
  locationZip?: string;
  locationCountry?: string;
  defaultSellingScope: SellingScope;
  defaultSellingRadiusMiles: number;
  profilePicturePath?: string;
  acceptedPaymentMethods?: PaymentMethod[];
  networkPublishEnabled: boolean;
}

interface BeaconInfo {
  id: string;
  version: string;
  refCount: number;
  offerCount: number;
  uptime: number;
  dht: { connected: boolean; peers: number };
}
```

## Well-known discovery (v0.6.0+)

Types for the `/.well-known/pim` discovery convention and the `/.well-known/pim/refs.json` catalog feed.

```typescript
interface PimDiscoveryDoc {
  pim_version: string;
  operator: PimOperator;              // name, url, support_email
  capabilities: PimCapabilities;      // refs_feed URL, optional checkout
  platform_role?: 'pairing' | 'merchant';
  processes_payments?: boolean;
  rate_limits?: PimRateLimits;
  terms?: string;
  privacy?: string;
}

interface PimRefsFeed {
  pim_version: string;
  refs: Ref[];
  next_page_url?: string;
}
```

See the [well-known endpoint spec](https://github.com/ReffoAI/pim-protocol/blob/main/docs/well-known.md) for headers, CORS, and pagination guidance.

## Enums and aliases

`ListingStatus`, `RentalDurationUnit`, `SellingScope`, `StockType`, `OfferStatus`, `MediaType`, `ConversationStatus`, `ChatMessageType`, `PaymentMethod`, and the legacy `NegotiationStatus` / `NegotiationRole` are all exported from the package entrypoint.
