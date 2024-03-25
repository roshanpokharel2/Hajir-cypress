
const { defineConfig } = require('cypress');

// Fetch the baseUrl from environment variables
const baseUrl =  "https://veloxlabs.net/api/v2";

module.exports = defineConfig({
  e2e: {
    baseUrl: baseUrl
  }
});
