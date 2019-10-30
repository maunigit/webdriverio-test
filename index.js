const wdio = require("webdriverio");

const opts = {
  protocol: 'http',
  hostname: 'localhost', //appium server
  port: 4723,
  capabilities: {
    deviceName: "MI5",
    udid: "26060fa3", //macchina android
    //udid: "192.168.0.206:5555",
    platformName: "Android",
    platformVersion: "8.0.0",
    //platformVersion: "7.0.0",
    appPackage: "com.carquery.app",
    appActivity: "host.exp.exponent.MainActivity",
    automationName: "UiAutomator2",
    appWaitForLaunch: "false"
    //avdArgs: "-no-window"
    //isHeadless: "true"
  }
};

async function main () {
  const client = await wdio.remote(opts);
  const res = await client.status();
  const current_package = await client.getCurrentPackage();
  console.log('current_package is: ' + current_package); 
  const delete_session = await client.deleteSession();
}

main();