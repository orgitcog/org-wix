#!/usr/bin/env node

/**
 * Wix Headless Templates CLI
 * Command-line interface for managing Wix Headless templates
 */

import { Command } from 'commander';
import { frameworks, wixSolutions } from '@wix-templates/shared-config';

const program = new Command();

program
  .name('wix-templates')
  .description('CLI tool for managing Wix Headless templates')
  .version('1.0.0');

/**
 * List command - Show all available templates
 */
program
  .command('list')
  .description('List all available templates')
  .option('-f, --framework <framework>', 'Filter by framework (nextjs, astro, react-native)')
  .option('-s, --solution <solution>', 'Filter by Wix solution')
  .action((options) => {
    console.log('Available Wix Headless Templates:\n');
    
    const templates = {
      nextjs: [
        { name: 'minimal-examples', solutions: ['stores', 'bookings', 'events'] },
        { name: 'appointments-subscriptions', solutions: ['bookings', 'members'] },
        { name: 'classes-subscriptions', solutions: ['bookings', 'members'] },
        { name: 'cms-education', solutions: ['cms'] },
        { name: 'commerce-ticketing', solutions: ['events', 'members'] },
        { name: 'commerce', solutions: ['stores'] },
        { name: 'external-identity-provider', solutions: ['members'] },
      ],
      astro: [
        { name: 'astrowind', solutions: ['cms', 'blog', 'pricing-plans'] },
        { name: 'blank', solutions: ['cms'] },
        { name: 'blog', solutions: ['blog'] },
        { name: 'commerce', solutions: ['stores'] },
        { name: 'media-manager', solutions: ['media'] },
        { name: 'registration', solutions: ['members'] },
        { name: 'scheduler', solutions: ['bookings'] },
      ],
      'react-native': [
        { name: 'mobile-ecommerce', solutions: ['stores', 'members'] },
      ],
    };

    Object.entries(templates).forEach(([framework, items]) => {
      if (options.framework && options.framework !== framework) return;
      
      console.log(`\n📦 ${framework.toUpperCase()}:`);
      items.forEach(template => {
        if (options.solution && !template.solutions.includes(options.solution)) return;
        console.log(`  • ${template.name}`);
        console.log(`    Solutions: ${template.solutions.join(', ')}`);
      });
    });
    
    console.log('\n');
  });

/**
 * Info command - Show information about a specific template
 */
program
  .command('info')
  .description('Show information about a template')
  .argument('<template>', 'Template name')
  .action((template) => {
    console.log(`\nInformation for template: ${template}\n`);
    console.log('For detailed information, see the template README in the repository.');
    console.log('');
  });

/**
 * Init command - Initialize a new project from a template
 */
program
  .command('init')
  .description('Initialize a new project from a template')
  .argument('<template>', 'Template name')
  .argument('[directory]', 'Project directory', '.')
  .action((template, directory) => {
    console.log(`\nInitializing new project from template: ${template}`);
    console.log(`Directory: ${directory}\n`);
    console.log('This command would copy the template to the specified directory.');
    console.log('Please use the Wix CLI for now: https://dev.wix.com/docs/go-headless');
    console.log('');
  });

/**
 * Update command - Update templates with latest changes
 */
program
  .command('update')
  .description('Update templates with latest changes')
  .option('-a, --all', 'Update all templates')
  .option('-t, --template <template>', 'Update specific template')
  .action((options) => {
    if (options.all) {
      console.log('\nUpdating all templates...');
    } else if (options.template) {
      console.log(`\nUpdating template: ${options.template}...`);
    } else {
      console.log('\nPlease specify --all or --template <name>');
    }
    console.log('');
  });

/**
 * Solutions command - Show available Wix solutions
 */
program
  .command('solutions')
  .description('List all Wix business solutions')
  .action(() => {
    console.log('\nAvailable Wix Business Solutions:\n');
    Object.entries(wixSolutions).forEach(([key, value]) => {
      console.log(`  • ${key}: ${value}`);
    });
    console.log('\n');
  });

/**
 * Frameworks command - Show supported frameworks
 */
program
  .command('frameworks')
  .description('List supported frameworks')
  .action(() => {
    console.log('\nSupported Frameworks:\n');
    Object.entries(frameworks).forEach(([key, value]) => {
      console.log(`  • ${key}: ${value}`);
    });
    console.log('\n');
  });

program.parse();
