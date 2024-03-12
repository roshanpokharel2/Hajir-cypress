const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",

  reporterOptions: {
    overwrite: false,
    html: true,
    json: true,
  },

  waitForFileChange: false
});
