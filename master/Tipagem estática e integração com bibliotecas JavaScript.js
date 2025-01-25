// =============================
// CONFIGURAÇÃO INICIAL COM TYPESCRIPT
// =============================

// Arquivo tsconfig.json básico para configurar o TypeScript
// {
//     "compilerOptions": {
//       "target": "ES6",
//       "module": "commonjs",
//       "strict": true,
//       "esModuleInterop": true,
//       "outDir": "./dist",
//       "rootDir": "./src",
//       "resolveJsonModule": true
//     },
//     "include": ["src/**/*"],
//     "exclude": ["node_modules"]
//   }
  
  // =============================
  // EXEMPLOS PRÁTICOS
  // =============================
  
  // Definindo tipos básicos
  const somar = (a: number, b: number): number => {
    return a + b;
  };
  
  // Uso de interfaces para tipar objetos
  interface Produto {
    id: string;
    nome: string;
    preco: number;
    estoque: number;
  }
  
  // Exemplo de função que recebe e retorna objetos tipados
  const calcularEstoqueTotal = (produtos: Produto[]): number => {
    return produtos.reduce((total, produto) => total + produto.estoque, 0);
  };
  
  // =============================
  // INTEGRAÇÃO COM BIBLIOTECAS JAVASCRIPT
  // =============================
  
  import express, { Request, Response } from 'express';
  import mongoose from 'mongoose';
  
  const app = express();
  const PORT = 3000;
  
  // Middleware para JSON com tipagem
  app.use(express.json());
  
  // Conexão ao MongoDB
  mongoose
    .connect('mongodb://127.0.0.1:27017/meubanco', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('Conectado ao MongoDB'))
    .catch((err) => console.error('Erro ao conectar:', err));
  
  // Tipagem do esquema e modelo do MongoDB
  interface ProdutoDocument extends mongoose.Document {
    nome: string;
    preco: number;
    estoque: number;
  }
  
  const ProdutoSchema = new mongoose.Schema<ProdutoDocument>({
    nome: { type: String, required: true },
    preco: { type: Number, required: true },
    estoque: { type: Number, default: 0 },
  });
  
  const ProdutoModel = mongoose.model<ProdutoDocument>('Produto', ProdutoSchema);
  
  // Rotas com tipagem Request e Response
  app.get('/api/produtos', async (req: Request, res: Response): Promise<void> => {
    try {
      const produtos = await ProdutoModel.find();
      res.json(produtos);
    } catch (err) {
      res.status(500).json({ mensagem: 'Erro ao buscar produtos.' });
    }
  });
  
  app.post('/api/produtos', async (req: Request, res: Response): Promise<void> => {
    try {
      const novoProduto = new ProdutoModel(req.body);
      await novoProduto.save();
      res.status(201).json(novoProduto);
    } catch (err) {
      res.status(400).json({ mensagem: 'Erro ao salvar produto.', erro: err });
    }
  });
  
  // =============================
  // EXEMPLO DE FRONTEND EM REACT COM TYPESCRIPT
  // =============================
  
  import React, { useEffect, useState } from 'react';
  
  interface Produto {
    id: string;
    nome: string;
    preco: number;
    estoque: number;
  }
  
  const ListaProdutos: React.FC = () => {
    const [produtos, setProdutos] = useState<Produto[]>([]);
  
    useEffect(() => {
      fetch('http://localhost:3000/api/produtos')
        .then((res) => res.json())
        .then((dados: Produto[]) => setProdutos(dados))
        .catch((err) => console.error('Erro ao buscar produtos:', err));
    }, []);
  
    return (
      <div>
        <h1>Lista de Produtos</h1>
        <ul>
          {produtos.map((produto) => (
            <li key={produto.id}>
              {produto.nome} - R$ {produto.preco.toFixed(2)}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default ListaProdutos;
  
  // =============================
  // EXEMPLO DE TIPAGEM EM FIREBASE
  // =============================
  
  import admin from 'firebase-admin';
  
  // Inicializando Firebase Admin
  const serviceAccount = require('./chave-firebase.json');
  
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://seu-projeto.firebaseio.com',
  });
  
  const db = admin.firestore();
  
  // Tipando documentos do Firestore
  interface Usuario {
    id?: string; // Opcional, pois será gerado pelo Firestore
    nome: string;
    email: string;
  }
  
  // Função para adicionar usuário ao Firestore
  const adicionarUsuario = async (usuario: Usuario): Promise<void> => {
    const ref = await db.collection('usuarios').add(usuario);
    console.log(`Usuário adicionado com ID: ${ref.id}`);
  };
  
  // Função para buscar usuários do Firestore
  const listarUsuarios = async (): Promise<Usuario[]> => {
    const snapshot = await db.collection('usuarios').get();
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as Usuario));
  };
  