const csslib={
	body:()=>"body",
	LogInElements:{
		passwordField:()=>"input[name='password']",
		usernameField:()=>' input[type=text]',
		buttonLogOut:() => '.log',
		buttonSubmit:()=>'form > button',
		buttonLanguage:()=>'.row > div > div > div > i',
		buttonRomanian:()=>'.transition.visible > div:nth-child(1)',
		buttonEnglish:()=>'.transition.visible > div:nth-child(2)',
		errorPassword:()=>'form > div:nth-child(4)',
		errorUsername:()=>'form > div:nth-child(2)',
		errorInvalidData:()=>'.red'
	},
	googleElements:{
		googleSearchForm:()=>'input[name="q"]'
	}
}
module.exports=csslib;