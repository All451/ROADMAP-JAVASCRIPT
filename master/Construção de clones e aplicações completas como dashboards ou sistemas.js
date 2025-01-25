// =============================
// CONFIGURAÇÃO BÁSICA DE UM DASHBOARD COM REACT E NODE.JS
// =============================

// Instalar dependências básicas
// Frontend: npm install react react-dom react-router-dom recharts axios
// Backend: npm install express mongoose cors dotenv

// =============================
// BACKEND - API COM NODE.JS E MONGODB
// =============================

// Arquivo server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Conectar ao MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB conectado'))
  .catch((err) => console.error(err));

// Modelo de dados (Exemplo: Usuários)
const UserSchema = new mongoose.Schema({
  nome: String,
  email: String,
  role: String, // Ex.: "admin" ou "user"
});
const User = mongoose.model('User', UserSchema);

// Rotas da API
app.get('/api/users', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

app.post('/api/users', async (req, res) => {
  const newUser = new User(req.body);
  await newUser.save();
  res.status(201).json(newUser);
});

// Iniciar o servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));

// =============================
// FRONTEND - DASHBOARD COM REACT
// =============================

// Estrutura do projeto (frontend)
// src/
// ├── components/
// │   ├── Header.jsx
// │   ├── Sidebar.jsx
// │   └── UserTable.jsx
// ├── pages/
// │   ├── Dashboard.jsx
// │   └── Users.jsx
// ├── App.jsx
// ├── main.jsx
// └── styles.css

// App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

const App = () => (
  <Router>
    <div className="layout">
      <Header />
      <div className="content">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </div>
    </div>
  </Router>
);

export default App;

// Header.jsx
const Header = () => (
  <header className="header">
    <h1>Dashboard</h1>
  </header>
);

export default Header;

// Sidebar.jsx
import { Link } from 'react-router-dom';

const Sidebar = () => (
  <aside className="sidebar">
    <nav>
      <ul>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/users">Usuários</Link></li>
      </ul>
    </nav>
  </aside>
);

export default Sidebar;

// Dashboard.jsx
const Dashboard = () => (
  <div>
    <h2>Bem-vindo ao Dashboard</h2>
    <p>Informações e gráficos aqui...</p>
  </div>
);

export default Dashboard;

// Users.jsx
import { useState, useEffect } from 'react';
import axios from 'axios';

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/users')
      .then((response) => setUsers(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h2>Usuários</h2>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Função</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.nome}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;

// =============================
// INTEGRAÇÃO COM RECHARTS (GRÁFICOS)
// =============================

import { PieChart, Pie, Cell, Tooltip } from 'recharts';

const data = [
  { name: 'Admin', value: 5 },
  { name: 'User', value: 20 },
];

const COLORS = ['#0088FE', '#00C49F'];

const Dashboard = () => (
  <div>
    <h2>Bem-vindo ao Dashboard</h2>
    <PieChart width={400} height={400}>
      <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={150} fill="#8884d8">
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index]} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  </div>
);

export default Dashboard;

// =============================
// MELHORES PRÁTICAS
// =============================
// 1. Divida o código em componentes reutilizáveis e páginas.
// 2. Use ferramentas como React Query ou Redux para gerenciamento de estado em grandes aplicações.
// 3. Proteja rotas sensíveis com autenticação no frontend e backend.
// 4. Use variáveis de ambiente (.env) para configurar URLs da API e outras informações sensíveis.

