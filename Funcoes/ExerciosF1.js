function multiplicar(a, b) {
  return a * b;
}

console.log(multiplicar(5, 3));

function saudacao(nome) {
  console.log(`Olá, ${nome}`); // Criar uma função onde recebe um nome como parâmetro
}
saudacao("Efraim");

function VerificarPar(a) {
  //Toda função ou qualquer outra coisa para saber se é par ou imper é só colocar NUMERO % 2 ===0
  if (a % 2 == 0) {
    console.log("Par");
  } else {
    console.log("Ímpar");
  }
}

VerificarPar(2);

function SomadeTresNumero(a, b, c) {
  // soma de três números
  return a + b + c;
}

console.log(SomadeTresNumero(5, 3, 3));

function comprimentoString(texto) {
  // Contar quantos caracteres tem na texto
  return texto.length;
}

console.log(comprimentoString("Efraim"));

function inverterString(texo) {
  // fazer uma string invertida
  return texo.split("").reverse("").join("");
}

const minhaString = "Efraim";
const stringInvertida = inverterString(minhaString);
console.log(stringInvertida);
