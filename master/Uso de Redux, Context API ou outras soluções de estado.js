// ==========================================
// **Uso de Redux, Context API e Outras Soluções de Estado**
// ==========================================

// 1. **Redux**
// O Redux é uma biblioteca de gerenciamento de estado previsível para aplicativos JavaScript. Ele centraliza o estado da aplicação em um único "store" e usa ações (actions) e redutores (reducers) para modificar esse estado de forma previsível.

// Instalação do Redux:
// npm install redux react-redux

// Criando o Store com Redux:

// Ação (Action)
const adicionarItem = (item) => ({
    type: 'ADICIONAR_ITEM',
    payload: item,
  });
  
  // Redutor (Reducer)
  const itensReducer = (state = [], action) => {
    switch (action.type) {
      case 'ADICIONAR_ITEM':
        return [...state, action.payload];
      default:
        return state;
    }
  };
  
  // Criando o Store
  const { createStore } = require('redux');
  const store = createStore(itensReducer);
  
  // Assinando para obter o estado
  store.subscribe(() => console.log(store.getState()));
  
  // Despachando ações para modificar o estado
  store.dispatch(adicionarItem('Item 1'));  // Saída: ['Item 1']
  store.dispatch(adicionarItem('Item 2'));  // Saída: ['Item 1', 'Item 2']
  
  // ==========================================
  // 2. **Context API**
  // A Context API é uma solução para o gerenciamento de estado no React, especialmente útil para compartilhar dados entre componentes sem precisar passar as props manualmente para cada nível da árvore de componentes.
  
  import React, { createContext, useState, useContext } from 'react';
  
  // Criando um contexto
  const ContextoItens = createContext();
  
  // Componente de provedor (Provider)
  const ItensProvider = ({ children }) => {
    const [itens, setItens] = useState([]);
  
    const adicionarItem = (item) => {
      setItens([...itens, item]);
    };
  
    return (
      <ContextoItens.Provider value={{ itens, adicionarItem }}>
        {children}
      </ContextoItens.Provider>
    );
  };
  
  // Componente consumidor
  const ComponenteItens = () => {
    const { itens, adicionarItem } = useContext(ContextoItens);
  
    return (
      <div>
        <button onClick={() => adicionarItem('Novo Item')}>
          Adicionar Item
        </button>
        <ul>
          {itens.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  // Uso do Context API em um componente de aplicação
  const App = () => {
    return (
      <ItensProvider>
        <ComponenteItens />
      </ItensProvider>
    );
  };
  
  // ==========================================
  // 3. **Outras Soluções de Estado**
  
  /*
  - **MobX**: MobX é uma biblioteca para gerenciamento de estado reativo. Ela permite que os estados sejam observáveis e atualizados de maneira reativa.
    
  - **Recoil**: Recoil é uma biblioteca de gerenciamento de estado mais moderna que permite a criação de estados atômicos e compartilhamento fácil entre componentes.
    
  - **Zustand**: Zustand é uma solução simples de gerenciamento de estado para React, baseada em hooks. Seu objetivo é ser leve e flexível, evitando boilerplate.
  
  Exemplo com **Zustand**:
    
  import create from 'zustand';
  
  // Criando o store
  const useStore = create((set) => ({
    itens: [],
    adicionarItem: (item) => set((state) => ({ itens: [...state.itens, item] })),
  }));
  
  // Componente que usa o store
  const ComponenteZustand = () => {
    const { itens, adicionarItem } = useStore();
    
    return (
      <div>
        <button onClick={() => adicionarItem('Novo Item')}>
          Adicionar Item
        </button>
        <ul>
          {itens.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  // ==========================================
  // **Resumo das Soluções de Estado**
  
  /*
  1. **Redux**:
     - Armazena o estado da aplicação em um único store.
     - Utiliza actions e reducers para atualizar o estado.
     - Ideal para grandes aplicativos com um estado global complexo.
     
  2. **Context API**:
     - Gerencia o estado de forma simples no React.
     - Útil para compartilhar dados entre componentes sem a necessidade de passar props manualmente.
     
  3. **MobX**:
     - Bibliotecas reativas para gerenciar estado de forma simples e eficiente.
     - Usa observables e reações para atualizar automaticamente a UI.
  
  4. **Zustand**:
     - Solução simples e flexível para gerenciamento de estado no React.
     - Baseada em hooks e sem a complexidade do Redux.
  
  5. **Recoil**:
     - Gerenciamento de estado atômico, permitindo compartilhamento de estados entre componentes de forma eficiente.
  */
  
  