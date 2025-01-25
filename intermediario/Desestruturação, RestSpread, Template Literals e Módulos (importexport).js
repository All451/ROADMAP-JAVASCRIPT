// 1. Desestruturação
// A desestruturação permite extrair valores de objetos ou arrays para variáveis de forma concisa.

const pessoa = {
    nome: 'Ana',
    idade: 30,
    cidade: 'São Paulo'
  };
  
  // Desestruturação de objetos
  const { nome, idade, cidade } = pessoa;
  console.log(nome);   // Saída: Ana
  console.log(idade);  // Saída: 30
  console.log(cidade); // Saída: São Paulo
  
  // Desestruturação com renomeação
  const { nome: nomePessoa, idade: idadePessoa } = pessoa;
  console.log(nomePessoa);  // Saída: Ana
  console.log(idadePessoa); // Saída: 30
  
  // Desestruturação de arrays
  const numeros = [1, 2, 3];
  const [a, b, c] = numeros;
  console.log(a, b, c); // Saída: 1 2 3
  
  // 2. Rest/Spread
  // O Rest permite agrupar valores, enquanto o Spread permite espalhar os valores de uma estrutura.
  
  const frutas = ['maçã', 'banana', 'laranja'];
  
  // Spread: espalhando os elementos do array em outro array
  const novasFrutas = [...frutas, 'manga', 'kiwi'];
  console.log(novasFrutas); // Saída: ["maçã", "banana", "laranja", "manga", "kiwi"]
  
  // Rest: agrupando elementos em um array
  const [primeira, ...resto] = frutas;
  console.log(primeira); // Saída: maçã
  console.log(resto);    // Saída: ["banana", "laranja"]
  
  // Rest em objetos
  const pessoa2 = { nome: 'Carlos', idade: 25, cidade: 'Rio de Janeiro' };
  const { nome: nome2, ...outrosDados } = pessoa2;
  console.log(nome2);     // Saída: Carlos
  console.log(outrosDados); // Saída: { idade: 25, cidade: 'Rio de Janeiro' }
  
  // 3. Template Literals
  // Template literals permitem a interpolação de expressões dentro de strings, usando crase (``) ao invés de aspas.
  
  const nomeUsuario = 'Lucas';
  const idadeUsuario = 28;
  
  // Usando template literals
  const mensagem = `Olá, meu nome é ${nomeUsuario} e tenho ${idadeUsuario} anos.`;
  console.log(mensagem); // Saída: Olá, meu nome é Lucas e tenho 28 anos.
  
  // 4. Módulos (import/export)
  // Os módulos permitem dividir o código em arquivos separados e reutilizá-los.
  
  
  // **No arquivo math.js** (Este seria um arquivo separado chamado math.js)
  export function soma(a, b) {
    return a + b;
  }
  
  export function multiplica(a, b) {
    return a * b;
  }
  
  
  // **No arquivo principal (main.js)**
  import { soma, multiplica } from './math.js'; // Importando funções do módulo math.js
  
  console.log(soma(3, 5));         // Saída: 8
  console.log(multiplica(3, 5));   // Saída: 15
  