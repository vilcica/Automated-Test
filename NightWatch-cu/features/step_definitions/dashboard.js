const { client } = require("nightwatch-cucumber");
const { Given, When, Then, And } = require("cucumber");
const cssLib = require("../selectors/cssLib.js");

Given(/^User push the button Dashboard from left menu$/, () => {
  return client
    .pause(2000)
    .click(cssLib.LeftMenuElements.dashboardButton())
    .assert.containsText(cssLib.Pagetitle.pageTitle(), 'Dashboard');
});
Then(/^User change the month by pushing the button from calendar$/, () => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
  const now = new Date();
  let thisMonth = months[now.getMonth()];
  let previousMonth=months[now.getMonth()-1];
  return client.assert.containsText(cssLib.Dashboard.Month(), thisMonth)
   .click(cssLib.Dashboard.PreviousMonthbutton())
   .pause(2000)
   .assert.containsText(cssLib.Dashboard.Month(), previousMonth)
   .click(cssLib.Dashboard.NextMonthbutton())
   .pause(2000)
    .assert.containsText(cssLib.Dashboard.Month(), thisMonth);
});