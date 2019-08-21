@Dashboard
Feature: Verify the features of Dashboard

  Background: User is logged in
    Given The login page is opening
    Then User enter username and password
    And User submit Login


  Scenario: User use the page Dashboard
    Given User push the button Dashboard from left menu
    Then User change the month by pushing the button from calendar
