//flat-niveles de un array

let array = [1, 2, 3, 4, [1, 2, 3, [2, 3, 4]]];
console.log(array.flat(2))

//flatMap - Permite mapear cada elemento y pasarlo a una funcion
let array = [12, 3, 4];
console.log(array.flatMap(value => [value, value * 2]));

//Eliminar espacios en blanco de un String

let hi = '              hi world';
console.log(hi)
console.log(hi.trimStart())

let hi = 'hi world             ';
console.log(hi)
console.log(hi.trimEnd())


//try sin error

try {

} catch {
    error
}

//Transforma clave-valor de un array en un objeto 

let entries = [
    ["name", "oscar"],
    ["age", 32]
];
console.log(Object.fromEntries(entries));

//Object Symbol

let mySymbol = `My Symbol`;
let symbol = Symbol(mySymbol);
console.log(symbol.description);