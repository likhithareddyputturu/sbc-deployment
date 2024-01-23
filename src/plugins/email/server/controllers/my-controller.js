'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('email')
      .service('myService')
      .getWelcomeMessage();
  },
});
