// Exemplo 1: Singleton

// O padrão Singleton garante que uma classe tenha apenas uma instância
// e fornece um ponto global de acesso a essa instância. Esse padrão é útil
// quando você deseja ter um controle centralizado de alguma parte do sistema
// (como configurações globais ou controle de recursos).

class Singleton {
    constructor() {
      // Verifica se a instância já foi criada
      if (Singleton.instance) {
        return Singleton.instance; // Se já existir uma instância, retorna ela
      }
      
      // Caso não exista uma instância, cria a instância
      this.valor = 0;
      Singleton.instance = this; // Salva a instância na propriedade 'instance'
    }
  
    // Método que incrementa o valor da instância
    incrementar() {
      this.valor++;
    }
  
    // Método que retorna o valor atual
    getValor() {
      return this.valor;
    }
  }
  
  // Criação da primeira instância do Singleton
  const instancia1 = new Singleton();
  instancia1.incrementar(); // Incrementa o valor da instância
  console.log(instancia1.getValor()); // Saída: 1
  
  // Criação da segunda instância, mas como o Singleton já existe, ela é a mesma da primeira
  const instancia2 = new Singleton();
  console.log(instancia2.getValor()); // Saída: 1 (mesma instância, valor preservado)
  
  // Como estamos utilizando o padrão Singleton, ambas as instâncias compartilham o mesmo estado.
  
  
  /**
   * Exemplo 2: Factory
   * 
   * O padrão Factory permite a criação de objetos sem precisar especificar a classe exata do objeto
   * que será criado. Ele encapsula a lógica de criação, fornecendo uma interface comum.
   */
  
  // Classes para criar objetos diferentes (Carro e Moto)
  class Carro {
    constructor(modelo, cor) {
      this.modelo = modelo;
      this.cor = cor;
    }
  
    // Método para descrever o carro
    descricao() {
      return `Carro: ${this.modelo} de cor ${this.cor}`;
    }
  }
  
  class Moto {
    constructor(modelo, cor) {
      this.modelo = modelo;
      this.cor = cor;
    }
  
    // Método para descrever a moto
    descricao() {
      return `Moto: ${this.modelo} de cor ${this.cor}`;
    }
  }
  
  // A fábrica de veículos cria objetos do tipo Carro ou Moto
  class FabricaDeVeiculos {
    static criarVeiculo(tipo, modelo, cor) {
      // Verifica o tipo de veículo que deve ser criado
      if (tipo === 'carro') {
        return new Carro(modelo, cor); // Cria e retorna um objeto Carro
      } else if (tipo === 'moto') {
        return new Moto(modelo, cor); // Cria e retorna um objeto Moto
      }
      // Caso o tipo não seja válido, lança um erro
      throw new Error('Tipo de veículo desconhecido');
    }
  }
  
  // Criando objetos usando a fábrica
  const carro1 = FabricaDeVeiculos.criarVeiculo('carro', 'Fusca', 'azul');
  console.log(carro1.descricao()); // Saída: Carro: Fusca de cor azul
  
  const moto1 = FabricaDeVeiculos.criarVeiculo('moto', 'CB500', 'preta');
  console.log(moto1.descricao()); // Saída: Moto: CB500 de cor preta
  
  
  /**
   * Exemplo 3: Module
   * 
   * O padrão Module é usado para encapsular funcionalidades e variáveis em um módulo, protegendo-as
   * do escopo global. O módulo oferece uma interface pública para interação.
   */
  
  // O módulo Calculadora encapsula o valor de 'resultado' e suas operações
  const ModuloCalculadora = (() => {
    let resultado = 0; // Variável privada
  
    // A interface pública para interagir com o resultado
    return {
      somar: (valor) => {
        resultado += valor; // Soma o valor ao resultado
        return resultado;    // Retorna o novo valor de resultado
      },
      subtrair: (valor) => {
        resultado -= valor; // Subtrai o valor do resultado
        return resultado;    // Retorna o novo valor de resultado
      },
      getResultado: () => resultado // Retorna o valor atual de resultado
    };
  })();
  
  // Utilizando o módulo
  console.log(ModuloCalculadora.somar(5)); // Saída: 5
  console.log(ModuloCalculadora.somar(3)); // Saída: 8
  console.log(ModuloCalculadora.subtrair(2)); // Saída: 6
  console.log(ModuloCalculadora.getResultado()); // Saída: 6
  
  // O módulo esconde o estado interno (variável 'resultado') e só expõe os métodos necessários,
  // protegendo-o do acesso direto e evitando alterações indesejadas.
  
  
  /**
   * Exemplo 4: Observer
   * 
   * O padrão Observer permite que um objeto (o sujeito) notifique múltiplos objetos (observadores)
   * sobre alterações em seu estado. O sujeito mantém uma lista de observadores e os notifica
   * quando há mudanças. Esse padrão é útil para eventos e atualizações assíncronas.
   */
  
  // Classe Sujeito mantém uma lista de observadores
  class Sujeito {
    constructor() {
      this.observadores = []; // Lista de observadores
    }
  
    // Método para adicionar observador à lista
    adicionarObservador(observador) {
      this.observadores.push(observador); // Adiciona um observador à lista
    }
  
    // Método para notificar todos os observadores
    notificarObservadores() {
      // Itera sobre todos os observadores e chama o método de atualização
      this.observadores.forEach((observador) => observador.atualizar());
    }
  }
  
  // Classe Observador, que reage às mudanças
  class Observador {
    constructor(nome) {
      this.nome = nome; // Nome do observador
    }
  
    // Método que é chamado quando o sujeito notifica
    atualizar() {
      console.log(`${this.nome} foi notificado!`); // Exibe que o observador foi notificado
    }
  }
  
  // Criando o sujeito e observadores
  const sujeito = new Sujeito();
  
  const observador1 = new Observador('Observador 1');
  const observador2 = new Observador('Observador 2');
  
  // Adicionando observadores ao sujeito
  sujeito.adicionarObservador(observador1);
  sujeito.adicionarObservador(observador2);
  
  // O sujeito notifica todos os observadores sobre uma mudança
  sujeito.notificarObservadores(); 
  // Saída:
  // Observador 1 foi notificado!
  // Observador 2 foi notificado!
  
  // O padrão Observer é útil quando temos múltiplos componentes que precisam reagir
  // a eventos ou mudanças de estado de um sujeito (como em atualizações de UI ou eventos em sistemas).
  