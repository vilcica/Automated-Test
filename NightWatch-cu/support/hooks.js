const { Before, After, setDefaultTimeout } = require("cucumber");
const { client } = require("nightwatch-cucumber");

setDefaultTimeout(30 * 1000);

Before(async () => {
  await client.session(async () => {
    console.log('START TESTING!');
  });
});

// Code executed after each scenario.
After(async scenario => {
  if (scenario.result.status === 'failed') {
    console.log(`Scenario '${scenario.pickle.name}' is failed`);
  }
});