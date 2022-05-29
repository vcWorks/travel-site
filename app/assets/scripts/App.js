import { extend } from 'lodash';
import '../styles/styles.css';
import Person from './modules/Person';

if(module.hot) {
    module.hot.accept();
}

/* esempi */

class Adult extends Person {
    payTaxes() {
        console.log(this.name + " l'agenzia delle entrate ti cerca");
    }
}

let john = new Adult("Jonny", "blu");
john.greet();
john.payTaxes();