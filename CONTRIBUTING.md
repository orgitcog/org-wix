# Contributing to Wix Headless Templates

Thank you for your interest in contributing to the Wix Headless Templates monorepo! This guide will help you get started.

## Table of Contents

1. [Code of Conduct](#code-of-conduct)
2. [Getting Started](#getting-started)
3. [Development Workflow](#development-workflow)
4. [Project Structure](#project-structure)
5. [Making Changes](#making-changes)
6. [Testing](#testing)
7. [Submitting Changes](#submitting-changes)
8. [Style Guidelines](#style-guidelines)

## Code of Conduct

Please be respectful and constructive in all interactions. We aim to maintain a welcoming and inclusive community.

## Getting Started

### Prerequisites

- Node.js >= 18.0.0
- npm >= 10.0.0
- Git

### Setup

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/YOUR_USERNAME/headless-templates.git
   cd headless-templates
   ```
3. Add upstream remote:
   ```bash
   git remote add upstream https://github.com/wix/headless-templates.git
   ```
4. Install dependencies:
   ```bash
   npm install
   ```

## Development Workflow

### 1. Create a Branch

```bash
git checkout -b feature/your-feature-name
```

Branch naming conventions:
- `feature/` - New features
- `fix/` - Bug fixes
- `docs/` - Documentation changes
- `refactor/` - Code refactoring
- `test/` - Test additions or modifications

### 2. Make Your Changes

Follow the guidelines in this document and make your changes.

### 3. Test Your Changes

```bash
# Run tests
npm run test

# Lint code
npm run lint

# Build to check for errors
npm run build
```

### 4. Commit Your Changes

Use clear and descriptive commit messages:

```bash
git add .
git commit -m "feat: add new utility function for date formatting"
```

Commit message format:
- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc.)
- `refactor:` - Code refactoring
- `test:` - Test changes
- `chore:` - Build process or auxiliary tool changes

### 5. Push and Create Pull Request

```bash
git push origin feature/your-feature-name
```

Then create a pull request on GitHub.

## Project Structure

```
wix-headless-monorepo/
├── packages/              # Shared packages
│   ├── shared-config/    # Configuration
│   ├── shared-utils/     # Utilities
│   ├── wix-sdk-wrapper/  # SDK wrapper
│   └── cli/              # CLI tool
├── nextjs/               # Next.js templates
├── astro/                # Astro templates
├── react-native/         # React Native templates
├── scripts/              # Build scripts
└── docs/                 # Documentation
```

## Making Changes

### Adding a Shared Utility

1. Add function to appropriate package (e.g., `packages/shared-utils/index.js`)
2. Export the function
3. Add JSDoc comments
4. Update tests
5. Update documentation

Example:

```javascript
/**
 * Format a phone number
 * @param {string} phone - Phone number to format
 * @returns {string} Formatted phone number
 */
export function formatPhone(phone) {
  // Implementation
}
```

### Adding a New Template

1. Create directory in appropriate framework folder:
   ```bash
   mkdir nextjs/my-new-template
   ```

2. Add `package.json`:
   ```json
   {
     "name": "my-new-template",
     "version": "1.0.0",
     "dependencies": {
       "@wix-templates/shared-config": "*",
       "@wix-templates/shared-utils": "*"
     }
   }
   ```

3. Add README.md with setup instructions

4. Update main README.md template table

5. Update CLI template list

### Modifying SDK Wrapper

1. Edit `packages/wix-sdk-wrapper/index.js`
2. Add methods to appropriate wrapper class
3. Ensure consistent error handling
4. Update documentation
5. Test with actual Wix SDK

### Updating Documentation

1. Keep docs up-to-date with code changes
2. Use clear, concise language
3. Include code examples
4. Add links to relevant resources

## Testing

### Running Tests

```bash
# All tests
npm run test

# Specific template
cd nextjs/minimal-examples
npm run test

# Watch mode
npm run test -- --watch
```

### Writing Tests

- Place tests near the code they test
- Use descriptive test names
- Cover edge cases
- Mock external dependencies

Example:

```javascript
import { formatCurrency } from '../index.js';

describe('formatCurrency', () => {
  it('should format USD correctly', () => {
    expect(formatCurrency(99.99, 'USD')).toBe('$99.99');
  });

  it('should handle zero values', () => {
    expect(formatCurrency(0, 'USD')).toBe('$0.00');
  });
});
```

## Submitting Changes

### Pull Request Guidelines

1. **Title**: Clear and descriptive
   - Good: "feat: add phone number formatting utility"
   - Bad: "update files"

2. **Description**: Include:
   - What changes were made
   - Why they were made
   - How to test them
   - Related issues (if any)

3. **Review Checklist**:
   - [ ] Tests pass
   - [ ] Code is linted
   - [ ] Documentation updated
   - [ ] No merge conflicts
   - [ ] Follows style guidelines

### Review Process

1. Automated checks run (tests, lint, build)
2. Maintainer reviews code
3. Address feedback
4. Merge when approved

## Style Guidelines

### JavaScript/TypeScript

- Use ES6+ features
- Prefer `const` over `let`
- Use arrow functions for callbacks
- Add JSDoc comments for functions
- Use meaningful variable names

### Code Formatting

We use Prettier for code formatting:

```bash
npm run format
```

Configuration is in `.prettierrc`.

### File Naming

- Use kebab-case: `my-component.js`
- Use extensions: `.js`, `.jsx`, `.ts`, `.tsx`
- Match component name to file name

### Documentation

- Use Markdown for documentation
- Include code examples
- Keep it up-to-date
- Use clear, simple language

### Commit Messages

Follow conventional commits:

```
<type>(<scope>): <subject>

<body>

<footer>
```

Example:

```
feat(shared-utils): add phone formatting function

Add formatPhone utility to handle US and international phone numbers.
Includes validation and formatting for multiple formats.

Closes #123
```

## Common Tasks

### Adding a New Wix Solution Wrapper

1. Edit `packages/wix-sdk-wrapper/index.js`
2. Create new wrapper class:
   ```javascript
   export class NewSolutionWrapper extends WixSdkWrapper {
     async getSomething() {
       this._ensureInitialized();
       try {
         return await this.client.newSolution.get();
       } catch (error) {
         this._handleError(error, 'NewSolution.getSomething');
       }
     }
   }
   ```
3. Add to UnifiedWixClient
4. Update documentation

### Updating Shared Configuration

1. Edit `packages/shared-config/index.js`
2. Add new constants or configuration
3. Export from index
4. Update TypeScript types if applicable
5. Update documentation

### Syncing Template Dependencies

```bash
npm run templates:sync
```

This updates shared dependencies across all templates.

## Getting Help

- **Discord**: [Join our community](https://discord.gg/n6TBrSnYTp)
- **Issues**: [GitHub Issues](https://github.com/wix/headless-templates/issues)
- **Documentation**: [Wix Headless Docs](https://dev.wix.com/docs/go-headless)

## Recognition

Contributors are recognized in:
- GitHub contributors list
- Release notes for significant contributions

Thank you for contributing to Wix Headless Templates! 🎉
