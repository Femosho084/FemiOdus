const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 8000,
  pageLoadTimeout: 20000,
  env: {
    baseUrl: "https://www.wtwco.com/ICT",
  },

  e2e: {
    setupNodeEvents(on, config) {
      // No event listeners
    },
    watchForFileChanges: true,
    specPattern: "cypress/integration/examples/**/*js",
    viewportHeight: 760,
    viewportWidth: 1400,
  },
});
