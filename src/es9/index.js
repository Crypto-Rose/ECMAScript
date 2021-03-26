const obj = {
    name: 'Rose',
    age: 16,
    country: 'CO',
};

let { name, ...all } = obj;

console.log(all)


//Propagación

const obj = {
    name: 'Rose',
    age: 16,
}

const obj1 = {
    ...obj,
    country: 'CO',
}

console.log(obj1);

//Promise.finally

const hiWorld = () => {
    return new Promise((resolve, reject) => {
        (true) ?
        setTimeout(() => resolve('OK'), 2000): reject(new Error('Error'))
    })
}

hiWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('Finaliza 🥳'))

//Regex
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20')
const year = match[1]
const month = match[2]
const day = match[3]

console.log(year, month, day)