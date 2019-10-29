const wdio = require("webdriverio");
const assert = require('assert')

const opts = {
  protocol: 'http',
  hostname: '192.168.0.253', //to check
  port: 4723,
  capabilities: {
    deviceName: "MI5",
    udid: "26060fa3",
    platformName: "Android",
    platformVersion: "8.0.0",
    appPackage: "com.carquery.app",
    appActivity: "host.exp.exponent.MainActivity",
    automationName: "UiAutomator2",
    appWaitForLaunch: "false",
    avdArgs: "-no-window"
    //isHeadless: "true"
  }
};

async function main () {
  const client = await wdio.remote(opts);

  const res = await client.status();
  assert.isObject(res.build);

  const current_package = await client.getCurrentPackage();
  console.log('current_package is: ' + current_package);
  assert.equal(current_package,"com.carquery.app");

  const button_reset = await client.$("~reset").waitForExist();
  const reset_text = await button_reset.getText();
  console.log('reset_text is: ' + reset_text);

  const delete_session = await client.deleteSession();
  assert.isNull(delete_session);
}

main();