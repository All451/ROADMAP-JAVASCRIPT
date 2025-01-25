// =============================
// INTEGRAÇÃO COM MONGO DB
// =============================

// Configuração básica com Node.js e Mongoose
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;

// Middleware para JSON
app.use(express.json());

// Conectando ao MongoDB
mongoose
  .connect('mongodb://127.0.0.1:27017/meubanco', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Conectado ao MongoDB'))
  .catch((err) => console.error('Erro ao conectar:', err));

// Definindo um esquema e modelo
const ProdutoSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  preco: { type: Number, required: true },
  estoque: { type: Number, default: 0 },
});

const Produto = mongoose.model('Produto', ProdutoSchema);

// Rotas CRUD
app.get('/api/produtos', async (req, res) => {
  try {
    const produtos = await Produto.find();
    res.json(produtos);
  } catch (err) {
    res.status(500).json({ mensagem: 'Erro ao buscar produtos.' });
  }
});

app.post('/api/produtos', async (req, res) => {
  try {
    const novoProduto = new Produto(req.body);
    await novoProduto.save();
    res.status(201).json(novoProduto);
  } catch (err) {
    res.status(400).json({ mensagem: 'Erro ao salvar produto.', erro: err });
  }
});

app.put('/api/produtos/:id', async (req, res) => {
  try {
    const produtoAtualizado = await Produto.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(produtoAtualizado);
  } catch (err) {
    res.status(400).json({ mensagem: 'Erro ao atualizar produto.', erro: err });
  }
});

app.delete('/api/produtos/:id', async (req, res) => {
  try {
    await Produto.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (err) {
    res.status(400).json({ mensagem: 'Erro ao deletar produto.', erro: err });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

// =============================
// INTEGRAÇÃO COM FIREBASE
// =============================

// Configuração inicial com Firebase Admin SDK
const admin = require('firebase-admin');

// Carregar credenciais do Firebase (arquivo JSON gerado no Firebase Console)
const serviceAccount = require('./chave-firebase.json');

// Inicializar o Firebase Admin
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://seu-projeto.firebaseio.com',
});

const db = admin.firestore();

// Exemplo: Adicionar um documento ao Firestore
app.post('/api/usuarios', async (req, res) => {
  try {
    const { nome, email } = req.body;
    const novoUsuario = await db.collection('usuarios').add({ nome, email });
    res.status(201).json({ id: novoUsuario.id, nome, email });
  } catch (err) {
    res.status(500).json({ mensagem: 'Erro ao salvar usuário.', erro: err });
  }
});

// Exemplo: Buscar todos os documentos
app.get('/api/usuarios', async (req, res) => {
  try {
    const snapshot = await db.collection('usuarios').get();
    const usuarios = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    res.json(usuarios);
  } catch (err) {
    res.status(500).json({ mensagem: 'Erro ao buscar usuários.', erro: err });
  }
});

// Exemplo: Atualizar um documento
app.put('/api/usuarios/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { nome, email } = req.body;
    await db.collection('usuarios').doc(id).update({ nome, email });
    res.status(200).json({ id, nome, email });
  } catch (err) {
    res.status(500).json({ mensagem: 'Erro ao atualizar usuário.', erro: err });
  }
});

// Exemplo: Deletar um documento
app.delete('/api/usuarios/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await db.collection('usuarios').doc(id).delete();
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ mensagem: 'Erro ao deletar usuário.', erro: err });
  }
});

// =============================
// REACT CONSUMINDO API
// =============================

// React consumindo MongoDB ou Firebase (fetch ou Axios)
import React, { useState, useEffect } from 'react';

function ListaProdutos() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/produtos')
      .then((res) => res.json())
      .then((dados) => setProdutos(dados))
      .catch((err) => console.error('Erro ao buscar produtos:', err));
  }, []);

  return (
    <div>
      <h1>Lista de Produtos</h1>
      <ul>
        {produtos.map((produto) => (
          <li key={produto._id}>
            {produto.nome} - R$ {produto.preco.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaProdutos;

// Exemplo adaptável para Firebase:
// Substituir 'http://localhost:3000/api/produtos' pela URL da sua API Firebase.
