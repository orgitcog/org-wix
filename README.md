<h1 align="center">Wix Headless Templates - Comprehensive Integration</h1>

> Join the Wix Headless community on [Discord](https://discord.gg/n6TBrSnYTp)! 🚀

Welcome to the **Wix Headless Templates Monorepo** - a comprehensive integration of all Wix Headless templates across multiple frameworks! This repository contains 16+ production-ready templates, shared packages, and a unified CLI for building headless websites with Wix.

## 🎯 What's New: Comprehensive Integration

This monorepo now features:

- **🏗️ Monorepo Architecture**: Managed with Turborepo for optimal build performance
- **📦 Shared Packages**: Reusable configuration, utilities, and SDK wrappers
- **🛠️ CLI Tool**: Command-line interface for template management
- **📚 Comprehensive Documentation**: Integration guides and architecture docs
- **🔄 Unified Development**: Build, test, and deploy all templates together

## 🚀 Quick Start

### Installation

```bash
# Clone the repository
git clone https://github.com/wix/headless-templates.git
cd headless-templates

# Install all dependencies
npm install

# List all available templates
npm run templates:list

# Build all templates
npm run build
```

### Using the CLI

```bash
# List templates by framework
npx wix-templates list --framework nextjs

# Show available Wix solutions
npx wix-templates solutions

# Get help
npx wix-templates --help
```

## 📦 Repository Structure

```
wix-headless-monorepo/
├── packages/                    # Shared packages
│   ├── shared-config/          # Common configuration
│   ├── shared-utils/           # Utility functions
│   ├── wix-sdk-wrapper/        # Unified SDK wrapper
│   └── cli/                    # CLI tool
├── nextjs/                     # Next.js templates (7)
├── astro/                      # Astro templates (7)
├── react-native/               # React Native templates (1)
└── scripts/                    # Management scripts
```

## 📖 Documentation

- **[Integration Guide](./INTEGRATION_GUIDE.md)**: Complete guide to using the monorepo
- **[Architecture](./ARCHITECTURE.md)**: System design and technical details
- **[Template READMEs](./nextjs/)**: Individual template documentation

## 🎨 What is Wix Headless?

Wix Headless allows you to leverage Wix's powerful business solutions and APIs to manage content, bookings, stores, and more, while using your preferred front-end technology. By decoupling the backend from the frontend, you can create highly customizable and performant websites.

### Available Business Solutions

- **Content Management System (CMS)**: Manage and organize your website content
- **Wix Bookings**: Handle appointments, classes, and subscriptions
- **Wix Stores**: Manage products, orders, and inventory
- **Wix Events**: Organize events, ticketing, and attendee registration
- **Wix Members**: User authentication and management
- **Wix Blog**: Blog post management and publishing
- **Wix Pricing Plans**: Subscription and pricing management
- **Wix Media**: Media library and asset management

## 💡 Shared Packages

### @wix-templates/shared-config

Common configuration for API endpoints, environment variables, and constants.

```javascript
import { wixApiConfig, frameworks } from '@wix-templates/shared-config';
```

### @wix-templates/shared-utils

Utility functions for formatting, validation, and common operations.

```javascript
import { formatDate, formatCurrency, slugify } from '@wix-templates/shared-utils';
```

### @wix-templates/wix-sdk-wrapper

Unified SDK wrapper for all Wix business solutions with consistent error handling.

```javascript
import UnifiedWixClient from '@wix-templates/wix-sdk-wrapper';
const wixClient = UnifiedWixClient.init(myWixClient);
const products = await wixClient.stores.getProducts();
```

## 🛠️ Development Commands

```bash
# Run development servers for all templates
npm run dev

# Build all templates (with Turborepo caching)
npm run build

# Run all tests
npm run test

# Lint all code
npm run lint

# Format all code
npm run format

# Clean build artifacts
npm run clean

# List all templates
npm run templates:list

# Sync template dependencies
npm run templates:sync
```

## 🎯 Working with Templates

### Navigate to a Template

```bash
# Next.js template
cd nextjs/minimal-examples
npm run dev

# Astro template
cd astro/blog
npm run dev

# React Native template
cd react-native/mobile-ecommerce
npm start
```

### Using Shared Packages in Templates

All templates can import shared packages:

```javascript
// Import shared configuration
import { wixApiConfig } from '@wix-templates/shared-config';

// Import shared utilities
import { formatCurrency, slugify } from '@wix-templates/shared-utils';

// Import unified SDK wrapper
import UnifiedWixClient from '@wix-templates/wix-sdk-wrapper';
```

## Resources

Here are some useful links for getting started with Wix Headless and the available templates:

- [Wix Headless Documentation](https://dev.wix.com/docs/go-headless)
- [Wix SDK Documentation](https://dev.wix.com/docs/sdk)
- [Wix Headless Templates Page](https://www.wix.com/studio/developers/headless/templates)
- [Community on Discord](https://discord.gg/n6TBrSnYTp)

## Templates

<table>
  <thead>
    <tr>
      <th>Template</th>
      <th>Description</th>
      <th>Live Demo</th>
      <th>Wix Apps Used</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="4" align="center"><strong>Astro</strong></td>
    </tr>
    <tr>
      <td colspan="4" align="center"><a href="./astro/">Getting Started with Wix Astro templates</a></td>
      </tr>
    <tr>
      <td><a href="https://github.com/wix/headless-templates/tree/main/astro/astrowind">AstroWind</a></td>
      <td>Integrates Astro with Tailwind CSS, providing advanced slot usage and dark mode configuration.</td>
      <td></td>
      <td>CMS, Wix Blog, Wix Pricing Plans</td>
    </tr>
    <tr>
      <td><a href="https://github.com/wix/headless-templates/tree/main/astro/blog">Blog</a></td>
      <td>Combines the official Astro Blog template with Wix Headless for seamless content management and high-performance static site using Astro.</td>
      <td></td>
      <td>Wix Blog</td>
    </tr>
    <tr>
      <td><a href="https://github.com/wix/headless-templates/tree/main/astro/commerce">Commerce</a></td>
      <td>A template for creating e-commerce sites using Astro and Wix Headless.</td>
      <td></td>
      <td>Wix Stores</td>
    </tr>
    <tr>
      <td colspan="4" align="center"><strong>Next.js</strong></td>
    </tr>
    <tr>
      <td><a href="https://github.com/wix/headless-templates/tree/main/nextjs/minimal-examples">Minimal Examples</a></td>
      <td>Concise examples for Next.js projects integrated with Wix Headless.</td>
      <td><a href="https://wix-headless-example.vercel.app">Minimal Examples Demo</a></td>
      <td>Wix Stores, Wix Bookings, Wix Events</td>
    </tr>
    <tr>
      <td><a href="https://github.com/wix/headless-templates/tree/main/nextjs/appointments-subscriptions">Appointments Subscriptions</a></td>
      <td>A template for managing appointments and subscriptions using Next.js and Wix Headless.</td>
      <td><a href="https://netlify.bookings-appointments-demo.wix.dev">Appointments Subscriptions Demo</a></td>
      <td>Wix Bookings, Wix Members</td>
    </tr>
    <tr>
      <td><a href="https://github.com/wix/headless-templates/tree/main/nextjs/classes-subscriptions">Classes Subscriptions</a></td>
      <td>A template for managing class subscriptions using Next.js and Wix Headless.</td>
      <td><a href="https://netlify.bookings-classes-demo.wix.dev">Classes Subscriptions Demo</a></td>
      <td>Wix Bookings, Wix Members</td>
    </tr>
    <tr>
      <td><a href="https://github.com/wix/headless-templates/tree/main/nextjs/cms-education">CMS Education</a></td>
      <td>Uses Wix Headless to leverage the Wix CMS for managing content on an education site.</td>
      <td><a href="https://netlify.cms-demo.wix.dev/">CMS Education Demo</a></td>
      <td>CMS</td>
    </tr>
    <tr>
      <td><a href="https://github.com/wix/headless-templates/tree/main/nextjs/commerce-ticketing">Commerce Ticketing</a></td>
      <td>A template for an online store and event ticketing using Next.js and Wix Headless.</td>
      <td><a href="https://netlify.commerce-ticketing-demo.wix.dev/">Commerce Ticketing Demo</a></td>
      <td>Wix Events, Wix Members</td>
    </tr>
    <tr>
      <td><a href="https://github.com/wix/headless-templates/tree/main/nextjs/commerce">Next.js Commerce</a></td>
      <td>The <a href="https://github.com/vercel/commerce">Next.js Commerce</a> template with headless integration using Wix.</td>
      <td></td>
      <td>Wix Stores</td>
    </tr>
    <tr>
      <td><a href="https://github.com/wix/headless-templates/tree/main/nextjs/external-identity-provider">External Identity Provider</a></td>
      <td>A template for integrating external identity providers (e.g Github) using Next.js and Wix Headless.</td>
      <td></td>
      <td>Wix Members</td>
    </tr>
    <tr>
      <td colspan="4" align="center"><strong>React Native (Expo)</strong></td>
    </tr>
    <tr>
      <td><a href="https://github.com/wix/headless-templates/tree/main/react-native/mobile-ecommerce">Mobile E-commerce</a></td>
      <td>A template for creating mobile e-commerce applications using React Native and Wix Headless.</td>
      <td></td>
      <td>Wix Stores, Wix Members</td>
    </tr>
  </tbody>
</table>