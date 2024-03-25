const { defineConfig } = require('cypress');

// Use the production URL directly
const baseUrl = "https://production.veloxlabs.net/api/v2";

module.exports = defineConfig({
  e2e: {
    baseUrl: baseUrl
  }
});
