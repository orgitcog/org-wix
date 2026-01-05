/**
 * Unified Wix SDK Wrapper
 * Provides a consistent interface for all Wix business solutions across templates
 */

import { wixSolutions } from '@wix-templates/shared-config';
import { getErrorMessage } from '@wix-templates/shared-utils';

/**
 * Base SDK wrapper class
 */
export class WixSdkWrapper {
  constructor(wixClient) {
    this.client = wixClient;
    this.initialized = !!wixClient;
  }

  /**
   * Ensure SDK is initialized
   * @private
   */
  _ensureInitialized() {
    if (!this.initialized) {
      throw new Error('Wix SDK not initialized. Please provide a valid Wix client.');
    }
  }

  /**
   * Handle API errors consistently
   * @private
   */
  _handleError(error, context) {
    const message = getErrorMessage(error);
    console.error(`[WixSDK Error - ${context}]:`, message);
    throw new Error(`${context}: ${message}`);
  }
}

/**
 * CMS Module Wrapper
 */
export class CmsWrapper extends WixSdkWrapper {
  async getItems(dataCollectionId, options = {}) {
    this._ensureInitialized();
    try {
      // This would use the actual @wix/data SDK
      return await this.client.items.queryDataItems({ dataCollectionId, ...options });
    } catch (error) {
      this._handleError(error, 'CMS.getItems');
    }
  }

  async getItem(dataCollectionId, itemId) {
    this._ensureInitialized();
    try {
      return await this.client.items.getDataItem(dataCollectionId, itemId);
    } catch (error) {
      this._handleError(error, 'CMS.getItem');
    }
  }
}

/**
 * Stores Module Wrapper
 */
export class StoresWrapper extends WixSdkWrapper {
  async getProducts(options = {}) {
    this._ensureInitialized();
    try {
      return await this.client.products.queryProducts(options);
    } catch (error) {
      this._handleError(error, 'Stores.getProducts');
    }
  }

  async getProduct(productId) {
    this._ensureInitialized();
    try {
      return await this.client.products.getProduct(productId);
    } catch (error) {
      this._handleError(error, 'Stores.getProduct');
    }
  }

  async createCart() {
    this._ensureInitialized();
    try {
      return await this.client.currentCart.createCart();
    } catch (error) {
      this._handleError(error, 'Stores.createCart');
    }
  }

  async addToCart(cartId, items) {
    this._ensureInitialized();
    try {
      return await this.client.currentCart.addToCart(cartId, items);
    } catch (error) {
      this._handleError(error, 'Stores.addToCart');
    }
  }
}

/**
 * Bookings Module Wrapper
 */
export class BookingsWrapper extends WixSdkWrapper {
  async getServices(options = {}) {
    this._ensureInitialized();
    try {
      return await this.client.services.queryServices(options);
    } catch (error) {
      this._handleError(error, 'Bookings.getServices');
    }
  }

  async getAvailability(serviceId, date) {
    this._ensureInitialized();
    try {
      return await this.client.availability.getAvailability(serviceId, date);
    } catch (error) {
      this._handleError(error, 'Bookings.getAvailability');
    }
  }

  async createBooking(bookingData) {
    this._ensureInitialized();
    try {
      return await this.client.bookings.createBooking(bookingData);
    } catch (error) {
      this._handleError(error, 'Bookings.createBooking');
    }
  }
}

/**
 * Events Module Wrapper
 */
export class EventsWrapper extends WixSdkWrapper {
  async getEvents(options = {}) {
    this._ensureInitialized();
    try {
      return await this.client.events.queryEvents(options);
    } catch (error) {
      this._handleError(error, 'Events.getEvents');
    }
  }

  async getEvent(eventId) {
    this._ensureInitialized();
    try {
      return await this.client.events.getEvent(eventId);
    } catch (error) {
      this._handleError(error, 'Events.getEvent');
    }
  }

  async registerToEvent(eventId, registrationData) {
    this._ensureInitialized();
    try {
      return await this.client.events.register(eventId, registrationData);
    } catch (error) {
      this._handleError(error, 'Events.registerToEvent');
    }
  }
}

/**
 * Members Module Wrapper
 */
export class MembersWrapper extends WixSdkWrapper {
  async getCurrentMember() {
    this._ensureInitialized();
    try {
      return await this.client.members.getCurrentMember();
    } catch (error) {
      this._handleError(error, 'Members.getCurrentMember');
    }
  }

  async login(email, password) {
    this._ensureInitialized();
    try {
      return await this.client.auth.login({ email, password });
    } catch (error) {
      this._handleError(error, 'Members.login');
    }
  }

  async logout() {
    this._ensureInitialized();
    try {
      return await this.client.auth.logout();
    } catch (error) {
      this._handleError(error, 'Members.logout');
    }
  }
}

/**
 * Unified Wix Client
 * Provides access to all business solution wrappers
 */
export class UnifiedWixClient {
  constructor(wixClient) {
    this.wixClient = wixClient;
    this.cms = new CmsWrapper(wixClient);
    this.stores = new StoresWrapper(wixClient);
    this.bookings = new BookingsWrapper(wixClient);
    this.events = new EventsWrapper(wixClient);
    this.members = new MembersWrapper(wixClient);
  }

  /**
   * Initialize the unified client
   * @param {object} wixClient - Wix SDK client
   * @returns {UnifiedWixClient} Unified client instance
   */
  static init(wixClient) {
    return new UnifiedWixClient(wixClient);
  }
}

export default UnifiedWixClient;
