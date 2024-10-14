// const cypress = require("cypress");
const { defineConfig } = require("cypress");
// const plugins = require("./cypress/plugins");

module.exports = defineConfig({
  // cypress cloud 的 唯一 id
  projectId: "e7pfkt",
  reporter: "cypress-multi-reporters",
  reporterOptions: {
    reporterEnabled: "mochawesome",
    mochawesomeReporterOptions: {
      reportDir: "cypress/reports/mocha",
      quiet: true,
      overwrite: false,
      html: false,
      json: true,
    },
  },

  // 執行失敗時截圖→改為不要截圖
  screenshotOnRunFailure: false,

  // 影片錄製→改不要錄製影片
  video: false,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      return require("./cypress/plugins/index.js")(on, config);
    },

    specPattern: "cypress/e2e/**/*.spec.{js,jsx,ts,tsx}",

    // 加入 baseURL，記得要加在 e2e 裡面，不能加在外層
    // baseUrl: "https://google.com",
    baseUrl: "https://react-redux.realworld.io/",
  },
});
