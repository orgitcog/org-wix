# Wix Headless Templates - SDK Wrapper

Unified wrapper for the Wix SDK providing consistent interfaces for all business solutions.

## Installation

This package is part of the Wix Headless Templates monorepo and is automatically available in all templates via workspace dependencies.

## Usage

```javascript
import UnifiedWixClient from '@wix-templates/wix-sdk-wrapper';
import { createClient } from '@wix/sdk';

// Initialize Wix SDK client
const myWixClient = createClient({
  // ... your Wix client configuration
});

// Wrap with unified client
const wixClient = UnifiedWixClient.init(myWixClient);

// Use business solution wrappers
const products = await wixClient.stores.getProducts();
```

## Why Use the Wrapper?

- **Consistent Interface**: All solutions follow the same patterns
- **Error Handling**: Automatic error catching and formatting
- **Type Safety**: Better TypeScript support
- **Maintainability**: Updates propagate to all templates
- **Testing**: Easier to mock for unit tests

## Available Solutions

### CMS (Content Management)

```javascript
// Get items from a collection
const items = await wixClient.cms.getItems('myCollection', {
  limit: 10,
  skip: 0
});

// Get a specific item
const item = await wixClient.cms.getItem('myCollection', 'itemId');
```

### Stores (E-commerce)

```javascript
// Get all products
const products = await wixClient.stores.getProducts({
  limit: 20
});

// Get specific product
const product = await wixClient.stores.getProduct('productId');

// Cart operations
const cart = await wixClient.stores.createCart();
await wixClient.stores.addToCart(cart.id, [
  { productId: 'prod123', quantity: 2 }
]);
```

### Bookings

```javascript
// Get available services
const services = await wixClient.bookings.getServices({
  limit: 10
});

// Check availability
const slots = await wixClient.bookings.getAvailability(
  'serviceId',
  '2026-01-05'
);

// Create booking
const booking = await wixClient.bookings.createBooking({
  serviceId: 'service123',
  slotId: 'slot456',
  // ... other booking data
});
```

### Events

```javascript
// Get upcoming events
const events = await wixClient.events.getEvents({
  limit: 10
});

// Get event details
const event = await wixClient.events.getEvent('eventId');

// Register for event
const registration = await wixClient.events.registerToEvent(
  'eventId',
  {
    guestInfo: { name: 'John Doe', email: 'john@example.com' }
  }
);
```

### Members (Authentication)

```javascript
// Get current member
const member = await wixClient.members.getCurrentMember();

// Login
await wixClient.members.login('user@example.com', 'password');

// Logout
await wixClient.members.logout();
```

## Error Handling

All methods include automatic error handling:

```javascript
try {
  const products = await wixClient.stores.getProducts();
} catch (error) {
  // Error is already formatted and logged
  // error.message contains user-friendly message
  console.error(error.message);
}
```

## Advanced Usage

### Direct Access to Wix Client

If you need access to the underlying Wix client:

```javascript
const rawClient = wixClient.wixClient;
```

### Custom Wrapper

Extend the wrapper for custom functionality:

```javascript
import { WixSdkWrapper } from '@wix-templates/wix-sdk-wrapper';

class CustomWrapper extends WixSdkWrapper {
  async customMethod() {
    this._ensureInitialized();
    try {
      // Your custom logic
      return await this.client.customApi.call();
    } catch (error) {
      this._handleError(error, 'Custom.customMethod');
    }
  }
}
```

## Examples

### E-commerce Product Listing

```javascript
import UnifiedWixClient from '@wix-templates/wix-sdk-wrapper';

export async function getProducts() {
  const wixClient = UnifiedWixClient.init(myWixClient);
  
  try {
    const products = await wixClient.stores.getProducts({
      limit: 20
    });
    
    return products.items;
  } catch (error) {
    console.error('Failed to load products:', error.message);
    return [];
  }
}
```

### Booking Service Availability

```javascript
import UnifiedWixClient from '@wix-templates/wix-sdk-wrapper';

export async function checkAvailability(serviceId, date) {
  const wixClient = UnifiedWixClient.init(myWixClient);
  
  try {
    const availability = await wixClient.bookings.getAvailability(
      serviceId,
      date
    );
    
    return availability.slots;
  } catch (error) {
    console.error('Failed to check availability:', error.message);
    return [];
  }
}
```

### Member Authentication

```javascript
import UnifiedWixClient from '@wix-templates/wix-sdk-wrapper';

export async function loginUser(email, password) {
  const wixClient = UnifiedWixClient.init(myWixClient);
  
  try {
    await wixClient.members.login(email, password);
    const member = await wixClient.members.getCurrentMember();
    
    return { success: true, member };
  } catch (error) {
    return { success: false, error: error.message };
  }
}
```

## TypeScript Support

The wrapper provides TypeScript definitions:

```typescript
import UnifiedWixClient, { 
  CmsWrapper,
  StoresWrapper,
  BookingsWrapper 
} from '@wix-templates/wix-sdk-wrapper';

const wixClient: UnifiedWixClient = UnifiedWixClient.init(myWixClient);
```

## Testing

Mock the wrapper in tests:

```javascript
import UnifiedWixClient from '@wix-templates/wix-sdk-wrapper';

jest.mock('@wix-templates/wix-sdk-wrapper');

test('loads products', async () => {
  const mockProducts = [{ id: '1', name: 'Product 1' }];
  
  UnifiedWixClient.init.mockReturnValue({
    stores: {
      getProducts: jest.fn().mockResolvedValue({ items: mockProducts })
    }
  });
  
  // Test your code...
});
```

## License

MIT
