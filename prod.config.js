const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://production.veloxlabs.net/api/v2"
  }
});
