const csslib = {
  body: () => 'body',
  LogInElements: {
    LogInbody: () => '#root > div > div > div:nth-child(2)',
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
    leftMenubody: () => '#root > div > div:nth-child(1) > div',
    dashboardButton: () => '.home',
    timesheetButton: () => '.calendar.alternate',
    TimetrackingButton: () =>
      '#root > div > div:nth-child(1) > div > a:nth-child(4) > div > i',
    absencesButton: () =>
      '#root > div > div:nth-child(1) > div > a:nth-child(5) > div > i',
    myAccountButton: () => 'div > div.active.title',
    surveysButton: () => 'a:nth-child(8) > div',
    evaluationsButton: () => 'div:nth-child(9) > div > div.title',
  },
  RightMenuElements: {
    rightmenubody: () => 'div.right.menu',
    languageButton: () =>
      'div.right.menu > div:nth-child(1) > div > div > div > i',
    documentationButton: () => 'a:nth-child(2) > i',
    logoutButton: () => 'a:nth-child(4) > i'
  },
  Pagetitle: {
    pageTitle: () => '.ui.header'
  },
  Dashboard: {
    Month: () => 'div:nth-child(2) > span',
    PreviousMonthbutton: () => 'button:nth-child(1) > i',
    NextMonthbutton: () => ' button:nth-child(3) > i',
  },
  Timesheet: {
    Calendar: () => '.rbc-calendar > div:nth-child(2)',
    PreviousMonthbuttonT: () =>'div.col-xs-4> button:nth-child(1) > i',
    NextMonthbuttonT: () => ' div> button:nth-child(3) > i',
    PresetEventsbutton: () => 'div:nth-child(1) > button',
    DeletePresetEvent: () => ' div:nth-child(2) > div:nth-child(2) > button',
    AddpresetEvents: () => '#root > div.active > div',
    StartDateEvent: () =>
      ' div:nth-child(1) > div.field.input > div > div > div > button > span > span',
    EndDateEvent: () =>
      'div:nth-child(2) > div.field.input > div > div > div > button > span> span',
    CalendarEventStart: () => '[role=presentation]>[tabindex="0"]',
    CalendarEventEnd: () => '[role=presentation]>[tabindex="0"]',
    PresetEventMessage: () => 'form > div > div:nth-child(3) > div > div > div',
    TimeSheetCalendar: () => '.rbc-calendar > div:nth-child(2)',
    Closeout: () => '.close',
    Workload: () => '.active > div > div.content',
    WorkloadStartTime: () => '//div[contains(@class, \'label\') and contains(., \'Start Time\')]/parent::div/div[contains(@class,\'field\')]',
    WorkloadTimeSpent: () => 'div:nth-child(3) > div:nth-child(2) > div.field.input > div > input[type=text]',
    ProjectList: () => 'div:nth-child(4) > div:nth-child(1) > div.field.dropDown > div > div.text',
    LisboxProject: () => 'div.visible.menu.transition > div:nth-child(4)',
    ModuleProject: () => ' div > div.visible.menu.transition > div > .text',
    ActivityProject: () => ' div > div.visible.menu.transition > div > span',
    ModuleList: () => 'div:nth-child(2) > div.field.dropDown > div',
    Activity: () => 'div:nth-child(5) > div:nth-child(1) > div.field.dropDown > div',
    TaskField: () => ' [placeholder=Task]',
    SaveButton: () => 'div:nth-child(7) > div > button',
		Warninghour: () => 'div:nth-child(2) > div.ui.red.pointing.basic.label',
    Eventshow: () => '.rbc-event .container-fluid',
	  Eventadd: () => 'body > div > div > span > span',
    AbsenceButton: () => 'div.ui> a:nth-child(2)',
    AbsenceTypeChoice: () => '[aria-selected=false]',
    AbsenceType: () => 'div:nth-child(3) > div > div.field.dropDown',
    Replacer: () => 'div.visible.menu.transition > div:nth-child(2)',
    ReplacerButton: () => 'div[name=replacerId] .search[tabindex=\'0\'][type=text]',
    PhoneNumber: () => '[placeholder=\'Phone Number\']',
    Motivation: () => 'div > div.field.input > textarea'
  }
};
module.exports=csslib;
