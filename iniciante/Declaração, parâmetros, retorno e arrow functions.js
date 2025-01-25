// Declaração de função
function saudacao(nome) {
    return `Olá, ${nome}!`;
}
  
  console.log(saudacao("João"));  // Saída: Olá, João!

//   xxxxxxxxxxxxxxxxxxxxxx
function somar(a, b) {
    return a + b; // Retorna a soma dos parâmetros
}
  
  console.log(somar(10, 5));  // Saída: 15

  //   xxxxxxxxxxxxxxxxxxxxxx
  function imprimirMensagem(mensagem) {
    console.log(mensagem); // Apenas imprime no console, sem retornar nada
}
  
imprimirMensagem("Olá, tudo bem?");  // Saída: Olá, tudo bem?

  //   xxxxxxxxxxxxxxxxxxxxxx
function saudacao(nome = "Visitante") {
    return `Olá, ${nome}!`;
}
  
console.log(saudacao());           // Saída: Olá, Visitante!
console.log(saudacao("João"));    // Saída: Olá, João!
  
// xxxxxxxxx
const saudacao = (nome) => `Olá, ${nome}!`;

console.log(saudacao("João"));  // Saída: Olá, João!

// xxxxxxxx
const mensagem = () => "Olá, mundo!";

console.log(mensagem());  // Saída: Olá, mundo!


// xxxxxxxxxxxxxxxxxxxxxx

const somar = (a, b) => a + b;

console.log(somar(10, 5));  // Saída: 15


// xxxxxxxxxxxxxxxxxxxxxx

const calcular = (a, b) => {
    const soma = a + b;
    return soma;
};
  
console.log(calcular(10, 5));  // Saída: 15

// Função tradicional
function Person(nome) {
    this.nome = nome;
    setTimeout(function() {
      console.log(this.nome); // 'this' se refere ao objeto global ou ao contexto de execução do setTimeout
    }, 1000);
}
  
const pessoa = new Person("João");
  // Saída: undefined (em navegadores modernos)
  
  
  // Arrow function
function Person2(nome) {
    this.nome = nome;
    setTimeout(() => {
      console.log(this.nome); // 'this' se refere ao contexto da função Person2
    }, 1000);
}
  
const pessoa2 = new Person2("Maria");
  // Saída: Maria
  
  
  