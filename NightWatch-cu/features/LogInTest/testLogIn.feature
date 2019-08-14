Feature: Log into the Timesheet application

  @validcredentials
  Scenario Outline: Log in using valid credentials
    Given The user opens the LogIn Page
    When The user write his username <user>
    And The user write his password <pass>
    Then The user submit his Login
    And The user click logout

    Examples:
    | user |pass|
    |radu.pop |test|
    |razvan.vuscan |test|
    |radu.pop@arobs.com |test|


  @invalidcredentials
  Scenario Outline: Log in using invalid credentials
    Given The user opens the Login Page
    When The user write an invalid username <username>
    And The user write an invalid password <password>
    Then The user submit his login

    Examples:
      |username |password|
      |empty    |empty   |
      |4536     |6426    |
      |empty    |rAA     |
      |acds     |bdbds   |
      |radu.pop |empty   |


