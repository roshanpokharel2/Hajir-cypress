const { defineConfig } = require('cypress');

module.exports = defineConfig({
  // Your existing Cypress configuration
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    }
  },
  // env: {
  //   staging: {
  //     configFile: "cypress.env.staging.json"
  //   },
  //   production: {
  //     configFile: "cypress.env.production.json"
  //   }
  // }
});
