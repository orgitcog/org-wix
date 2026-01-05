/**
 * Shared utilities for Wix Headless templates
 * Common helper functions used across all templates
 */

import { wixApiConfig } from '@wix-templates/shared-config';

/**
 * Format a date string for display
 * @param {string|Date} date - Date to format
 * @param {string} locale - Locale for formatting (default: 'en-US')
 * @returns {string} Formatted date string
 */
export function formatDate(date, locale = 'en-US') {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(dateObj);
}

/**
 * Format currency for display
 * @param {number} amount - Amount to format
 * @param {string} currency - Currency code (default: 'USD')
 * @param {string} locale - Locale for formatting (default: 'en-US')
 * @returns {string} Formatted currency string
 */
export function formatCurrency(amount, currency = 'USD', locale = 'en-US') {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  }).format(amount);
}

/**
 * Validate Wix client credentials
 * @param {object} credentials - Credentials object
 * @returns {boolean} True if credentials are valid
 */
export function validateWixCredentials(credentials) {
  const required = ['clientId', 'siteId'];
  return required.every(field => credentials[field] && credentials[field].length > 0);
}

/**
 * Build Wix API URL
 * @param {string} endpoint - API endpoint
 * @returns {string} Full API URL
 */
export function buildWixApiUrl(endpoint) {
  const baseUrl = wixApiConfig.apiBaseUrl;
  return `${baseUrl}${endpoint.startsWith('/') ? endpoint : '/' + endpoint}`;
}

/**
 * Safely parse JSON with error handling
 * @param {string} jsonString - JSON string to parse
 * @param {*} defaultValue - Default value if parsing fails
 * @returns {*} Parsed object or default value
 */
export function safeJsonParse(jsonString, defaultValue = null) {
  try {
    return JSON.parse(jsonString);
  } catch (error) {
    console.error('JSON parse error:', error);
    return defaultValue;
  }
}

/**
 * Debounce function calls
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} Debounced function
 */
export function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Generate a unique ID
 * @returns {string} Unique identifier
 */
export function generateUniqueId() {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * Check if code is running on server-side
 * @returns {boolean} True if running on server
 */
export function isServer() {
  return typeof window === 'undefined';
}

/**
 * Slugify a string for URLs
 * @param {string} text - Text to slugify
 * @returns {string} Slugified text
 */
export function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}

/**
 * Extract error message from various error types
 * @param {*} error - Error object
 * @returns {string} Error message
 */
export function getErrorMessage(error) {
  if (typeof error === 'string') return error;
  if (error?.message) return error.message;
  if (error?.error) return error.error;
  return 'An unknown error occurred';
}

export default {
  formatDate,
  formatCurrency,
  validateWixCredentials,
  buildWixApiUrl,
  safeJsonParse,
  debounce,
  generateUniqueId,
  isServer,
  slugify,
  getErrorMessage,
};
