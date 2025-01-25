// 1. Prototypes
// O prototype é um mecanismo de herança em JavaScript. 
// Todos os objetos em JavaScript herdam de um objeto "prototype".

function Carro(marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;
  }
  
  // Adicionando um método ao prototype de Carro
  Carro.prototype.descrever = function() {
    console.log(`Este é um ${this.marca} ${this.modelo}.`);
  };
  
  const meuCarro = new Carro('Fiat', 'Uno');
  meuCarro.descrever(); // Saída: Este é um Fiat Uno.
  
  // A propriedade 'descrever' agora está disponível em todos os objetos criados com 'Carro' através do prototype.
  
  
  /* 2. Classes ES6
  As classes ES6 são uma forma de criar objetos e manipular herança em JavaScript. 
  Elas são uma sintaxe mais clara e moderna para trabalhar com o conceito de funções construtoras. */
  class Animal {
    constructor(nome, especie) {
      this.nome = nome;
      this.especie = especie;
    }
  
    // Método de instância
    falar() {
      console.log(`${this.nome} está falando!`);
    }
  
    // Método estático
    static categoria() {
      console.log('Os animais estão no reino Animalia.');
    }
  }
  
  const cachorro = new Animal('Rex', 'Cachorro');
  cachorro.falar(); // Saída: Rex está falando!
  Animal.categoria(); // Saída: Os animais estão no reino Animalia.
  
  
  /* 3. Getters e Setters
  Getters e Setters são métodos especiais para acessar e modificar as propriedades de um objeto. 
  Eles oferecem mais controle sobre como as propriedades de um objeto são acessadas ou modificadas. */
  
  class Pessoa {
    constructor(nome, idade) {
      this._nome = nome; // O "_" antes da variável é uma convenção para indicar que é uma propriedade privada.
      this._idade = idade;
    }
  
    // Getter para a propriedade 'nome'
    get nome() {
      return this._nome;
    }
  
    // Setter para a propriedade 'nome'
    set nome(nome) {
      if (nome.length < 3) {
        console.log('O nome precisa ter pelo menos 3 caracteres.');
      } else {
        this._nome = nome;
      }
    }
  
    // Getter para a propriedade 'idade'
    get idade() {
      return this._idade;
    }
  
    // Setter para a propriedade 'idade'
    set idade(idade) {
      if (idade < 0) {
        console.log('A idade não pode ser negativa.');
      } else {
        this._idade = idade;
      }
    }
  }
  
  const pessoa1 = new Pessoa('João', 25);
  
  console.log(pessoa1.nome);  // Saída: João
  pessoa1.nome = 'Lu'; // O nome precisa ter pelo menos 3 caracteres.
  pessoa1.nome = 'Lucas'; // O nome foi alterado com sucesso.
  console.log(pessoa1.nome);  // Saída: Lucas
  
  console.log(pessoa1.idade);  // Saída: 25
  pessoa1.idade = -5; // A idade não pode ser negativa.
  pessoa1.idade = 30; // A idade foi alterada com sucesso.
  console.log(pessoa1.idade);  // Saída: 30
  