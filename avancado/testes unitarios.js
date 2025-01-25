// Funções para teste
// Função simples que soma dois números
function soma(a, b) {
    return a + b;
  }
  
  // Função para verificar se um número é par
  function ePar(num) {
    return num % 2 === 0;
  }
  
  // Função de integração: Calcula a média de uma lista de números e verifica se é par
  function mediaEPar(numeros) {
    const somaTotal = numeros.reduce((acumulador, num) => acumulador + num, 0);
    const media = somaTotal / numeros.length;
    return ePar(media);
  }
  
  // Exemplo de teste unitário e de integração com Jest
  
  describe('Testando funções de soma e paridade', () => {
    
    // Teste unitário da função soma
    test('Deve retornar 5 quando somamos 2 e 3', () => {
      const resultado = soma(2, 3);
      expect(resultado).toBe(5); // Verifica se o resultado é 5
    });
  
    // Teste unitário da função ePar
    test('Deve retornar true para o número 4, que é par', () => {
      const resultado = ePar(4);
      expect(resultado).toBe(true); // Verifica se 4 é par
    });
  
    test('Deve retornar false para o número 5, que não é par', () => {
      const resultado = ePar(5);
      expect(resultado).toBe(false); // Verifica se 5 não é par
    });
  
    // Teste de integração
    test('Deve retornar true quando a média de 2, 4, 6 for par', () => {
      const resultado = mediaEPar([2, 4, 6]);
      expect(resultado).toBe(true); // Verifica se a média é par
    });
  
    test('Deve retornar false quando a média de 1, 3, 5 for ímpar', () => {
      const resultado = mediaEPar([1, 3, 5]);
      expect(resultado).toBe(false); // Verifica se a média é ímpar
    });
  });
  
  // Testando com mocks
  // Suponha que temos uma função que depende de uma API externa
  function buscarUsuario(api) {
    return api()
      .then(response => response.nome);
  }
  
  // Criamos um mock para a função 'api'
  test('Deve retornar o nome do usuário usando a API mockada', async () => {
    const apiMock = jest.fn().mockResolvedValue({ nome: 'João' });
    const resultado = await buscarUsuario(apiMock);
    expect(resultado).toBe('João');
    expect(apiMock).toHaveBeenCalledTimes(1); // Verifica se a API foi chamada
  });
  