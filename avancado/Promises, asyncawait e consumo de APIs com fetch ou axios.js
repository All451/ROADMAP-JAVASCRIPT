// Exemplo 1: Promises

// Função que retorna uma Promise
function fazerRequisicao() {
    return new Promise((resolve, reject) => {
      const sucesso = true; // Alterar para false para simular erro
  
      if (sucesso) {
        resolve("Requisição bem-sucedida!"); // Resolve a Promise se sucesso for true
      } else {
        reject("Erro na requisição."); // Rejeita a Promise se sucesso for false
      }
    });
  }
  
  // Usando .then() e .catch() para tratar o sucesso ou falha da Promise
  fazerRequisicao()
    .then((resposta) => {
      console.log(resposta); // Saída: Requisição bem-sucedida!
    })
    .catch((erro) => {
      console.error(erro); // Saída (se sucesso fosse false): Erro na requisição.
    });
  
  
  // Exemplo 2: async/await
  
  // Função assíncrona utilizando async/await
  async function buscarDados() {
    try {
      const resposta = await fazerRequisicao(); // Aguarda a Promise ser resolvida
      console.log(resposta); // Saída: Requisição bem-sucedida!
    } catch (erro) {
      console.error(erro); // Saída: Erro na requisição, caso haja falha
    }
  }
  
  // Chama a função que faz a requisição
  buscarDados();
  
  
  // Exemplo 3: Consumo de API com fetch
  
  // Função assíncrona para consumir uma API usando fetch
  async function obterUsuarios() {
    try {
      const resposta = await fetch('https://jsonplaceholder.typicode.com/users'); // Faz a requisição
      if (!resposta.ok) { // Verifica se a resposta foi bem-sucedida
        throw new Error('Falha na requisição');
      }
      
      const usuarios = await resposta.json(); // Converte a resposta para JSON
      console.log(usuarios); // Exibe os dados da API
  
    } catch (erro) {
      console.error(erro); // Lida com erros, como falha de rede ou falha na conversão
    }
  }
  
  // Chama a função que consome a API
  obterUsuarios();
  
  
  // Exemplo 4: Consumo de API com axios
  
  // Exemplo de consumo de API com axios
  const axios = require('axios'); // Usado em Node.js, mas também funciona no navegador
  
  // Função assíncrona para consumir a API usando axios
  async function obterUsuariosAxios() {
    try {
      const resposta = await axios.get('https://jsonplaceholder.typicode.com/users'); // Faz a requisição com GET
      console.log(resposta.data); // Exibe os dados retornados pela API
  
    } catch (erro) {
      console.error(erro); // Lida com erros de requisição ou outros
    }
  }
  
  // Chama a função que consome a API usando axios
  obterUsuariosAxios();
  