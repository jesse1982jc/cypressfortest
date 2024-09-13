// const cypress = require("cypress");
const { defineConfig } = require("cypress");
// const plugins = require("./cypress/plugins");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      return require("./cypress/plugins/index.js")(on, config);
    },

    specPattern: "cypress/e2e/**/*.spec.{js,jsx,ts,tsx}",
  },

  video: true,
});
