const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://veloxlabs.net/api/v2"
  }
});
