function newFunction(name, age, country) {
    var name = name || 'Rose';
    var age = age || 19;
    var country = country || 'Colombia';

    console.log(name, age, country);
}

//es6

function newFunction2(name = "Rose", age = 19, country = "Colombia") {
    console.log(name, age, country);
}

newFunction2();
newFunction2("Andrea", 67, "Mexico")


let hello = "Hi!";
let world = "World";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);

let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);


let lorem = "Buenas por que voy a separar \n" +
    "otra frase para ver.";

//es6
let lorem2 = `Buena frase
Ahora es otra, interesante
`;

console.log(lorem);
console.log(lorem2);


let person = {
    'name': 'Rose',
    'age': 19,
    'country': 'CO'
}

console.log(person.name, person.age, person.country)

//es6
let { name } = person;
console.log(name);


let team1 = ['Rose', 'Daniel', 'Andre'];
let team2 = ['Saray', 'Eugenio', 'Berna'];

let education = ['Dan', ...team1, ...team2];

console.log(education);


{
    var globalVar = "Global";
}

{
    let globalLet = "GlobalLet";
    console.log(globalLet);
}

console.log(globalVar);

const a = 'b';

let name = "rose";
let age = 5;

obj = { name: name, age: age };

//es6

obj2 = { name, age };

console.log(obj);
console.log(obj2);


const names = [
    { name: 'Rose', age: 8 },
    { name: 'Dani', age: 9 }
]

let listOfNames = names.map(function(item) {
    console.log(item.name)
})

let listOfNames2 = names.map(i => { console.log(i.name) })

const listOfNames3 = (name, age) => {
    console.log(name, age)
}

const listOfNames4 = name => { console.log(name) }

const square = num => num * num;

//Promise 
const hiPromise = () => {
    return new Promise((resolve, reject) => {
        if (false) {
            resolve('All ok!');
        } else {
            reject('Ups!! Is bad');
        }
    });
}

hiPromise()
    .then(response => console.log(response))
    .catch(err => console.log(err))


//herencia

class calculator {
    constructor() {
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new calculator();
console.log(calc.sum(2, 3));

//import and export
import { hi } from './module';

hi();

//generator
function* hiWorld() {
    if (true) {
        yield 'hi, Rose';
    }
    if (true) {
        yield 'World';
    }
}

const generatorHi = hiWorld();
console.log(generatorHi.next().value);
console.log(generatorHi.next().value);
console.log(generatorHi.next().value);