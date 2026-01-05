# Comprehensive Wix Headless Integration Guide

This document provides a comprehensive guide to the integrated Wix Headless templates monorepo, covering all available templates, shared utilities, and best practices.

## Table of Contents

1. [Overview](#overview)
2. [Architecture](#architecture)
3. [Getting Started](#getting-started)
4. [Shared Packages](#shared-packages)
5. [Templates](#templates)
6. [CLI Tool](#cli-tool)
7. [Development](#development)
8. [Best Practices](#best-practices)

## Overview

The Wix Headless Monorepo is a comprehensive integration of all Wix Headless templates, providing:

- **16+ production-ready templates** across Next.js, Astro, and React Native
- **Shared utilities and configurations** for consistent development
- **Unified SDK wrapper** for simplified Wix API integration
- **CLI tool** for template management
- **Monorepo infrastructure** with Turborepo for efficient builds

## Architecture

### Monorepo Structure

```
wix-headless-monorepo/
├── packages/                    # Shared packages
│   ├── shared-config/          # Common configuration
│   ├── shared-utils/           # Utility functions
│   ├── wix-sdk-wrapper/        # Unified SDK wrapper
│   └── cli/                    # CLI tool
├── nextjs/                     # Next.js templates (7)
│   ├── minimal-examples/
│   ├── appointments-subscriptions/
│   ├── classes-subscriptions/
│   ├── cms-education/
│   ├── commerce-ticketing/
│   ├── commerce/
│   └── external-identity-provider/
├── astro/                      # Astro templates (7)
│   ├── astrowind/
│   ├── blank/
│   ├── blog/
│   ├── commerce/
│   ├── media-manager/
│   ├── registration/
│   └── scheduler/
├── react-native/               # React Native templates (1)
│   └── mobile-ecommerce/
└── scripts/                    # Utility scripts
    ├── list-templates.js
    └── sync-templates.js
```

### Design Principles

1. **Modularity**: Each template is self-contained but uses shared packages
2. **Consistency**: Common patterns and utilities across all templates
3. **Type Safety**: TypeScript support throughout
4. **Performance**: Optimized builds with Turborepo caching
5. **Developer Experience**: Comprehensive CLI and documentation

## Getting Started

### Prerequisites

- Node.js >= 18.0.0
- npm >= 10.0.0
- A Wix account and site

### Installation

1. Clone the repository:
```bash
git clone https://github.com/wix/headless-templates.git
cd headless-templates
```

2. Install dependencies:
```bash
npm install
```

3. List available templates:
```bash
npm run templates:list
```

### Quick Start with a Template

1. Navigate to a template directory:
```bash
cd nextjs/minimal-examples
# or
cd astro/blog
# or
cd react-native/mobile-ecommerce
```

2. Follow the template-specific README for setup instructions

## Shared Packages

### @wix-templates/shared-config

Provides common configuration used across all templates:

```javascript
import { wixApiConfig, frameworks, wixSolutions } from '@wix-templates/shared-config';

// Get framework-specific configuration
const config = getFrameworkConfig(frameworks.NEXTJS);
```

**Features:**
- Wix API endpoints and configuration
- Framework definitions
- Business solution constants
- Environment variable names

### @wix-templates/shared-utils

Common utility functions for all templates:

```javascript
import { formatDate, formatCurrency, slugify } from '@wix-templates/shared-utils';

// Format a date
const formatted = formatDate(new Date(), 'en-US');

// Format currency
const price = formatCurrency(99.99, 'USD');

// Create URL-friendly slugs
const slug = slugify('My Blog Post Title');
```

**Available utilities:**
- Date and currency formatting
- Wix credential validation
- JSON parsing with error handling
- Debounce function
- Unique ID generation
- Server-side detection
- Error message extraction

### @wix-templates/wix-sdk-wrapper

Unified wrapper for Wix SDK providing consistent API across all business solutions:

```javascript
import UnifiedWixClient from '@wix-templates/wix-sdk-wrapper';

// Initialize with Wix client
const wixClient = UnifiedWixClient.init(myWixClient);

// Use business solution wrappers
const products = await wixClient.stores.getProducts();
const services = await wixClient.bookings.getServices();
const events = await wixClient.events.getEvents();
const member = await wixClient.members.getCurrentMember();
```

**Supported solutions:**
- CMS (Content Management)
- Stores (E-commerce)
- Bookings (Appointments & Classes)
- Events (Ticketing)
- Members (Authentication)

## Templates

### Next.js Templates

| Template | Description | Solutions |
|----------|-------------|-----------|
| **minimal-examples** | Concise examples for quick integration | Stores, Bookings, Events |
| **appointments-subscriptions** | Appointment booking with subscriptions | Bookings, Members |
| **classes-subscriptions** | Class management with subscriptions | Bookings, Members |
| **cms-education** | Educational site with CMS | CMS |
| **commerce-ticketing** | E-commerce store with event ticketing | Events, Members |
| **commerce** | Full e-commerce integration | Stores |
| **external-identity-provider** | External auth provider integration | Members |

### Astro Templates

| Template | Description | Solutions |
|----------|-------------|-----------|
| **astrowind** | Tailwind CSS with advanced features | CMS, Blog, Pricing Plans |
| **blank** | Minimal starter template | CMS |
| **blog** | Blog with content management | Blog |
| **commerce** | E-commerce store | Stores |
| **media-manager** | Media library integration | Media |
| **registration** | Event registration | Members |
| **scheduler** | Booking scheduler | Bookings |

### React Native Templates

| Template | Description | Solutions |
|----------|-------------|-----------|
| **mobile-ecommerce** | Mobile shopping app | Stores, Members |

## CLI Tool

The `@wix-templates/cli` package provides command-line tools for managing templates:

### Available Commands

```bash
# List all templates
npx wix-templates list

# Filter by framework
npx wix-templates list --framework nextjs

# Filter by solution
npx wix-templates list --solution stores

# Show template information
npx wix-templates info <template-name>

# List all Wix solutions
npx wix-templates solutions

# List supported frameworks
npx wix-templates frameworks
```

## Development

### Monorepo Commands

```bash
# Run dev servers for all templates
npm run dev

# Build all templates
npm run build

# Run all tests
npm run test

# Lint all code
npm run lint

# Clean all build artifacts
npm run clean

# Format all code
npm run format
```

### Template-Specific Development

Navigate to a template directory and use its scripts:

```bash
cd nextjs/minimal-examples
npm run dev        # Start development server
npm run build      # Build for production
npm run test       # Run tests
```

### Working with Shared Packages

When making changes to shared packages:

1. Make your changes in `packages/<package-name>/`
2. Rebuild affected templates: `npm run build`
3. Test changes across multiple templates

### Adding a New Template

1. Create template directory in appropriate framework folder
2. Add to workspaces in root `package.json`
3. Include shared packages as dependencies
4. Update documentation
5. Add to CLI template list

## Best Practices

### Using Shared Utilities

Always prefer shared utilities over implementing your own:

```javascript
// ✅ Good - uses shared utility
import { formatCurrency } from '@wix-templates/shared-utils';
const price = formatCurrency(product.price, product.currency);

// ❌ Avoid - custom implementation
const price = `$${product.price.toFixed(2)}`;
```

### Error Handling

Use the unified SDK wrapper for consistent error handling:

```javascript
// ✅ Good - automatic error handling
try {
  const products = await wixClient.stores.getProducts();
} catch (error) {
  // Error is already formatted and logged
  console.error(error.message);
}
```

### Configuration Management

Use shared configuration for consistency:

```javascript
// ✅ Good - shared config
import { wixApiConfig } from '@wix-templates/shared-config';
const apiUrl = wixApiConfig.apiBaseUrl;

// ❌ Avoid - hardcoded values
const apiUrl = 'https://www.wixapis.com';
```

### Environment Variables

Follow the naming convention from shared-config:

```javascript
// ✅ Good - standard names
NEXT_PUBLIC_WIX_CLIENT_ID=your_client_id
WIX_CLIENT_SECRET=your_secret

// ❌ Avoid - custom names
MY_WIX_ID=your_client_id
```

### Code Organization

Keep template-specific code separate from shared logic:

```
template/
├── src/
│   ├── components/     # Template-specific components
│   ├── pages/          # Template routes/pages
│   └── lib/            # Template utilities
└── package.json        # Depends on shared packages
```

### Performance

Leverage Turborepo caching:

```bash
# First build - no cache
npm run build  # Takes full time

# Second build - cached
npm run build  # Nearly instant for unchanged packages
```

## Contributing

1. Follow existing code patterns
2. Use shared packages where applicable
3. Update documentation for new features
4. Add tests for new functionality
5. Run linting before committing

## Resources

- [Wix Headless Documentation](https://dev.wix.com/docs/go-headless)
- [Wix SDK Documentation](https://dev.wix.com/docs/sdk)
- [Community Discord](https://discord.gg/n6TBrSnYTp)
- [Turborepo Documentation](https://turbo.build/repo/docs)

## License

MIT License - See individual template directories for specific licenses.
