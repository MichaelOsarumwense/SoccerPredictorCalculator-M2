const { defineConfig } = require('cypress');

module.exports = defineConfig({
  projectId: 'ahmszh',
  env: {
    host: 'http://localhost:5000',
    app: 'https://soccer-predictor-calculator.vercel.app/',
  },
  e2e: {
    baseUrl: 'http://localhost:5000/',
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config);
    },
  },
});
