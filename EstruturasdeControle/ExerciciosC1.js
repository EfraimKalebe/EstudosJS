let numero = 11; // Visualizar numero de 1 a 10
for (let i = 1; i < numero; i++) {
  console.log(i);
}

let numeroPares = 2; // Para mostrar na tela números pares 2 a 20
while (numeroPares <= 20) {
  console.log(numeroPares);
  numeroPares += 2;
}

let numeros = [1, 2, 3, 4, 5, 6]; // Escrever um loop for que percorra um array mostrando so numeros imprares
for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 !== 0) {
    console.log(numeros[i]);
  }
}
