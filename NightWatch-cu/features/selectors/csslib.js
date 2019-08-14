const csslib = {
  body: () => 'body',
  LogInElements: {
    LogInbody: () => 'div._1orMd > div',
    passwordField: () => 'input[name="password"]',
    usernameField: () => 'input[type=text]',
    buttonLogOut: () => '.log',
    buttonSubmit: () => 'form > button',
    buttonLanguage: () => '.row > div > div > div > i',
    buttonRomanian: () => '.transition.visible > div:nth-child(1)',
    buttonEnglish: () => '.transition.visible > div:nth-child(2)',
    errorPassword: () => 'form > div:nth-child(4)',
    errorUsername: () => 'form > div:nth-child(2)',
    errorInvalidData: () => '.red'
  },
  LeftMenuElements: {
    userImage: () => 'img',
    userName: () => 'div > div._1TyQX > div._3s35j',
    leftMenubody: () => '#root > div > div:nth-child(1) > div',
    dashboardButton: () => 'a:nth-child(3) > div > i',
    timesheetButton: () =>
      'body > div.ui> div > div > a:nth-child(4) > div > i',
    TimetrackingButton: () =>
      '#root > div > div:nth-child(1) > div > a:nth-child(4) > div > i',
    absencesButton: () =>
      '#root > div > div:nth-child(1) > div > a:nth-child(5) > div > i',
    contactsButton: () =>
      '#root > div > div:nth-child(1) > div > a.RE9mw._3TGN6> div',
    myAccountButton: () => 'div > div.active.title',
    profileButton: () => 'a.RE9mw._3TGN6 > div',
    curriculumvitaeButton: () => 'a.RE9mw._3TGN6 > div',
    skillsButton: () => 'a.RE9mw._3TGN6 > div',
    presetseventsButton: () => '#_1bZnh > a:nth-child(4) > div',
    creditpointsButton: () => '#_1bZnh > a:nth-child(5) > div',
    surveysButton: () => 'a:nth-child(8) > div',
    evaluationsButton: () => 'div:nth-child(9) > div > div.title',
    selfevaluationButton: () => '#_1bZnh > a:nth-child(1) > div',
    receivedevaluationsButton: () => '#_1bZnh > a:nth-child(2) > div',
    provideevaluationsButton: () => '#_1bZnh > a:nth-child(3) > div'
  },
  RightMenuElements: {
    rightmenubody: () => 'div.right.menu',
    languageButton: () =>
      'div.right.menu > div:nth-child(1) > div > div > div > i',
    documentationButton: () => 'a:nth-child(2) > i',
    logoutButton: () => 'a:nth-child(4) > i'
  },
  Pagetitle: {
    pageTitle: 'div._3oliv > div'
  }
};
module.exports=csslib;