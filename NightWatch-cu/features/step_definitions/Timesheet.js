const { client } = require("nightwatch-cucumber");
const { Given, When, Then, And } = require("cucumber");
const cssLib = require("../selectors/cssLib.js");
const expect = require("chai").expect;

function chooser(element) {
  client.elements('css selector', element, function(res) {
    let Days = res.value.length;
    let randomDay = Math.floor(Math.random() * Days);
    let selectedDay = res.value[randomDay];
    let ElementId = selectedDay.ELEMENT;
    client.elementIdClick(ElementId);
  });
}
Given(/^User click the button Timesheet form left menu$/, () => {
  return client
    .pause(2000)
    .click(cssLib.LeftMenuElements.timesheetButton())
    .pause(2000)
    .assert.containsText(cssLib.Pagetitle.pageTitle(), 'Timesheet');
});
Then(/^User add preset events and choose start date$/, () => {
  client
    .click(cssLib.Timesheet.PresetEventsbutton())
    .waitForElementVisible(cssLib.Timesheet.AddpresetEvents(), 1000)
    .pause(2000)
    .click(cssLib.Timesheet.StartDateEvent())
    .waitForElementVisible(cssLib.Timesheet.CalendarEventStart(), 1000)
    .pause(1000);
  chooser(cssLib.Timesheet.CalendarEventStart());
  client.pause(1000);
});
Then(/^User add preset events and choose end date$/, () => {
  client
    .waitForElementVisible(cssLib.Timesheet.AddpresetEvents(), 1000)
    .click(cssLib.Timesheet.EndDateEvent())
    .waitForElementVisible(cssLib.Timesheet.CalendarEventEnd(), 1000);
  chooser(cssLib.Timesheet.CalendarEventEnd());
  client.pause(1000);
  if (
    client.assert.containsText(
      cssLib.Timesheet.PresetEventMessage(),
      'You do not have any preset events saved yet!')
  ) {
    return client.click(cssLib.Timesheet.Closeout()).pause(1000);
  }
});
When(/^Select a day from calendar to add work log$/, () => {
  client
    .waitForElementVisible(cssLib.Timesheet.TimeSheetCalendar(), 1000)
    .click(cssLib.Timesheet.NextMonthbuttonT())
    .pause(2000);
  chooser(cssLib.Timesheet.TimeSheetCalendar());
  client.pause(5000);
  return client.waitForElementVisible(cssLib.Timesheet.Workload(), 1000);
});
Then(/^Add one work log$/, () => {
  client
    .pause(1000)
    .clearValue(cssLib.Timesheet.WorkloadTimeSpent())
    .setValue(cssLib.Timesheet.WorkloadTimeSpent(), "10h")
    .pause(1000)
    .click(cssLib.Timesheet.ProjectList())
    .pause(1000);
  chooser(cssLib.Timesheet.LisboxProject());
    client.pause(1000)
    .click(cssLib.Timesheet.ModuleList())
    .pause(1000);
  chooser(cssLib.Timesheet.ModuleProject());
  client.click(cssLib.Timesheet.Activity()).pause(1000);
  chooser(cssLib.Timesheet.ActivityProject());
  client.setValue(cssLib.Timesheet.TaskField(), "I don 't know").pause(1000);
  client.element('css selector', cssLib.Timesheet.Warninghour(), result => {
    if (result.status > -1) {
      client.click(cssLib.Timesheet.EndDateEvent());
      chooser(cssLib.Timesheet.CalendarEventEnd());
      return client.click(cssLib.Timesheet.SaveButton()).pause(3000);
    }
  });
  return client
    .click(cssLib.Timesheet.SaveButton())
    .pause(3000)
    .waitForElementVisible(cssLib.Timesheet.Eventadd(), 1000);
});
Then(/^User add an absence request$/, () => {
  client.click(cssLib.Timesheet.AbsenceButton())
    .pause(1000)
    .click(cssLib.Timesheet.AbsenceType());
  chooser(cssLib.Timesheet.AbsenceTypeChoice());
  return client.click(cssLib.Timesheet.ReplacerButton())
    .pause(1000)
    .setValue(cssLib.Timesheet.ReplacerButton(),'vuscan')
    .pause(2000)
    .click(cssLib.Timesheet.Replacer())
    .click(cssLib.Timesheet.PhoneNumber())
    .setValue(cssLib.Timesheet.PhoneNumber(),'0833365')
    .click(cssLib.Timesheet.Motivation())
    .setValue(cssLib.Timesheet.Motivation(),'ACSAVA')
    .click(cssLib.Timesheet.SaveButton())
    .pause(1000)
    .waitForElementVisible(cssLib.Timesheet.Eventadd(),1000);
});