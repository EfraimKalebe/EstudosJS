let numero = 10;

//if /else
if (numero > 0) {
  console.log("Positivo");
} else {
  console.log("Negativo");
}

//switch
switch (numero) {
  case 0:
    console.log("Zero");
    break;
  case 10:
    console.log("Dez");
    break;
  default:
    console.log("Outro número");
}

//for
for (let i = 0; i < 5; i++) {
  console.log(i);
}

//while
let j = 0;
while (j < 5) {
  console.log(j);
  j++;
}

//forEach
let frutas = ["maça", "banana", "laranja"];
frutas.forEach((frutas) => console.log(frutas));
