#!/usr/bin/env node

/**
 * Sync shared dependencies across all templates
 */

import { readdir, readFile, writeFile } from 'fs/promises';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');

const frameworks = ['nextjs', 'astro', 'react-native'];

/**
 * Shared dependencies that should be consistent across templates
 */
const sharedDeps = {
  nextjs: {
    '@wix/sdk': '^1.15.23',
  },
  astro: {
    '@wix/astro': '^2.13.0',
    '@wix/dashboard': '^1.3.36',
    '@wix/essentials': '^0.1.23',
    '@wix/sdk': '^1.15.23',
  },
};

async function syncTemplates() {
  console.log('\n🔄 Syncing template dependencies...\n');
  
  let updatedCount = 0;

  for (const framework of frameworks) {
    const frameworkDir = join(rootDir, framework);
    
    try {
      const templates = await readdir(frameworkDir, { withFileTypes: true });
      const templateDirs = templates.filter(dirent => dirent.isDirectory());
      
      console.log(`\n📦 Syncing ${framework} templates...`);
      
      for (const template of templateDirs) {
        const packageJsonPath = join(frameworkDir, template.name, 'package.json');
        
        try {
          const packageJson = JSON.parse(await readFile(packageJsonPath, 'utf-8'));
          let updated = false;

          // Check if shared dependencies need updating
          const frameworkSharedDeps = sharedDeps[framework] || {};
          
          for (const [dep, version] of Object.entries(frameworkSharedDeps)) {
            if (packageJson.dependencies?.[dep] && packageJson.dependencies[dep] !== version) {
              console.log(`   ⚠️  ${template.name}: Updating ${dep} to ${version}`);
              packageJson.dependencies[dep] = version;
              updated = true;
            }
          }

          if (updated) {
            await writeFile(packageJsonPath, JSON.stringify(packageJson, null, 2) + '\n');
            updatedCount++;
            console.log(`   ✅ ${template.name}: Updated`);
          } else {
            console.log(`   ✓ ${template.name}: Up to date`);
          }
        } catch (error) {
          console.log(`   ⚠️  ${template.name}: No package.json found`);
        }
      }
    } catch (error) {
      console.log(`\n⚠️  ${framework}: No templates found`);
    }
  }

  console.log(`\n✅ Sync complete. Updated ${updatedCount} templates.\n`);
}

syncTemplates().catch(console.error);
