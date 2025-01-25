// =============================
// CONFIGURAÇÃO COM WEBPACK
// =============================

// Instalar as dependências necessárias
// npm install webpack webpack-cli webpack-dev-server babel-loader @babel/core @babel/preset-env html-webpack-plugin css-loader style-loader --save-dev

// Arquivo webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', // Arquivo de entrada
  output: {
    path: path.resolve(__dirname, 'dist'), // Diretório de saída
    filename: 'bundle.js', // Nome do bundle gerado
  },
  module: {
    rules: [
      // Configuração para Babel
      {
        test: /\.js$/, // Arquivos JavaScript
        exclude: /node_modules/, // Excluir node_modules
        use: {
          loader: 'babel-loader',
        },
      },
      // Configuração para CSS
      {
        test: /\.css$/, // Arquivos CSS
        use: ['style-loader', 'css-loader'], // Loaders
      },
    ],
  },
  plugins: [
    // Gera o arquivo HTML automaticamente
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    port: 3000, // Porta do servidor de desenvolvimento
  },
  mode: 'development', // Modo: desenvolvimento ou produção
};

// =============================
// CONFIGURAÇÃO DO BABEL
// =============================

// Arquivo .babelrc
{
  "presets": ["@babel/preset-env"]
}

// =============================
// ESTRUTURA DO PROJETO
// =============================
// src/
// ├── index.html
// ├── index.js
// ├── styles.css

// =============================
// CONFIGURAÇÃO COM VITE
// =============================

// Instalar o Vite como dependência do projeto
// npm create vite@latest meu-projeto -- --template react

// Comando para rodar o servidor de desenvolvimento
// npm run dev

// Arquivo vite.config.js (caso necessário ajustar)
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Porta do servidor
  },
  build: {
    outDir: 'dist', // Diretório de saída
  },
});

// =============================
// ESTRUTURA DO PROJETO (VITE)
// =============================
// src/
// ├── App.jsx
// ├── main.jsx
// ├── index.css

// main.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(<App />);

// App.jsx
const App = () => {
  return (
    <div>
      <h1>Olá, mundo! Com Vite 🚀</h1>
    </div>
  );
};

export default App;

// =============================
// DIFERENÇA ENTRE WEBPACK E VITE
// =============================

// Webpack: Configuração mais personalizada, ideal para projetos complexos onde você quer controle total.
// Vite: Simplicidade e rapidez, perfeito para iniciar projetos modernos, especialmente com React.

// =============================
// MELHORES PRÁTICAS
// =============================
// 1. Sempre configure o modo `production` no Webpack antes de fazer o build final.
//    - `mode: 'production'` otimiza o código automaticamente.

// 2. No Vite, o comando `npm run build` gera uma aplicação otimizada para produção.

// 3. Use o plugin `html-webpack-plugin` no Webpack para facilitar a inclusão do arquivo HTML.

// 4. Sempre exclua `node_modules` do processamento no Webpack para melhorar a performance.

// 5. No Webpack, adicione otimizações como:
module.exports = {
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
};
