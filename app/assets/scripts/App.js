import { extend } from 'lodash';
import '../styles/styles.css';
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
//import Person from './modules/Person'; <-- SEZIONE 13 ESEMPIO

new RevealOnScroll(document.querySelectorAll(".feature-item"), 75);
new RevealOnScroll(document.querySelectorAll(".testimonial"), 60);


let mobileMenu = new MobileMenu();


if(module.hot) {
    module.hot.accept();
}













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