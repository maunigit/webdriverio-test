import AppScreen from './app.screen';

const SELECTORS = {    
    ABARTH: '~Abarth',
    ALFA_ROMEO: '~Alfa Romeo'
};

class MakeScreen extends AppScreen {
    constructor () {
        super(SELECTORS.ABARTH);
    }

    get abarth () {
        return $(SELECTORS.ABARTH);
    }

    get alfaromeo () {
        return $(SELECTORS.ALFA_ROMEO);
    }
}

export default new MakeScreen();
