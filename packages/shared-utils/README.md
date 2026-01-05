# Wix Headless Templates - Shared Utilities

Common utility functions for Wix Headless templates.

## Installation

This package is part of the Wix Headless Templates monorepo and is automatically available in all templates via workspace dependencies.

## Usage

```javascript
import {
  formatDate,
  formatCurrency,
  validateWixCredentials,
  slugify,
  debounce,
  // ... other utilities
} from '@wix-templates/shared-utils';
```

## API Reference

### Date & Time

#### `formatDate(date, locale = 'en-US')`

Format a date for display.

```javascript
formatDate(new Date(), 'en-US');
// Returns: "January 5, 2026"

formatDate('2026-01-05', 'fr-FR');
// Returns: "5 janvier 2026"
```

### Currency

#### `formatCurrency(amount, currency = 'USD', locale = 'en-US')`

Format currency for display.

```javascript
formatCurrency(99.99, 'USD');
// Returns: "$99.99"

formatCurrency(1234.56, 'EUR', 'de-DE');
// Returns: "1.234,56 €"
```

### Validation

#### `validateWixCredentials(credentials)`

Validate Wix client credentials.

```javascript
validateWixCredentials({
  clientId: 'abc123',
  siteId: 'xyz789'
});
// Returns: true

validateWixCredentials({
  clientId: 'abc123'
});
// Returns: false (missing siteId)
```

### URL & API

#### `buildWixApiUrl(endpoint)`

Build a complete Wix API URL.

```javascript
buildWixApiUrl('/stores/v1/products');
// Returns: "https://www.wixapis.com/stores/v1/products"
```

#### `slugify(text)`

Convert text to URL-friendly slug.

```javascript
slugify('My Blog Post Title!');
// Returns: "my-blog-post-title"
```

### JSON Utilities

#### `safeJsonParse(jsonString, defaultValue = null)`

Safely parse JSON with error handling.

```javascript
safeJsonParse('{"valid": "json"}');
// Returns: { valid: 'json' }

safeJsonParse('invalid json', { fallback: true });
// Returns: { fallback: true }
```

### Performance

#### `debounce(func, wait)`

Debounce function calls.

```javascript
const debouncedSearch = debounce((query) => {
  console.log('Searching for:', query);
}, 300);

// Will only execute once after 300ms of inactivity
debouncedSearch('test');
debouncedSearch('test123');
debouncedSearch('test123456');
```

### ID Generation

#### `generateUniqueId()`

Generate a unique identifier.

```javascript
generateUniqueId();
// Returns: "1704448920000-k3j2h1g9f"
```

### Environment Detection

#### `isServer()`

Check if code is running server-side.

```javascript
if (isServer()) {
  // Server-side only code
  const secrets = process.env.SECRETS;
}
```

### Error Handling

#### `getErrorMessage(error)`

Extract error message from various error types.

```javascript
getErrorMessage(new Error('Something went wrong'));
// Returns: "Something went wrong"

getErrorMessage({ message: 'API error' });
// Returns: "API error"

getErrorMessage('String error');
// Returns: "String error"

getErrorMessage(null);
// Returns: "An unknown error occurred"
```

## Examples

### Format Product Price

```javascript
import { formatCurrency } from '@wix-templates/shared-utils';

function ProductCard({ product }) {
  const price = formatCurrency(
    product.price,
    product.currency,
    navigator.language
  );
  
  return <div>Price: {price}</div>;
}
```

### Create Blog Post Slug

```javascript
import { slugify } from '@wix-templates/shared-utils';

function createPost(title) {
  const slug = slugify(title);
  const url = `/blog/${slug}`;
  
  return { title, slug, url };
}
```

### Debounced Search

```javascript
import { debounce } from '@wix-templates/shared-utils';

const searchProducts = debounce(async (query) => {
  const results = await fetch(`/api/search?q=${query}`);
  updateResults(results);
}, 300);
```

### Safe Configuration Loading

```javascript
import { safeJsonParse } from '@wix-templates/shared-utils';

const config = safeJsonParse(
  process.env.APP_CONFIG,
  { defaults: true }
);
```

## License

MIT
