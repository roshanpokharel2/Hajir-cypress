const { defineConfig } = require('cypress');

module.exports = defineConfig({
  // Your existing Cypress configuration
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    baseUrl: "https://veloxlabs.net/api/v2", // Move baseUrl under e2e
    env: {
      staging: {
        configFile: "cypress.env.staging.json"
      },
      production: {
        configFile: "cypress.env.production.json"
      }
    }
  }
});
