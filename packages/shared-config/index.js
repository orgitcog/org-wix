/**
 * Shared configuration for Wix Headless templates
 * Provides common settings across all templates and frameworks
 */

/**
 * Default Wix API configuration
 */
export const wixApiConfig = {
  apiBaseUrl: 'https://www.wixapis.com',
  authEndpoint: 'https://www.wix.com/oauth/authorize',
  tokenEndpoint: 'https://www.wix.com/oauth/access_token',
};

/**
 * Common environment variable names
 */
export const envVars = {
  WIX_CLIENT_ID: 'NEXT_PUBLIC_WIX_CLIENT_ID',
  WIX_CLIENT_SECRET: 'WIX_CLIENT_SECRET',
  WIX_REFRESH_TOKEN: 'WIX_REFRESH_TOKEN',
  WIX_SITE_ID: 'NEXT_PUBLIC_WIX_SITE_ID',
};

/**
 * Template framework types
 */
export const frameworks = {
  NEXTJS: 'nextjs',
  ASTRO: 'astro',
  REACT_NATIVE: 'react-native',
};

/**
 * Wix business solutions
 */
export const wixSolutions = {
  CMS: 'cms',
  BLOG: 'blog',
  STORES: 'stores',
  BOOKINGS: 'bookings',
  EVENTS: 'events',
  MEMBERS: 'members',
  PRICING_PLANS: 'pricing-plans',
  MEDIA: 'media',
};

/**
 * Get configuration for a specific framework
 * @param {string} framework - Framework name
 * @returns {object} Framework-specific configuration
 */
export function getFrameworkConfig(framework) {
  const configs = {
    [frameworks.NEXTJS]: {
      buildCommand: 'next build',
      devCommand: 'next dev',
      startCommand: 'next start',
      configFiles: ['next.config.js', 'next.config.mjs'],
    },
    [frameworks.ASTRO]: {
      buildCommand: 'astro build',
      devCommand: 'astro dev',
      startCommand: 'astro preview',
      configFiles: ['astro.config.mjs', 'astro.config.ts'],
    },
    [frameworks.REACT_NATIVE]: {
      buildCommand: 'expo build',
      devCommand: 'expo start',
      startCommand: 'expo start',
      configFiles: ['app.json', 'expo.config.js'],
    },
  };

  return configs[framework] || null;
}

export default {
  wixApiConfig,
  envVars,
  frameworks,
  wixSolutions,
  getFrameworkConfig,
};
