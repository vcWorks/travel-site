import { extend } from 'lodash';
import '../styles/styles.css';
import MobileMenu from './modules/MobileMenu';
//import Person from './modules/Person'; <-- SEZIONE 13 ESEMPIO

if(module.hot) {
    module.hot.accept();
}

let mobileMenu = new MobileMenu();

















/* esempi */
/*
class Adult extends Person {
    payTaxes() {
        console.log(this.name + " l'agenzia delle entrate ti cerca");
    }
}

let john = new Adult("Jonny", "blu");
john.greet();
john.payTaxes();

*/