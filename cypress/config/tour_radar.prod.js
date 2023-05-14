const { defineConfig } = require('cypress');
const path = require("path");
const urls = require("../live/utils/urls")
const users = require("../live/utils/users")
const generic_utils = require("../live/utils/generic")

let  timeElapsed = Date.now();
let today = new Date(timeElapsed);
let day = today.toLocaleDateString(('ko-KR')).replaceAll('. ','_').replace('.','');
let timenow = today.toLocaleTimeString().replaceAll(':','_');


module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: "./cypress/reports/LIVE_TOUR_RADAR_TOUR_COLLECTION_"+day,
    reportFilename: "report_[status]_"+timenow,
  },
  env: {
    "urls": urls,
    "users": users,
    "generic": generic_utils,
  },
  e2e: {
    supportFile: "support/e2e.js",
    chromeWebSecurity: false,
    video: false,
    specPattern: "live/specs",
    viewportWidth: 1920,
    viewportHeight: 1080,
    defaultCommandTimeout: 20000,
    pageLoadTimeout: 20000,
    retries: 3,
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
