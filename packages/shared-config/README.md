# Wix Headless Templates - Shared Configuration

Common configuration constants and utilities for Wix Headless templates.

## Installation

This package is part of the Wix Headless Templates monorepo and is automatically available in all templates via workspace dependencies.

## Usage

```javascript
import {
  wixApiConfig,
  envVars,
  frameworks,
  wixSolutions,
  getFrameworkConfig
} from '@wix-templates/shared-config';
```

## API Reference

### `wixApiConfig`

Configuration for Wix API endpoints:

```javascript
{
  apiBaseUrl: 'https://www.wixapis.com',
  authEndpoint: 'https://www.wix.com/oauth/authorize',
  tokenEndpoint: 'https://www.wix.com/oauth/access_token'
}
```

### `envVars`

Standard environment variable names:

```javascript
{
  WIX_CLIENT_ID: 'NEXT_PUBLIC_WIX_CLIENT_ID',
  WIX_CLIENT_SECRET: 'WIX_CLIENT_SECRET',
  WIX_REFRESH_TOKEN: 'WIX_REFRESH_TOKEN',
  WIX_SITE_ID: 'NEXT_PUBLIC_WIX_SITE_ID'
}
```

### `frameworks`

Supported framework identifiers:

```javascript
{
  NEXTJS: 'nextjs',
  ASTRO: 'astro',
  REACT_NATIVE: 'react-native'
}
```

### `wixSolutions`

Available Wix business solutions:

```javascript
{
  CMS: 'cms',
  BLOG: 'blog',
  STORES: 'stores',
  BOOKINGS: 'bookings',
  EVENTS: 'events',
  MEMBERS: 'members',
  PRICING_PLANS: 'pricing-plans',
  MEDIA: 'media'
}
```

### `getFrameworkConfig(framework)`

Get framework-specific configuration:

```javascript
const config = getFrameworkConfig(frameworks.NEXTJS);
// Returns:
// {
//   buildCommand: 'next build',
//   devCommand: 'next dev',
//   startCommand: 'next start',
//   configFiles: ['next.config.js', 'next.config.mjs']
// }
```

## Examples

### Using in a Template

```javascript
import { wixApiConfig, wixSolutions } from '@wix-templates/shared-config';

// Build API URL
const productsUrl = `${wixApiConfig.apiBaseUrl}/stores/v1/products`;

// Check if using a specific solution
if (template.solutions.includes(wixSolutions.STORES)) {
  // Initialize stores functionality
}
```

### Framework Detection

```javascript
import { getFrameworkConfig, frameworks } from '@wix-templates/shared-config';

const framework = process.env.FRAMEWORK || frameworks.NEXTJS;
const config = getFrameworkConfig(framework);

console.log(`Build command: ${config.buildCommand}`);
```

## License

MIT
