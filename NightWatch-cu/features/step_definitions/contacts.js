const { client } = require("nightwatch-cucumber");
const { Given, Then, When, And } = require("cucumber");
const cssLib = require("../selectors/csslib.js");
const expect = require('chai')
const async = require('async');

Given(/^The user push the button Contacts$/, () => {
	return client
		.click(cssLib.LeftMenuElements.contactButton())
		.pause(2000)
		.assert.containsText(cssLib.Pagetitle.pageTitle(), "Contacts");
});
Then(/^The user use advance search$/, () => {
		client
			.click(cssLib.Contacts.AdvanceSearchButton())
			.waitForElementVisible(cssLib.Contacts.PositionField(),1000,() =>{
				return client
					.click(cssLib.Contacts.PositionField())
					.setValue(cssLib.Contacts.PositionField(),'Software Tester')
					.click(cssLib.Contacts.PositionChoose())
					.click(cssLib.Contacts.SearchButton())
		})
});
Then(/^The user verify the results$/, async () => {
	let i =0;
	return client.elements('css selector', cssLib.Contacts.SearchContentPosition(), (res)=>{
		res.value.forEach(function (elem) {
			let elementID = elem.ELEMENT;
			client.elementIdText(elementID, function (result) {
				i++;
				console.log(i);
				return client.expect(result.value).to.equal('Software Tester | Automation')
			});
		});
	});
});
When(/^The user search for a contact$/, () => {
	return client
		.click(cssLib.Contacts.SearchContact())
		.setValue(cssLib.Contacts.SearchContact(), 'Radu Pop')
		.click(cssLib.Contacts.SearchButton())
		.pause(1000)
});
Then(/^The user click on the contact for details$/, () => {
	return client.elements('css selector', cssLib.Contacts.SearchContentName(), (res)=>{
		res.value.forEach(function (elem) {
			let elementID = elem.ELEMENT;
			client.elementIdText(elementID, function (result) {
				if(result.value === 'Pop Radu') {
					return client
						.elementIdClick(elementID)
						.waitForElementVisible(cssLib.Contacts.ContactDetails(), 1000);
				}
				else{
					return console.log(result.value);
				}
			});
		});
	});
});