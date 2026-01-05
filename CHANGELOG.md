# Changelog

All notable changes to the Wix Headless Templates monorepo will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2026-01-05

### Added - Comprehensive Integration

This release marks the comprehensive integration of all Wix Headless templates into a unified monorepo.

#### Infrastructure
- **Monorepo Architecture**: Implemented Turborepo for efficient build management
- **Workspace Management**: Added npm workspaces for all templates and packages
- **Build System**: Configured Turborepo with caching and parallel execution
- **Package Manager**: Standardized on npm with version 10.2.4

#### Shared Packages

##### @wix-templates/shared-config (v1.0.0)
- Common configuration for Wix API endpoints
- Environment variable name standards
- Framework definitions (Next.js, Astro, React Native)
- Business solution constants (CMS, Stores, Bookings, Events, Members, etc.)
- Framework-specific configuration getter

##### @wix-templates/shared-utils (v1.0.0)
- Date formatting utilities (`formatDate`)
- Currency formatting utilities (`formatCurrency`)
- Credential validation (`validateWixCredentials`)
- API URL builder (`buildWixApiUrl`)
- Safe JSON parsing (`safeJsonParse`)
- Debounce function (`debounce`)
- Unique ID generation (`generateUniqueId`)
- Server-side detection (`isServer`)
- URL slug generator (`slugify`)
- Error message extraction (`getErrorMessage`)

##### @wix-templates/wix-sdk-wrapper (v1.0.0)
- Unified SDK wrapper for all Wix business solutions
- CMS wrapper with data collection methods
- Stores wrapper for e-commerce operations
- Bookings wrapper for appointments and classes
- Events wrapper for ticketing and registration
- Members wrapper for authentication
- Consistent error handling across all wrappers
- Initialization helper (`UnifiedWixClient.init()`)

##### @wix-templates/cli (v1.0.0)
- Command-line interface for template management
- Template listing with filtering (`list`)
- Solution catalog (`solutions`)
- Framework catalog (`frameworks`)
- Template information display (`info`)
- Foundation for future features (init, update)

#### Scripts
- **list-templates.js**: Catalog all templates across frameworks
- **sync-templates.js**: Synchronize shared dependencies across templates

#### Documentation
- **INTEGRATION_GUIDE.md**: Comprehensive guide to using the monorepo
  - Architecture overview
  - Getting started instructions
  - Shared packages documentation
  - Template catalog
  - Development workflow
  - Best practices
- **ARCHITECTURE.md**: System design and technical details
  - Component diagrams
  - Data flow documentation
  - Build and deployment pipeline
  - Security considerations
  - Performance optimizations
  - Future roadmap
- **CONTRIBUTING.md**: Contribution guidelines
  - Development workflow
  - Code style guidelines
  - Testing requirements
  - Pull request process
- **Package READMEs**: Detailed documentation for each shared package
  - API references
  - Usage examples
  - Configuration options

#### Repository Updates
- Enhanced main README with integration information
- Added quick start guide
- Documented CLI usage
- Updated resource links
- Added repository structure diagram

#### Templates Included

**Next.js Templates (7)**
- minimal-examples
- appointments-subscriptions
- classes-subscriptions
- cms-education
- commerce-ticketing
- commerce
- external-identity-provider

**Astro Templates (7)**
- astrowind
- blank
- blog
- commerce
- media-manager
- registration
- scheduler

**React Native Templates (1)**
- mobile-ecommerce

### Changed
- Root package.json converted to monorepo configuration
- Added module type specification for ES modules
- Updated workspace configuration to include packages/*
- Enhanced with comprehensive npm scripts

### Technical Details

#### Package Structure
```
packages/
├── shared-config/      # Configuration constants
├── shared-utils/       # Utility functions
├── wix-sdk-wrapper/    # SDK abstraction layer
└── cli/                # Command-line tool
```

#### Build System
- Turborepo configuration with pipeline definitions
- Parallel builds for templates
- Incremental builds with caching
- Workspace-aware dependency resolution

#### Developer Experience
- Unified development commands (`npm run dev`)
- Consistent build process (`npm run build`)
- Template discovery tools (`npm run templates:list`)
- CLI for template management (`npx wix-templates`)

### Developer Benefits

1. **Consistency**: All templates follow the same patterns and use shared utilities
2. **Efficiency**: Turborepo caching speeds up builds significantly
3. **Maintainability**: Updates to shared code propagate automatically
4. **Documentation**: Comprehensive guides for integration and contribution
5. **Tooling**: CLI and scripts simplify template management

### Breaking Changes
None - This is the initial comprehensive integration release.

### Migration Guide
For existing users of individual templates, no migration is required. Templates remain backward compatible and can still be used independently.

### Future Roadmap

#### Phase 2 (Planned)
- Advanced template composition
- Plugin system architecture
- Shared component library
- Visual template builder

#### Phase 3 (Future)
- AI-powered template generation
- Real-time collaboration features
- Advanced analytics integration
- Multi-tenant support

### Credits
This comprehensive integration brings together all Wix Headless templates and provides a unified development experience for the community.

### Resources
- [Wix Headless Documentation](https://dev.wix.com/docs/go-headless)
- [Wix SDK Documentation](https://dev.wix.com/docs/sdk)
- [Community Discord](https://discord.gg/n6TBrSnYTp)
- [Turborepo Documentation](https://turbo.build/repo/docs)

---

## [0.9.0] - Pre-Integration

Previous versions contained individual templates without comprehensive integration.

[1.0.0]: https://github.com/wix/headless-templates/releases/tag/v1.0.0
[0.9.0]: https://github.com/wix/headless-templates/releases/tag/v0.9.0
