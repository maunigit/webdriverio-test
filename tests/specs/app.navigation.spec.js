import HomeScreen from '../screenobjects/home.screen';
import MakeScreen from '../screenobjects/make.screen';
import YearScreen from '../screenobjects/year.screen';
import ModelScreen from '../screenobjects/model.screen';
import TrimScreen from '../screenobjects/trim.screen';

describe('WebdriverIO and Appium, navigating with Home elements,', () => {
    it('should be able to select Alfa Romeo', () => {
        HomeScreen.make.waitForDisplayed(20000);
        HomeScreen.make.click();
        MakeScreen.alfaromeo.waitForDisplayed(20000);
        MakeScreen.alfaromeo.click();
    });
    it('should be able to select 2010', () => {
        HomeScreen.year.waitForDisplayed(20000);
        HomeScreen.year.click();
        YearScreen.year2010.waitForDisplayed(20000);
        YearScreen.year2010.click();
    });
    it('should be able to select MiTo', () => {    
        HomeScreen.model.waitForDisplayed(20000);
        HomeScreen.model.click();   
        ModelScreen.mito.waitForDisplayed(20000);
        ModelScreen.mito.click();
    });
    it('should be able to select 1.4 TB 16V', () => {  
        HomeScreen.trim.waitForDisplayed(20000);
        HomeScreen.trim.click();
        TrimScreen.t1400tb.waitForDisplayed(20000);
        TrimScreen.t1400tb.click();
    });
    it('should be able to open Details', () => {  
        HomeScreen.details.waitForDisplayed(20000);
        HomeScreen.details.click();
        driver.pause(3000);
    });
    it('should be able to Reset', () => {  
        driver.back();
        HomeScreen.reset.waitForDisplayed(20000);
        HomeScreen.reset.click();
        driver.pause(1000);
    });
});