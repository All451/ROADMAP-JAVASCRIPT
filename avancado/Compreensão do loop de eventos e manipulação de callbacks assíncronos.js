// Exemplo 1: Compreensão do Loop de Eventos e Callbacks Assíncronos

// Função que simula uma operação assíncrona
function operacaoAssincrona(callback) {
    console.log("Operação assíncrona iniciada.");
    
    // Simula um delay (por exemplo, uma requisição de rede)
    setTimeout(() => {
      console.log("Operação assíncrona concluída.");
      callback(); // Chama o callback quando a operação termina
    }, 2000);
  }
  
  // Função de callback que será passada para a operação assíncrona
  function finalizar() {
    console.log("Callback executado após a operação assíncrona.");
  }
  
  // Executando a operação assíncrona e passando o callback
  operacaoAssincrona(finalizar);
  
  console.log("Este código é executado enquanto a operação assíncrona está rodando.");
  
  // Explicação: O loop de eventos permite que o código continue executando outras instruções enquanto espera a operação assíncrona terminar.
  // O callback será executado após o tempo de delay do setTimeout, ou seja, após 2 segundos.
  
  // Exemplo 2: Vários Callbacks Assíncronos
  
  console.log("Início");
  
  setTimeout(() => {
    console.log("Callback 1 executado após 1 segundo");
  }, 1000);
  
  setTimeout(() => {
    console.log("Callback 2 executado após 0.5 segundos");
  }, 500);
  
  console.log("Fim");
  
  // Explicação: O callback 2 (0.5s) será executado antes do callback 1 (1s), pois o setTimeout com menor tempo é executado primeiro.
  // A ordem de execução depende do tempo especificado no setTimeout.
  
  // Exemplo 3: Promessas e Callbacks com .then() e .catch()
  
  // Simulação de uma operação assíncrona com Promises
  function operacaoAssincronaComPromise() {
    return new Promise((resolve, reject) => {
      console.log("Operação assíncrona com promise iniciada.");
  
      setTimeout(() => {
        const sucesso = true; // Pode ser alterado para false para testar rejeição
        if (sucesso) {
          resolve("Operação concluída com sucesso.");
        } else {
          reject("Houve um erro na operação.");
        }
      }, 2000);
    });
  }
  
  // Usando .then() e .catch() para lidar com sucesso e erro
  operacaoAssincronaComPromise()
    .then((mensagem) => console.log(mensagem)) // Sucesso
    .catch((erro) => console.log(erro)); // Erro
  
  console.log("Este código é executado enquanto a operação assíncrona com promise está rodando.");
  
  // Explicação: Usando Promises, a operação assíncrona resolve ou rejeita a promise.
  // Quando resolve, executa o .then(), e quando rejeita, executa o .catch().
  // Isso é mais organizado que o uso de callbacks, ajudando a evitar o callback hell.
  
  // Exemplo 4: Event Loop em Ação
  
  console.log("Início do Event Loop");
  
  setTimeout(() => {
    console.log("Executando o primeiro setTimeout após 2 segundos");
  }, 2000);
  
  setTimeout(() => {
    console.log("Executando o segundo setTimeout após 1 segundo");
  }, 1000);
  
  console.log("Fim do código");
  
  
  // Explicação: O Event Loop vai garantir que o código assíncrono seja executado quando o tempo de espera (setTimeout) se esgotar.
  // O segundo setTimeout, que tem 1 segundo, será executado antes do primeiro setTimeout, com 2 segundos, mesmo que tenha sido chamado depois.
  
  // **Fluxo do Event Loop**:
  // 1. O código é executado de forma síncrona até o primeiro setTimeout.
  // 2. Os dois setTimeouts são colocados na fila de eventos, mas o segundo (com 1 segundo) vai para a fila antes.
  // 3. Quando o tempo expira, o Event Loop move o callback do segundo setTimeout para a pilha de execução primeiro, e depois o do primeiro.
  
  // Exemplo 5: Explicação de Callbacks Assíncronos
  
  // O código assíncrono não bloqueia a execução do restante do código.
  // Ele é colocado em uma fila e o Event Loop garante que seja executado quando possível.
  
  function exemploCallbackAssincrono() {
    console.log("Início da operação assíncrona.");
    
    setTimeout(() => {
      console.log("Operação assíncrona finalizada.");
    }, 3000); // 3 segundos de delay
    
    console.log("Esse código é executado enquanto a operação assíncrona está aguardando.");
  }
  
  exemploCallbackAssincrono();
  
  // Saída esperada:
  // Início da operação assíncrona.
  // Esse código é executado enquanto a operação assíncrona está aguardando.
  // Operação assíncrona finalizada. (Após 3 segundos)
  