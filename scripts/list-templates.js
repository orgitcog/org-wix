#!/usr/bin/env node

/**
 * List all available templates in the monorepo
 */

import { readdir } from 'fs/promises';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');

const frameworks = ['nextjs', 'astro', 'react-native'];

async function listTemplates() {
  console.log('\n🎨 Wix Headless Templates Catalog\n');
  console.log('='.repeat(50));
  
  let totalCount = 0;

  for (const framework of frameworks) {
    const frameworkDir = join(rootDir, framework);
    
    try {
      const templates = await readdir(frameworkDir, { withFileTypes: true });
      const templateDirs = templates.filter(dirent => dirent.isDirectory());
      
      if (templateDirs.length > 0) {
        console.log(`\n📦 ${framework.toUpperCase()} (${templateDirs.length} templates):`);
        
        for (const template of templateDirs) {
          console.log(`   • ${template.name}`);
          totalCount++;
        }
      }
    } catch (error) {
      console.log(`\n⚠️  ${framework}: No templates found`);
    }
  }

  console.log('\n' + '='.repeat(50));
  console.log(`\n✅ Total: ${totalCount} templates across ${frameworks.length} frameworks\n`);
}

listTemplates().catch(console.error);
