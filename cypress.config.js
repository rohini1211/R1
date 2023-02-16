const { defineConfig } = require('cypress')

module.exports = defineConfig({
  experimentalStudio: true,
  chromeWebSecurity: false,
  //reporter: 'mochawesome',
  reporterOptions: {
     toConsole: true,
     reportDir: 'cypress/results',
  overwrite: false,
  html: true,
  json: true,
reporter: 'cypress-mochawesome-reporter'
    
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    e2e: {
      "compilerOptions": {
        "types": ["cypress", "cypress-file-upload"]
      }
      
      },
  },
})
