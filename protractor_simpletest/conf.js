// conf.js
// This configuration tells Protractor where your test files (specs) are, and where to talk to your Selenium Server (seleniumAddress).
// It will use the defaults for all other configuration. Chrome is the default browser.

// You can run the test by executing the folliwng line on your terminal:
// >protractor conf.js

// When you run the test you should see a Chrome browser window open up and navigate to the Calculator,
// then close itself (this should be very fast!). The test output should be 1
// tests, 1 assertion, 0 failures. Congratulations, you've run your first
// Protractor test!

exports.config = {
  sauceUser: 'sudaniatgs',
  sauceKey: 'd20339c5-6219-4689-93b7-7bf9616bc25d',
  specs: ['spec.js']
}
