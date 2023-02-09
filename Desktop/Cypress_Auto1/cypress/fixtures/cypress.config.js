//const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: true,
  reporter: 'cypress-mochawesome-reporter',
  e2e: {

    setupNodeEvents(on, config) {
    
    require('cypress-mochawesome-reporter/plugin')(on);
    
     },
    
     },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
