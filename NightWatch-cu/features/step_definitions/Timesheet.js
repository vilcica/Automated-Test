const { client } = require("nightwatch-cucumber");
const { Given, When, Then, And } = require("cucumber");
const cssLib = require("../selectors/cssLib.js");

function chooser(element) {
  client.elements("css selector", element, function(res) {
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
    .assert.containsText(cssLib.Pagetitle.pageTitle(), "Timesheet");
});
Then(/^User add preset events and choose start date$/, () => {
  client.waitForElementVisible(
    cssLib.Timesheet.PresetEventsbutton(), 1000, function() {
      client
        .click(cssLib.Timesheet.PresetEventsbutton())
        .waitForElementVisible(
          cssLib.Timesheet.AddpresetEvents(), 1000, function() {
            return client
              .click(cssLib.Timesheet.StartDateEvent())
              .waitForElementVisible(
                cssLib.Timesheet.CalendarEventStart(), 1000);
          });
      chooser(cssLib.Timesheet.CalendarEventStart());
    });
});
Then(/^User add preset events and choose end date$/, () => {
  client
    .waitForElementVisible(cssLib.Timesheet.EndDateEvent(), 1000)
    .execute(selector => {
      document.querySelector(selector).click();
    }, cssLib.Timesheet.EndDateEvent())
    .moveToElement(cssLib.Timesheet.EndDateEvent(), 0, 0)
    .mouseButtonClick(0);
  chooser(cssLib.Timesheet.CalendarEventEnd());
  client.pause(1000);
  if (
    client.assert.containsText(
      cssLib.Timesheet.PresetEventMessage(),
      "You do not have any preset events saved yet!")
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
  return client.waitForElementVisible(cssLib.Timesheet.Workload(), 1000);
});
Then(/^Add one work log$/, () => {
  client
    .waitForElementVisible(
      cssLib.Timesheet.WorkloadTimeSpent(), 1000, function() {
        return client
          .clearValue(cssLib.Timesheet.WorkloadTimeSpent())
          .setValue(cssLib.Timesheet.WorkloadTimeSpent(), "10h");
      })
    .waitForElementVisible(
      cssLib.Timesheet.WorkloadTimeSpent(),
      1000,
      function() {
        return client
          .clearValue(cssLib.Timesheet.WorkloadTimeSpent())
          .setValue(cssLib.Timesheet.WorkloadTimeSpent(), "5h");
      })
    .waitForElementVisible(cssLib.Timesheet.ProjectList(), 1000, function() {
      client.click(cssLib.Timesheet.ProjectList());
      return chooser(cssLib.Timesheet.LisboxProject());
    })
    .waitForElementVisible(cssLib.Timesheet.ProjectList(), 1000, function() {
      client.click(cssLib.Timesheet.ModuleList());
      chooser(cssLib.Timesheet.ModuleProject());
      client.click(cssLib.Timesheet.Activity());
      chooser(cssLib.Timesheet.ActivityProject());
      return client.setValue(cssLib.Timesheet.TaskField(), "I don 't know");
    });
  client.element("css selector", cssLib.Timesheet.Warninghour(), result => {
    if (result.status > -1) {
      client.click(cssLib.Timesheet.EndDateEvent());
      chooser(cssLib.Timesheet.CalendarEventEnd());
      return client.click(cssLib.Timesheet.SaveButton());
    } else {
      return client
        .click(cssLib.Timesheet.SaveButton())
        .waitForElementVisible(cssLib.Timesheet.Eventadd(), 1000);
    }
  });
});
Then(/^User add an absence request$/, () => {
  client
    .click(cssLib.Timesheet.AbsenceButton())
    .click(cssLib.Timesheet.AbsenceType());
  chooser(cssLib.Timesheet.AbsenceTypeChoice());
  return client
    .click(cssLib.Timesheet.ReplacerButton())
    .setValue(cssLib.Timesheet.ReplacerButton(), "vuscan")
    .click(cssLib.Timesheet.Replacer())
    .click(cssLib.Timesheet.PhoneNumber())
    .setValue(cssLib.Timesheet.PhoneNumber(), "0833365")
    .click(cssLib.Timesheet.Motivation())
    .setValue(cssLib.Timesheet.Motivation(), "ACSAVA")
    .click(cssLib.Timesheet.SaveButton())
    .waitForElementVisible(cssLib.Timesheet.Eventadd(), 1000);
});
