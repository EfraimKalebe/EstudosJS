/* 
var = Escopo de Função, pode ser redeclarada e atualizada
let = Escopo de bloco, pode ser atualizada mas não redeclarada no mesmo escopo
const = Escopo de bloco, não pode ser atualizada nem redeclarada. Usada para constantes
*/

var nome = "Efraim";
var numeros = 2123;

nome = "Gabriela";
numeros = 234;

console.log(nome, numeros);

const nome2 = "Efraim";
const numeros2 = 345;

nome2 = "Abelha"; // erro de declaração de vaáveis
numeros2 = 564;

console.log(nome2, numeros2);

/*
var =   se precisar de escopo de função (menos comunm hoje em dia)
let =   para variáveis que podem muar 
*/

const valor = "Olá Mundo";
valor = "Mundo Olá";
//const = para variáveis que não podem mudar
