const { client } = require("nightwatch-cucumber");
const { Given, Then, When, And } = require("cucumber");
const csslib = require("../selectors/csslib.js");

Given(/^The login page is opening$/, () => {
  return client.init();
});
Then(/^User enter username and password$/, () => {
  return client
    .setValue(csslib.LogInElements.usernameField(), 'radu.pop')
    .setValue(csslib.LogInElements.passwordField(), 'test')
    .pause(1000)
});
Then(/^User submit Login$/, () => {
  return client.click(csslib.LogInElements.buttonSubmit())
               .pause(1000);
});
