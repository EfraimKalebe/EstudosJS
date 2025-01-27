let numeros = [1, 2, 3, 4, 5];

// .map() Cria um novo array com os resultados da chamada de uma função para cada elemento.
let quadrados = numeros.map((num) => num * num);
console.log(quadrados); // [1, 4, 9, 16, 25]

// .filter() Cria um novo array com todos os elementos que passaram no teste da função.
let pares = numeros.filter((num) => num % 2 === 0);
console.log(pares); // [2, 4]

// .reduce()Aplica uma função contra um acumulador e cada elemento do array (da esquerda para a direita) para reduzi-lo a um único valor.
let soma = numeros.reduce((acc, num) => acc + num, 0);
console.log(soma); // 15

// .push() Adiciona um ou mais elementos ao final de um array e retorna o novo comprimento do array.
numeros.push(6);
console.log(numeros); // [1, 2, 3, 4, 5, 6]

// .pop()Remove o último elemento de um array e o retorna.
let ultimo = numeros.pop();
console.log(ultimo); // 6
console.log(numeros); // [1, 2, 3, 4, 5]

// .slice() Retorna uma cópia rasa de uma parte do array.
let subArray = numeros.slice(1, 4);
console.log(subArray); // [2, 3, 4]

// .join() Junta todos os elementos de um array em uma string.
let stringNumeros = numeros.join(", ");
console.log(stringNumeros); // "1, 2, 3, 4, 5"
