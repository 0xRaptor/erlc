const erlc = require('../erlc.js')
const assert = require('../functions/assert.js')

/**
 * @typedef {Object} ClientConfig
 * @property {string} globalToken - Your ER:LC global API token
 */

/**
 * Creates an authorised ER:LC client for requests
 * @class
 * @param {ClientConfig} options - Client Options
 */

class Client {

    /**
     * @constructor
     * @param {ClientConfig} options - Client Options
     */
    constructor(options) {
        assert(typeof options === 'object', `Syntax error: object expected for "options", received ${typeof options}`);
        this.options = { ...options };
      }
    
     /**
     * Updates and returns the client configurationg
     * @returns {ClientConfig} The client configuration.
     */
    config() {
        erlc.config = this.options
        return erlc.config
    }
}

module.exports = Client