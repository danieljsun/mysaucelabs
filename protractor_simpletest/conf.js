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
   // Override the timeout for webdriver to 20 seconds.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 120000
  },
  sauceUser: process.env.SAUCE_USERNAME,
  sauceKey: process.env.SAUCE_ACCESS_KEY,
  specs: ['spec.js'],
  // NOT WORKING yet
  //{
    //'appium-version': '1.2',
    //'browserName': 'safari',
    //'platform': 'iOS',
    //'version': '7.1',
    //'deviceName': 'iPhone Simulator'
  //},
  //{
    //'appium-version': '1.2',
    //'browserName': 'chrome',
    //'platform': 'iOS',
    //'version': '7.1',
    //'deviceName': 'iPhone Simulator'
  //}
  //{
    //platform: 'Linux',
    //version: '4.4',
    //browserName: 'Android'
  //}
  /*, {
   'browserName': 'safari',
   'appium-version': '1.0',
   'platformName': 'iOS',
   'platformVersion': '7.1',
   'deviceName': 'iPad Simulator',
   }*/
  //capabilities: {
    //'browserName': 'chrome',
  //}
  //capabilities: {
    //build: "1",
    //platformName: 'iOS',
    //platformVersion: '7.1',
    //browserName: 'safari',
    //deviceName: 'iPhone Simulator',
    //'appium-version':"1.2.1"
  //},
  //capabilities: {
    //browserName: 'iPhone'
  //}
  //capabilities: {
    //browserName: 'iPhone',
    //platform: 'OS X 10.9',
    //version: '8.0'
  //}
  //capabilities: {
    //browserName: 'safari',
    //'appium-version': '1.3',
    //platformName: 'iOS',
    //platformVersion: '8',
    //deviceName: 'iPhone Simulator'
  //}
  capabilities: {
    platformName: 'iOS',
    platformVersion: '7.1',
    browserName: 'safari',
    deviceName: 'iPhone Simulator',
    'appium-version':'1.3'
  }
  //multiCapabilities: [
    //{
      //'browserName': 'chrome',
      //'platform': 'Windows 7',
      //'version': '34'
    //},
    //{
      //'browserName': 'chrome',
      //'platform': 'Windows 7',
      //'version': '38'
    //},
    //{
      //'browserName': 'firefox',
      //'platform': 'Windows 7',
      //'version': '24'
    //},
    //{
      //'browserName': 'firefox',
      //'platform': 'Windows 7',
      //'version': '32'
    //},
    //{
      //'browserName': 'internet explorer',
      //'platform': 'Windows 7',
      //'version': '10'
    //},
    //{
      //'browserName': 'internet explorer',
      //'platform': 'Windows 7',
      //'version': '11'
    //},
    //{
      //'browserName': 'internet explorer',
      //'platform': 'Windows 7',
      //'version': '9'
    //},
    //{
      //'browserName': 'chrome',
      //'platform': 'Windows 7',
      //'version': 'dev'
    //}
    //{
      //'browserName': 'chrome',
      //'platform': 'Windows 7',
      //'version': 'beta'
    //},
    //{
      //platformName: 'iOS',
      //platformVersion: '7.1',
      //browserName: 'safari',
      //deviceName: 'iPhone Simulator',
      //'appium-version':"1.2.1"
    //},
    //{
      //platformName: 'android',
      //platformVersion: '4.4',
      //browserName: 'browser',
      //deviceName: 'Android',
      //'appium-version':"1.2.2"
    //},
    //{
      //platformName: 'android',
      //platformVersion: '4.4',
      //browserName: 'browser',
      //deviceName: 'Android',
      //'appium-version':"1.3"
    //},
    //{
      //platformName: 'android',
      //platformVersion: '4.4',
      //browserName: 'chrome',
      //deviceName: 'Android',
      //'appium-version':"1.3"
    //}
  //]
};
