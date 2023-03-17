'use strict';

/**
 * ui service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::ui.ui');
