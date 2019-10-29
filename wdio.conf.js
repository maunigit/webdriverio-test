exports.config = {
    // Runner Configuration
    runner: 'local',
    path: '/wd/hub',
    hostname: '192.168.0.253', //to check
    port: 4723,
    //see https://github.com/webdriverio/webdriverio/tree/master/packages/wdio-appium-service
    services: ['appium'],
    appium: {
        command: 'appium.cmd',
        args: {
            address: '192.168.0.253',
            port: 4723,
        }
    },
    // Specify Test Files
    specs: [
        './index.js'
    ],
    exclude: [
        // 'path/to/excluded/files'
    ],
    // Capabilities
    maxInstances: 1,
    capabilities: [{
        browserName: '',
        appiumVersion: '1.15.1',
        deviceName: "MI5",
        udid: "26060fa3",
        platformName: "Android",
        platformVersion: "8.0.0",
        appPackage: "com.carquery.app",
        appActivity: "host.exp.exponent.MainActivity",
        automationName: "UiAutomator2",
        appWaitForLaunch: "false"
    }],
    // Test Configurations
    logLevel: 'info',
    bail: 0,
    baseUrl: 'http://localhost',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    framework: 'mocha',
    // Test reporter for stdout.
    reporters: [['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: true,
    }]],

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
}
