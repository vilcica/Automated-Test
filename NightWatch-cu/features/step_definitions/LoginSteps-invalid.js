const { client } = require("nightwatch-cucumber");
const cssLib = require("../selectors/cssLib.js");
const { Given, When, Then, And } = require("cucumber");

Given(/^The user opens the Login Page$/, () => {
  return client.init();
});
When(/^The user write an invalid username (.*?)$/, (username) => {
  client
    .waitForElementVisible(cssLib.LogInElements.usernameField(), 1000)
    .pause(1000)
    .setValue(cssLib.LogInElements.usernameField(), username);
  if (username === "empty") {
    return client
      .clearValue(cssLib.LogInElements.usernameField())
      .waitForElementVisible(cssLib.LogInElements.errorUsername(), 1000);
  } else {
    return client.assert
      .value(cssLib.LogInElements.usernameField(), username)
      .pause(1000);
  }
});
When(/^The user write an invalid password (.*?)$/, (password) => {
  client
    .waitForElementVisible(cssLib.LogInElements.passwordField(), 1000)
    .setValue(cssLib.LogInElements.passwordField(), password);
  if (password === 'empty') {
    return client
      .clearValue(cssLib.LogInElements.passwordField())
      .waitForElementVisible(cssLib.LogInElements.errorPassword(), 1000)
      .pause(1000);
  } else {
    return client.assert
      .value(cssLib.LogInElements.passwordField(), password)
      .pause(1000);
  }
});

Then(/^The user submit his login$/, () => {
  return client
    .pause(2000)
    .click(cssLib.LogInElements.buttonSubmit())
    .waitForElementVisible(cssLib.LogInElements.errorInvalidData(), 1000)
    .clearValue(cssLib.LogInElements.usernameField())
    .clearValue(cssLib.LogInElements.passwordField());
});