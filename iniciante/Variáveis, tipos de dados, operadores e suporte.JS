// Declarando variáveis
var nome = "João";   // Escopo global/função
let idade = 30;      // Escopo de bloco
const PI = 3.14;     // Constante, valor fixo

// Imprimindo no console
console.log(nome);  // João
console.log(idade); // 30
console.log(PI);    // 3.14

// String
const mensagem = "Olá, mundo!";
console.log(mensagem);  // Olá, mundo!

// Number
let nota = 9.5;
console.log(idade);  // 25
console.log(nota);   // 9.5

// Boolean
const ativo = true;
console.log(ativo);  // true

// Null
let valor = null;
console.log(valor);  // null

// Undefined
let teste;  // Variável declarada, mas não inicializada
console.log(teste);  // undefined

// Object (Objeto literal)
const pessoa = { nome: "João", idade: 25 };
console.log(pessoa);  // { nome: "João", idade: 25 }

// Array
const lista = [1, 2, 3];
console.log(lista);  // [1, 2, 3]

// Operações aritméticas
let resultado = 10 + 5;   // Soma
let resto = 10 % 3;       // Resto da divisão
console.log(resultado);  // 15
console.log(resto);      // 1

let x = 10;    // Atribuição simples
x += 5;        // x = x + 5
console.log(x); // 15

console.log(10 === "10");  // false (compara tipo)
console.log(10 == "10");   // true (não compara tipo)

console.log(true && false); // false
console.log(true || false); // true
console.log(!true);         // false

const idade2 = 18;
const resultado2 = idade >= 18 ? "Adulto" : "Menor de idade";
console.log(resultado);  // Adulto

console.log(typeof 42);      // "number"
console.log(typeof "texto"); // "string"
console.log(typeof true);    // "boolean"
