// 1. Uso de try...catch
// O bloco try...catch é usado para capturar e tratar erros durante a execução do código.
// O código dentro do try é executado normalmente, mas se ocorrer um erro, o código dentro do catch é executado.

function dividir(a, b) {
    try {
      if (b === 0) {
        throw new Error('Não é possível dividir por zero!'); // Lançando um erro personalizado
      }
      const resultado = a / b;
      console.log(`Resultado: ${resultado}`);
    } catch (erro) {
      console.error(`Erro: ${erro.message}`); // Exibindo a mensagem do erro
    }
  }
  
  dividir(10, 2); // Saída: Resultado: 5
  dividir(10, 0); // Saída: Erro: Não é possível dividir por zero!
  
  // 2. Lançamento de Erros Personalizados com throw
  // O comando throw é usado para lançar erros personalizados em qualquer parte do código.
  
  function validaIdade(idade) {
    if (idade < 18) {
      throw new Error('Idade deve ser maior ou igual a 18.');
    }
    console.log('Idade válida.');
  }
  
  try {
    validaIdade(15); // Lançará um erro, pois a idade é menor que 18
  } catch (erro) {
    console.error(erro.message); // Saída: Idade deve ser maior ou igual a 18.
  }
  
  try {
    validaIdade(20); // Idade válida, nada será lançado
  } catch (erro) {
    console.error(erro.message);
  }
  
  // 3. Uso de throw dentro de try...catch
  // Também podemos lançar um erro dentro de um bloco try para ser capturado por um bloco catch.
  
  function processarDados(dado) {
    try {
      if (!dado) {
        throw new Error('Dado não encontrado.');
      }
      console.log('Processando dados...');
      // Simulação de processamento
    } catch (erro) {
      console.error(`Falha ao processar dados: ${erro.message}`);
    }
  }
  
  processarDados('Texto válido'); // Saída: Processando dados...
  processarDados(null); // Saída: Falha ao processar dados: Dado não encontrado.
  