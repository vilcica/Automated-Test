const { client } = require("nightwatch-cucumber");
const { Given, Then, When, And } = require("cucumber");
const cssLib = require("../selectors/cssLib.js");

Given(/^The user open login page$/, () => {
  return client.init();
});
Then(/^The login page appear$/, () => {
  client
    .waitForElementVisible("div._1orMd > div", 1000)
    .assert.title("Timesheet")
    .waitForElementVisible(cssLib.LogInElements.usernameField(), 1000)
    .waitForElementVisible(cssLib.LogInElements.passwordField(), 1000)
    .waitForElementVisible(cssLib.LogInElements.buttonSubmit(), 1000)
    .waitForElementVisible(cssLib.LogInElements.buttonLanguage(), 1000);
});
When(/^The user choose the language romanian$/, () => {
  return client
    .click(cssLib.LogInElements.buttonLanguage())
    .pause(1000)
    .click(cssLib.LogInElements.buttonRomanian())
    .pause(1000)
    .expect.element(cssLib.LogInElements.buttonSubmit())
    .text.to.equal("Autentificare");
});
Then(/The user choose the language english$/, () => {
  return client
    .click(cssLib.LogInElements.buttonLanguage())
    .pause(1000)
    .click(cssLib.LogInElements.buttonEnglish())
    .pause(1000)
    .expect.element(cssLib.LogInElements.buttonSubmit())
    .text.to.equal("Login");
});