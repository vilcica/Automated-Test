@MenuTemplate
Feature: Check if menu elements appear

  Background:
       Given The login page is opening
       Then User enter username and password
        And  User submit Login

  Scenario: Check features of menus
        Given The user is logged in
        Then Check if left and top menus appear

