// 1. Closures
// Closure ocorre quando uma função "lembra" o contexto de onde foi criada, 
// mesmo quando é chamada fora desse contexto.
function criaContador() {
    let contador = 0; // Variável 'contador' é criada dentro da função externa.
  
    // A função interna (que é retornada) tem acesso à variável 'contador' 
    // da função externa, criando um "closure".
    return function() {
      contador++; // A função interna modifica a variável 'contador' a cada chamada.
      console.log(contador);
    };
  }
  
  // Criando duas instâncias de contadores independentes.
  const contador1 = criaContador();
  contador1(); // 1 - Primeira chamada, contador é incrementado para 1.
  contador1(); // 2 - Segunda chamada, contador é incrementado para 2.
  
  const contador2 = criaContador(); 
  contador2(); // 1 - Novo contador, começa do 1, independente do contador1.
  
  
  // 2. Callbacks
  // Callback é uma função passada como argumento para outra função que será executada em um momento posterior.
  function saudacao(nome, callback) {
    console.log(`Olá, ${nome}!`);
    // A função callback é executada após a saudação
    callback();
  }
  
  function despedida() {
    console.log('Até logo!');
  }
  
  // Passando a função 'despedida' como callback
  saudacao('João', despedida); 
  // Saída:
  // Olá, João!
  // Até logo!
  
  
  // 3. Métodos de Array: map, filter e reduce
  
  // 'map()' cria um novo array com os resultados da aplicação de uma função em cada item do array original.
  const numeros = [1, 2, 3, 4, 5];
  const quadrados = numeros.map(num => num * num); // Elevando cada número ao quadrado.
  console.log(quadrados); // Saída: [1, 4, 9, 16, 25]
  
  // 'filter()' cria um novo array contendo apenas os elementos que passaram no teste da função.
  const numeros2 = [1, 2, 3, 4, 5, 6];
  const pares = numeros2.filter(num => num % 2 === 0); // Filtrando números pares.
  console.log(pares); // Saída: [2, 4, 6]
  
  // 'reduce()' aplica uma função acumuladora sobre os elementos de um array, reduzindo o array a um único valor.
  const numeros3 = [1, 2, 3, 4, 5];
  const soma = numeros3.reduce((acumulador, num) => acumulador + num, 0); 
  // A função recebe um acumulador que começa com 0 e vai somando os elementos.
  console.log(soma); // Saída: 15
  
  
  // 4. Adicionando mais exemplos: map, filter e reduce
  
  // 'map()' exemplo com strings, transformando cada nome para maiúsculo.
  const nomes = ['ana', 'luan', 'maria'];
  const nomesMaiusculos = nomes.map(nome => nome.toUpperCase());
  console.log(nomesMaiusculos); // Saída: ['ANA', 'LUAN', 'MARIA']
  
  // 'filter()' exemplo para filtrar números maiores que 3.
  const numeros4 = [1, 2, 3, 4, 5, 6];
  const maioresQueTres = numeros4.filter(num => num > 3);
  console.log(maioresQueTres); // Saída: [4, 5, 6]
  
  // 'reduce()' exemplo para calcular a multiplicação de todos os elementos.
  const numeros5 = [1, 2, 3, 4];
  const multiplicacao = numeros5.reduce((acumulador, num) => acumulador * num, 1); 
  // Inicia com 1 e vai multiplicando os elementos.
  console.log(multiplicacao); // Saída: 24
  