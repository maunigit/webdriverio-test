import HomeScreen from '../screenobjects/home.screen';

describe('WebdriverIO and Appium, interacting with Home elements,', () => {
    it('should be able to open Make list', () => {
        HomeScreen.make.waitForDisplayed(20000);
        HomeScreen.make.click();
        driver.pause(3000);
        driver.back();
    });
    it('should be able to open Year list', () => {
        HomeScreen.year.waitForDisplayed(20000);
        HomeScreen.year.click();
        driver.pause(3000);
        driver.back();
    });
    it('should be unable to open Model list', () => {
        HomeScreen.model.waitForDisplayed(20000);
        HomeScreen.model.click();
    });
    it('should be unable to open Trim list', () => {
        HomeScreen.trim.waitForDisplayed(20000);
        HomeScreen.trim.click();
    });
    it('should be unable to open Details list', () => {
        HomeScreen.details.waitForDisplayed(20000);
        expect(HomeScreen.details.isEnabled()).toEqual(false);
        HomeScreen.details.click();
    });
    it('should be able to Reset', () => {
        HomeScreen.reset.waitForDisplayed(20000);
        HomeScreen.reset.click();
    });
});