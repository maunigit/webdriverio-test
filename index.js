const wdio = require("webdriverio");

const opts = {
  protocol: 'http',
  hostname: '192.168.0.253',
  port: 4723,
  capabilities: {
    deviceName: "MI5",
    udid: "26060fa3",
    platformName: "Android",
    platformVersion: "8.0.0",
    appPackage: "com.carquery.app",
    appActivity: "host.exp.exponent.MainActivity",
    automationName: "UiAutomator2",
    appWaitForLaunch: "false"
  }
};

async function main () {
  const client = await wdio.remote(opts);
  const field = await client.$("~reset");
  const value = await field.getText();
  assert.equal(value,"reset");
  await client.deleteSession();
}

main();