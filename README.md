# webdriverio-test

webdriverio-test with runner generate by automatic-guided configuration file.
Created to compare the differences why wdio getting started automatic-guided config file 
don't work while boilerplate config file work. The fault is Babel but it isn't written anywhere. 
You need to add babel.config.js file and beforeSession method for Babel in wdio.conf.js and it works.
(ex webdriverio-test without runner).