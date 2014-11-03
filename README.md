* Android Desired Capabilities
  * Mobile Web Application
```
{
  platform: 'Linux',
  version: '4.4',
  browserName: 'Android'
}

Using SauceLabs selenium server at http://ondemand.saucelabs.com:80/wd/hub
F

Failures:

  1) angularjs homepage should have a title
   Message:
     Error: Error while running testForAngular: This is feature will be implemented soon!
   Stacktrace:
     Error: Error while running testForAngular: This is feature will be implemented soon!
    at Error (<anonymous>)
==== async task ====
WebDriver.executeScript()
    at [object Object].<anonymous> (/Users/dsun/src/github.com/danieljsun/mysaucelabs/protractor_simpletest/spec.js:21:13)
==== async task ====
Asynchronous test function: it()
Error
    at [object Object].<anonymous> (/Users/dsun/src/github.com/danieljsun/mysaucelabs/protractor_simpletest/spec.js:20:3)
    at Object.<anonymous> (/Users/dsun/src/github.com/danieljsun/mysaucelabs/protractor_simpletest/spec.js:19:1)

Finished in 72.838 seconds
1 test, 1 assertion, 1 failure

SauceLabs results available at http://saucelabs.com/jobs/6e79dcc09ec14743a6d38d53fc4f4c04
```
  * Mobile Web Application + Appium
```
