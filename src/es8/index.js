//Object.entries-Devuelve clave y valores de una matriz

const data = {
    frontend: 'Rose',
    backend: 'Andre',
    design: 'Dani',
}

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length)

//Object.value - Devuelve los valores de un objeto a yb arreglo 

const data = {
    frontend: 'Rose',
    backend: 'Andre',
    design: 'Dani',
}

const values = Object.values(data);
console.log(values);
console.log(values.length);

//Padding

const string = 'hi';
console.log(string.padStart(4, 'hi'));
console.log(string.padEnd(5, '---'));
console.log('food'.padEnd(12, '---'));

//Trailing-Comas
const obj = {
    name: 'Rose',
}

//Async-Await

const hiWorld = () => {
    return new Promise((resolve, reject) => {
        (false) ?
        setTimeout(() => resolve('Hi World'), 2000): reject(new Error('Test error'))
    })
};

const hiAsync = async() => {
    const hi = await hiWorld();
    console.log(hi);
}

hiAsync();

const anotherFunction = async() => {
    try {
        const hi = await hiWorld();
        console.log(hi);
    } catch (error) {
        throw new Error(error)
    }
}