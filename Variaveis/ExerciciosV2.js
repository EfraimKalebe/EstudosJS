let VariavelGlobal = "EstadosUnidos"; // uma variável global e outra local dentro de uma função. Dá erro

function exemplo() {
  let VariavelLocal = "Belém";
  console.log(VariavelGlobal);
  console.log(VariavelLocal);
}

exemplo();

console.log(VariavelGlobal);
