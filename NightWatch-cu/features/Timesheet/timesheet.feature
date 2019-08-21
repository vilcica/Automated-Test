@Timesheet
Feature: Timesheet page

  Background: User is logged in
    Given The login page is opening
    Then User enter username and password
    And User submit Login

    Scenario: User use Timesheet page
      Given User click the button Timesheet form left menu
      Then User add preset events and choose start date
      And User add preset events and choose end date
      When Select a day from calendar to add work log
      Then Add one work log
      When Select a day from calendar to add work log
      Then User add an absence request