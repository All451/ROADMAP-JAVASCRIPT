let idade = 20;

if (idade >= 18) {
  console.log("Você é maior de idade.");
} else {
  console.log("Você é menor de idade.");
}
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
let nota = 7;

if (nota >= 9) {
  console.log("Aprovado com distinção.");
} else if (nota >= 7) {
  console.log("Aprovado.");
} else {
  console.log("Reprovado.");
}


// xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
let cor = "vermelho";

switch (cor) {
  case "azul":
    console.log("A cor é azul.");
    break;
  case "vermelho":
    console.log("A cor é vermelha.");
    break;
  case "verde":
    console.log("A cor é verde.");
    break;
  default:
    console.log("Cor não reconhecida.");
}


// xxxxxxxxxxxxxxxxxxxxxxxxxxxxx

for (let i = 0; i < 5; i++) {
    console.log(i);
}
  // Saída: 0, 1, 2, 3, 4

// xxxxxxxxxxxxxxxxxx

let contador = 0;

while (contador < 5) {
  console.log(contador);
  contador++;
}
// Saída: 0, 1, 2, 3, 4


// xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
let contador1 = 0;

do {
  console.log(contador1);
  contador1++;
} while (contador1 < 5);
// Saída: 0, 1, 2, 3, 4


// xxxxxxxxxxxxxxxxxxxxxxxxxxxxx

const pessoa = { nome: "João", idade: 30, cidade: "Belém" };

for (let chave in pessoa) {
  console.log(chave + ": " + pessoa[chave]);
}
// Saída:
// nome: João
// idade: 30
// cidade: Belém


// xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
const frutas = ["maçã", "banana", "laranja"];

for (let fruta of frutas) {
  console.log(fruta);
}
// Saída:
// maçã
// banana
// laranja


// xxxxxxxxxxxxxxxxxxxxxxxxxxxxx

const numeros = [1, 2, 3, 4, 5];

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 === 0) {
    console.log(numeros[i] + " é par.");
  } else {
    console.log(numeros[i] + " é ímpar.");
  }
}
// Saída:
// 1 é ímpar.
// 2 é par.
// 3 é ímpar.
// 4 é par.
// 5 é ímpar.
