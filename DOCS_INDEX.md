# Documentation Index

Welcome to the Wix Headless Templates Monorepo documentation! This index will help you navigate through all available documentation.

## Quick Navigation

### 🚀 Getting Started
- **[README.md](./README.md)** - Start here! Overview and quick start guide
- **[INTEGRATION_SUMMARY.md](./INTEGRATION_SUMMARY.md)** - Executive summary of the integration

### 📚 Comprehensive Guides
- **[INTEGRATION_GUIDE.md](./INTEGRATION_GUIDE.md)** - Complete guide to using the monorepo
- **[ARCHITECTURE.md](./ARCHITECTURE.md)** - System design and technical details
- **[VISUAL_OVERVIEW.md](./VISUAL_OVERVIEW.md)** - Architecture diagrams and visualizations

### 🛠️ Development
- **[CONTRIBUTING.md](./CONTRIBUTING.md)** - How to contribute to the project
- **[CHANGELOG.md](./CHANGELOG.md)** - Release notes and version history

### 📦 Package Documentation
- **[packages/README.md](./packages/README.md)** - Overview of shared packages
- **[packages/shared-config/README.md](./packages/shared-config/README.md)** - Configuration package
- **[packages/shared-utils/README.md](./packages/shared-utils/README.md)** - Utilities package
- **[packages/wix-sdk-wrapper/README.md](./packages/wix-sdk-wrapper/README.md)** - SDK wrapper package
- **[packages/cli/README.md](./packages/cli/README.md)** - CLI tool documentation

## By Topic

### For First-Time Users

1. Start with [README.md](./README.md) for an overview
2. Read [INTEGRATION_GUIDE.md](./INTEGRATION_GUIDE.md) for detailed instructions
3. Explore templates in `nextjs/`, `astro/`, or `react-native/` directories
4. Use the CLI: `npx wix-templates list`

### For Developers

1. Review [CONTRIBUTING.md](./CONTRIBUTING.md) for development workflow
2. Understand [ARCHITECTURE.md](./ARCHITECTURE.md) for system design
3. Check [packages/README.md](./packages/README.md) for shared packages
4. Follow patterns from existing templates

### For Architects

1. Study [ARCHITECTURE.md](./ARCHITECTURE.md) for system design
2. Review [VISUAL_OVERVIEW.md](./VISUAL_OVERVIEW.md) for diagrams
3. Check [INTEGRATION_SUMMARY.md](./INTEGRATION_SUMMARY.md) for high-level summary
4. Explore [CHANGELOG.md](./CHANGELOG.md) for implementation details

### For Template Users

1. Browse [README.md](./README.md) template table
2. Use CLI to find templates: `npx wix-templates list`
3. Navigate to specific template directories
4. Follow template-specific README files

## Documentation Structure

```
Documentation Root
│
├── Core Documentation
│   ├── README.md                    # Main entry point
│   ├── INTEGRATION_GUIDE.md        # Complete usage guide
│   ├── ARCHITECTURE.md             # Technical architecture
│   ├── CONTRIBUTING.md             # Development guidelines
│   ├── CHANGELOG.md                # Version history
│   ├── VISUAL_OVERVIEW.md          # Visual diagrams
│   └── INTEGRATION_SUMMARY.md      # Executive summary
│
├── Package Documentation
│   └── packages/
│       ├── README.md               # Package overview
│       ├── shared-config/
│       │   └── README.md          # Config package docs
│       ├── shared-utils/
│       │   └── README.md          # Utils package docs
│       ├── wix-sdk-wrapper/
│       │   └── README.md          # SDK wrapper docs
│       └── cli/
│           └── README.md          # CLI tool docs
│
└── Template Documentation
    ├── nextjs/*/README.md         # Next.js template docs
    ├── astro/*/README.md          # Astro template docs
    └── react-native/*/README.md   # React Native docs
```

## Key Documentation Files

### README.md
**Purpose**: Main entry point and quick start  
**Audience**: Everyone  
**Length**: ~4KB  
**Contents**:
- Overview
- Quick start
- Template catalog
- CLI usage
- Resource links

