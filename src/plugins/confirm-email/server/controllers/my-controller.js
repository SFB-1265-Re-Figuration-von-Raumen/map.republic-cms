'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('confirm-email')
      .service('myService')
      .getWelcomeMessage();
  },
});
