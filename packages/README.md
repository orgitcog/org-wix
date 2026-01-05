# Shared Packages

This directory contains shared packages used across all Wix Headless templates.

## Available Packages

### [@wix-templates/shared-config](./shared-config)

Common configuration for Wix Headless templates including API endpoints, environment variables, and framework-specific settings.

**Installation:** Automatically available in workspace

**Usage:**
```javascript
import { wixApiConfig, frameworks, wixSolutions } from '@wix-templates/shared-config';
```

---

### [@wix-templates/shared-utils](./shared-utils)

Utility functions for common operations like date/currency formatting, validation, and string manipulation.

**Installation:** Automatically available in workspace

**Usage:**
```javascript
import { formatDate, formatCurrency, slugify } from '@wix-templates/shared-utils';
```

---

### [@wix-templates/wix-sdk-wrapper](./wix-sdk-wrapper)

Unified wrapper for the Wix SDK providing consistent interfaces for all business solutions (CMS, Stores, Bookings, Events, Members).

**Installation:** Automatically available in workspace

**Usage:**
```javascript
import UnifiedWixClient from '@wix-templates/wix-sdk-wrapper';

const wixClient = UnifiedWixClient.init(myWixClient);
const products = await wixClient.stores.getProducts();
```

---

### [@wix-templates/cli](./cli)

Command-line interface for managing Wix Headless templates.

**Installation:** Automatically available in workspace

**Usage:**
```bash
npx wix-templates list
npx wix-templates solutions
npx wix-templates --help
```

---

## Using Shared Packages

All packages are automatically linked in the workspace and can be imported in any template:

```javascript
// In any template (Next.js, Astro, React Native)
import { formatCurrency } from '@wix-templates/shared-utils';
import { wixSolutions } from '@wix-templates/shared-config';
import UnifiedWixClient from '@wix-templates/wix-sdk-wrapper';
```

## Development

### Building

```bash
# Build all packages
npm run build
```

### Testing

```bash
# Run all tests
npm run test
```

### Adding a New Package

1. Create directory: `mkdir packages/new-package`
2. Add `package.json` with workspace-compatible name: `@wix-templates/new-package`
3. Update root `package.json` workspaces if needed
4. Add to documentation

## Architecture

```
packages/
├── shared-config/          # Configuration constants
│   ├── package.json
│   └── index.js
├── shared-utils/           # Utility functions
│   ├── package.json
│   └── index.js
├── wix-sdk-wrapper/        # SDK wrapper
│   ├── package.json
│   └── index.js
└── cli/                    # CLI tool
    ├── package.json
    ├── bin/
    │   └── cli.js
    └── index.js
```

## Dependencies

Shared packages can depend on each other:

- `shared-utils` depends on `shared-config`
- `wix-sdk-wrapper` depends on `shared-config` and `shared-utils`
- Templates depend on all shared packages

## Contributing

See [CONTRIBUTING.md](../CONTRIBUTING.md) for guidelines on contributing to shared packages.

## License

MIT - See individual package directories for specific licenses.
