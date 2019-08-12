Feature: Test Templates

  @templates
  Scenario: Choosing a different language
    Given The user open login page
    Then The login page appear
    When The user choose the language romanian
    Then The user choose the language english