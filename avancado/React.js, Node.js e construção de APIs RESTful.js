// =============================
// REACT.JS
// =============================

// Exemplo 1: Componente funcional básico
// Um componente React funcional que exibe uma mensagem simples.
import React from 'react';

function Saudacao({ nome }) {
  return <h1>Olá, {nome}!</h1>;
}

export default Saudacao;

// Uso no App.js
// import Saudacao from './Saudacao';
// <Saudacao nome="João" /> 
// Saída: Olá, João!

// Exemplo 2: Gerenciamento de estado com useState
// Adicionando um contador usando o hook useState.
import React, { useState } from 'react';

function Contador() {
  const [contador, setContador] = useState(0);

  const incrementar = () => setContador(contador + 1);

  return (
    <div>
      <p>Contador: {contador}</p>
      <button onClick={incrementar}>Incrementar</button>
    </div>
  );
}

export default Contador;

// Exemplo 3: Fetching de dados com useEffect
// Buscando dados de uma API ao carregar o componente.
import React, { useState, useEffect } from 'react';

function ListaUsuarios() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((dados) => setUsuarios(dados));
  }, []);

  return (
    <ul>
      {usuarios.map((usuario) => (
        <li key={usuario.id}>{usuario.name}</li>
      ))}
    </ul>
  );
}

export default ListaUsuarios;

// =============================
// NODE.JS (API RESTFUL)
// =============================

// Configurando uma API básica com Node.js e Express
const express = require('express');
const app = express();
const PORT = 3000;

// Middleware para analisar JSON no corpo da requisição
app.use(express.json());

// Rota GET
app.get('/api/usuarios', (req, res) => {
  const usuarios = [
    { id: 1, nome: 'João' },
    { id: 2, nome: 'Maria' },
  ];
  res.json(usuarios);
});

// Rota POST
app.post('/api/usuarios', (req, res) => {
  const { nome } = req.body;
  const novoUsuario = { id: Date.now(), nome };
  res.status(201).json(novoUsuario);
});

// Servidor ouvindo na porta definida
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

// =============================
// API RESTFUL INTEGRADA COM MONGO DB
// =============================
const mongoose = require('mongoose');

// Conectando ao banco MongoDB
mongoose
  .connect('mongodb://127.0.0.1:27017/meubanco', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Conectado ao MongoDB'))
  .catch((err) => console.error('Erro ao conectar:', err));

// Definindo um esquema e modelo do MongoDB
const UsuarioSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  email: { type: String, required: true, unique: true },
});

const Usuario = mongoose.model('Usuario', UsuarioSchema);

// API com integração ao MongoDB
app.get('/api/usuarios', async (req, res) => {
  try {
    const usuarios = await Usuario.find(); // Obtendo todos os usuários
    res.json(usuarios);
  } catch (err) {
    res.status(500).json({ mensagem: 'Erro ao buscar usuários.' });
  }
});

app.post('/api/usuarios', async (req, res) => {
  try {
    const { nome, email } = req.body;
    const novoUsuario = new Usuario({ nome, email });
    await novoUsuario.save(); // Salvando o usuário no banco
    res.status(201).json(novoUsuario);
  } catch (err) {
    res.status(400).json({ mensagem: 'Erro ao salvar usuário.', erro: err });
  }
});

// =============================
// REACT + API (INTEGRAÇÃO)
// =============================

// Frontend React consumindo API (Fetch ou Axios)
import React, { useState, useEffect } from 'react';

function UsuariosAPI() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/usuarios')
      .then((res) => res.json())
      .then((dados) => setUsuarios(dados))
      .catch((err) => console.error('Erro ao buscar usuários:', err));
  }, []);

  return (
    <div>
      <h1>Lista de Usuários</h1>
      <ul>
        {usuarios.map((usuario) => (
          <li key={usuario.id}>{usuario.nome}</li>
        ))}
      </ul>
    </div>
  );
}

export default UsuariosAPI;