### INTEGRATION_GUIDE.md
**Purpose**: Comprehensive integration guide  
**Audience**: Developers and users  
**Length**: ~9.5KB  
**Contents**:
- Architecture overview
- Getting started
- Shared packages
- Templates
- Development workflow
- Best practices

### ARCHITECTURE.md
**Purpose**: Technical architecture documentation  
**Audience**: Architects and senior developers  
**Length**: ~8.3KB  
**Contents**:
- System architecture
- Component diagrams
- Data flow
- Build pipeline
- Security
- Performance
- Future roadmap

### CONTRIBUTING.md
**Purpose**: Contribution guidelines  
**Audience**: Contributors  
**Length**: ~7.3KB  
**Contents**:
- Development workflow
- Code style
- Testing
- Pull requests
- Common tasks

### VISUAL_OVERVIEW.md
**Purpose**: Visual architecture documentation  
**Audience**: Everyone  
**Length**: ~8.6KB  
**Contents**:
- Architecture diagrams
- Data flow visualizations
- Dependency graphs
- Coverage matrices
- Build pipeline

### INTEGRATION_SUMMARY.md
**Purpose**: Executive summary  
**Audience**: Stakeholders and managers  
**Length**: ~8.4KB  
**Contents**:
- What was accomplished
- Technical specifications
- Key benefits
- Usage examples
- Success metrics

## Finding Information

### How do I...

#### ...get started?
→ [README.md](./README.md) Quick Start section

#### ...understand the architecture?
→ [ARCHITECTURE.md](./ARCHITECTURE.md) or [VISUAL_OVERVIEW.md](./VISUAL_OVERVIEW.md)

#### ...use shared packages?
→ [INTEGRATION_GUIDE.md](./INTEGRATION_GUIDE.md) Shared Packages section

#### ...find a template?
→ CLI: `npx wix-templates list` or [README.md](./README.md) Templates table

#### ...contribute?
→ [CONTRIBUTING.md](./CONTRIBUTING.md)

#### ...see what's new?
→ [CHANGELOG.md](./CHANGELOG.md)

#### ...understand the integration?
→ [INTEGRATION_SUMMARY.md](./INTEGRATION_SUMMARY.md)

## Documentation Standards

All documentation in this repository follows these standards:

- **Markdown format** for easy reading and versioning
- **Clear headings** for easy navigation
- **Code examples** for practical understanding
- **Diagrams** where helpful (text-based ASCII art)
- **Links** to related documentation
- **Table of contents** for longer documents

## External Resources

### Wix Documentation
- [Wix Headless Documentation](https://dev.wix.com/docs/go-headless)
- [Wix SDK Documentation](https://dev.wix.com/docs/sdk)
- [Wix API Reference](https://dev.wix.com/api)

### Community
- [Discord Community](https://discord.gg/n6TBrSnYTp)
- [GitHub Discussions](https://github.com/wix/headless-templates/discussions)

### Tools
- [Turborepo Documentation](https://turbo.build/repo/docs)
- [npm Workspaces](https://docs.npmjs.com/cli/workspaces)

## Keeping Documentation Updated

When making changes to the codebase:

1. **Update relevant docs** - Keep documentation in sync with code
2. **Add examples** - Include code examples for new features
3. **Update CHANGELOG** - Document all changes
4. **Review this index** - Update if adding new documentation

## Need Help?

If you can't find what you're looking for:

1. Check this documentation index
2. Use CLI help: `npx wix-templates --help`
3. Search the repository
4. Ask on [Discord](https://discord.gg/n6TBrSnYTp)
5. Open a [GitHub Discussion](https://github.com/wix/headless-templates/discussions)

## Contributing to Documentation

Documentation improvements are always welcome! See [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines on:

- Adding new documentation
- Improving existing docs
- Fixing typos and errors
- Adding examples

---

**Last Updated**: 2026-01-05  
**Version**: 1.0.0
