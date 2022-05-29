class Person {
    constructor(name, favoriteColor) {
        this.name = name;
        this.favoriteColor = favoriteColor;
    }

    greet() {
        console.log("Bella zii nome mi chiamo " + this.name + " e colore " + this.favoriteColor );
    }
}

export default Person;