@Contacts
  Feature: Contacts page

    Background:
      Given The login page is opening
      Then User enter username and password
      And User submit Login

    Scenario: The user search contacts
      Given The user push the button Contacts
      Then The user use advance search
      And The user verify the results
      When The user search for a contact
      Then The user click on the contact for details