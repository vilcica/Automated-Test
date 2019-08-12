const { client } = require("nightwatch-cucumber");
const { Given, When, Then, And } = require("cucumber");
const cssLib = require("../selectors/cssLib.js");

Given(/^The user opens the LogIn Page$/, () => {
  return client.init();
});
When(/^The user write his username (.*?)$/, username => {
  return client
    .waitForElementVisible(cssLib.LogInElements.usernameField(), 1000)
    .setValue(cssLib.LogInElements.usernameField(), username)
    .assert.value(cssLib.LogInElements.usernameField(), username);
});
When(/^The user write his password (.*?)$/, password => {
  return client
    .waitForElementVisible(cssLib.LogInElements.passwordField(), 1000)
    .setValue(cssLib.LogInElements.passwordField(), password)
    .assert.value(cssLib.LogInElements.passwordField(), password);
});

Then(/^The user click logout$/, () => {
  return client.waitForElementVisible(cssLib.LogInElements.buttonLogOut(), 1000).click(".log");
});

Then(/^The user submit his Login$/, () => {
  return client.click(cssLib.LogInElements.buttonSubmit());
});


