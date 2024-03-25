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
  //     baseUrl: "https://veloxlabs.net/api/v2"
  //   },
  //   production: {
  //     baseeUrl: "https://production.veloxlabs.net/api/v2"
  //   }
  // }
});
