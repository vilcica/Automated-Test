const { client } = require("nightwatch-cucumber");
const { Given, When, Then, And } = require("cucumber");
const cssLib = require("../selectors/cssLib.js");

Given(/^The user is logged in$/, () => {
   client.init();
});
Then(/^Check if left and top menus appear$/, () => {
   return client
	.waitForElementVisible(cssLib.LeftMenuElements.leftMenubody(), 1000)
	.waitForElementVisible(cssLib.RightMenuElements.rightmenubody(), 1000);
});
