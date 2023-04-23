"use strict";

/**
 * article router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::article.article", {
  config: {
    find: {
      middlewares: ["api::article.request-limiter"],
    },
  },
});
