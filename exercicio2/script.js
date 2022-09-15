// # Exercício 2
// Crie um array de números que contenha 8 números.
// Depois disso, utilize este array para criar duas funcões de array `map()`:

// 1. A primeira deve retornar um novo array contendo os números múltiplicados por 3, Crie uma `const triplos`, e guarde o valor do array nesta const;
// 2. A segunda deve retornar um novo array contendo os números divididos por 2. Crie uma `const metades`, e guarde o valor do array nesta const;


const array = [23,11,62,85,14,2,4,98]

const triplicaArray = array.map(numeros => {
    return numeros*3
})

console.log(triplicaArray)



const divideArray = array.map(numeros => numeros/2);

console.log(divideArray)




