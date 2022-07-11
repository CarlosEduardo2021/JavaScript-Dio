// o que são vetores ou arrays

// como declarar um array

//let array = ['string', 1, true];
//console.log(array);

//let array2 = ['string', 1, true, ['array'], ['array3'], ['array4']];
//console.log(array2);

// selecionar um item do array, nesse caso o zero
let array = ['string', 1, true, ['array'], ['array3'], ['array4']];
console.log(array[0]);

// forEach

array.forEach(function(item, index){console.log(item, index)});

// push - add um item no final do array

array.push([]);
console.log(array)

// pop - apaga o ultimo item do array
array.pop();
console.log(array);

// shift - retira um iten do inicio do array
array.shift();
console.log(array)

// unshift - adiciona um item no inicio do array
array.unshift('novo item');
console.log(array);

// indexOf - retorna o indice de um valor
console.log(array.indexOf(true))

// splice - remove ou substitui um item pelo indice
array.splice(0, 3);
console.log(array)

// slice - retoma uma parte de um array existente
let novoArray = array.slice(0, 3);
console.log(novoArray);







