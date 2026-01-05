# Wix Headless Templates CLI

Command-line interface for managing Wix Headless templates.

## Installation

This package is part of the Wix Headless Templates monorepo and is automatically available when you install the repository.

## Usage

```bash
npx wix-templates <command> [options]
```

## Commands

### `list`

List all available templates.

```bash
# List all templates
npx wix-templates list

# Filter by framework
npx wix-templates list --framework nextjs
npx wix-templates list --framework astro
npx wix-templates list --framework react-native

# Filter by solution
npx wix-templates list --solution stores
npx wix-templates list --solution bookings
```

**Options:**
- `-f, --framework <framework>` - Filter by framework (nextjs, astro, react-native)
- `-s, --solution <solution>` - Filter by Wix solution

**Example output:**
```
Available Wix Headless Templates:

📦 NEXTJS (7 templates):
  • minimal-examples
    Solutions: stores, bookings, events
  • appointments-subscriptions
    Solutions: bookings, members
  ...

📦 ASTRO (7 templates):
  • astrowind
    Solutions: cms, blog, pricing-plans
  ...
```

### `info`

Show information about a specific template.

```bash
npx wix-templates info minimal-examples
```

**Arguments:**
- `<template>` - Template name

### `init`

Initialize a new project from a template (planned feature).

```bash
npx wix-templates init <template> [directory]
```

**Arguments:**
- `<template>` - Template name
- `[directory]` - Project directory (default: current directory)

**Note:** Currently redirects to Wix CLI. Use the official Wix CLI for project initialization:
```bash
npm create @wix/headless@latest
```

### `update`

Update templates with latest changes (planned feature).

```bash
# Update all templates
npx wix-templates update --all

# Update specific template
npx wix-templates update --template minimal-examples
```

**Options:**
- `-a, --all` - Update all templates
- `-t, --template <template>` - Update specific template

### `solutions`

List all available Wix business solutions.

```bash
npx wix-templates solutions
```

**Example output:**
```
Available Wix Business Solutions:

  • CMS: cms
  • BLOG: blog
  • STORES: stores
  • BOOKINGS: bookings
  • EVENTS: events
  • MEMBERS: members
  • PRICING_PLANS: pricing-plans
  • MEDIA: media
```

### `frameworks`

List all supported frameworks.

```bash
npx wix-templates frameworks
```

**Example output:**
```
Supported Frameworks:

  • NEXTJS: nextjs
  • ASTRO: astro
  • REACT_NATIVE: react-native
```

## Global Options

### `--help`

Show help for a command.

```bash
npx wix-templates --help
npx wix-templates list --help
```

### `--version`

Show CLI version.

```bash
npx wix-templates --version
```

## Examples

### Find E-commerce Templates

```bash
# List all e-commerce (stores) templates
npx wix-templates list --solution stores
```

### Find Next.js Templates

```bash
# List all Next.js templates
npx wix-templates list --framework nextjs
```

### Get Template Information

```bash
# Show info about a specific template
npx wix-templates info commerce
```

### See Available Solutions

```bash
# List what Wix solutions are available
npx wix-templates solutions
```

## Development

### Adding a New Command

1. Edit `packages/cli/bin/cli.js`
2. Add command using Commander.js:

```javascript
program
  .command('mycommand')
  .description('My command description')
  .option('-o, --option <value>', 'Option description')
  .action((options) => {
    // Implementation
  });
```

### Testing the CLI

```bash
# From repository root
cd packages/cli
node bin/cli.js list
```

## Troubleshooting

### Command Not Found

If you get "command not found", ensure you're in the repository root and dependencies are installed:

```bash
npm install
npx wix-templates --help
```

### Permission Issues

On Unix-based systems, ensure the CLI file is executable:

```bash
chmod +x packages/cli/bin/cli.js
```

## Future Features

Planned features for future releases:

- ✅ Template listing and filtering
- ✅ Solution and framework information
- ⏳ Project scaffolding from templates
- ⏳ Template updates and synchronization
- ⏳ Interactive template selection
- ⏳ Configuration validation
- ⏳ Dependency checking

## Contributing

See [CONTRIBUTING.md](../../CONTRIBUTING.md) for guidelines on contributing to the CLI.

## License

MIT
