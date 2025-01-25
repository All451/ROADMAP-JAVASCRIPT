let frutas = ["maçã", "banana", "laranja"];
frutas.push("uva", "melancia");

console.log(frutas);  // Saída: ["maçã", "banana", "laranja", "uva", "melancia"]

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
let frutas2 = ["maçã", "banana", "laranja"];
let removido = frutas2.pop();

console.log(frutas2);  // Saída: ["maçã", "banana"]
console.log(removido);  // Saída: "laranja"


// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

let frutas3 = ["maçã", "banana", "laranja"];
let removido2 = frutas3.shift();

console.log(frutas3);  // Saída: ["banana", "laranja"]
console.log(removido2);  // Saída: "maçã"


// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
let frutas4 = ["banana", "laranja"];
frutas4.unshift("maçã", "uva");

console.log(frutas4);  // Saída: ["maçã", "uva", "banana", "laranja"]


// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

let frutas5 = ["maçã", "banana", "laranja"];
let indice = frutas5.indexOf("banana");

console.log(indice);  // Saída: 1


// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

let frutas6 = ["maçã", "banana", "laranja"];
frutas6.splice(1, 0, "uva");

console.log(frutas6);  // Saída: ["maçã", "uva", "banana", "laranja"]


// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

const pessoa = {
    nome: "Maria",
    idade: 25,
    apresentar: function() {
      console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    },
    aniversario: function() {
      this.idade++;
      console.log(`Feliz aniversário, ${this.nome}! Agora você tem ${this.idade} anos.`);
    }
  };
  
  pessoa.apresentar();   // Saída: Olá, meu nome é Maria e tenho 25 anos.
  pessoa.aniversario();  // Saída: Feliz aniversário, Maria! Agora você tem 26 anos.

  
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
