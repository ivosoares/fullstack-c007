const express = require('express');
const cors = require('cors');
// importa arquivo de conexao para acesso ao metodo
const Conn = require('./conn/conn');

const VagasRouter = require('./routes/vagas.routes');
const UserRouter = require('./routes/user.routes');

const app = express();
app.use(express.json());
app.use(cors());

// falo pro express ultizar as minhas rotas para o endpoint /vagas
app.use('/vagas', VagasRouter);
app.use('/user', UserRouter);

// chamo o metodo para conexao com o banco de dados
Conn();

const port = 3000;

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
})

// MVC 
// MODEL = é responsavel pelos dados e funcoes do banco de dados
// VIEW = a visao do cliente ou seja html(react, angular, vue, html)
// CONTROLLER = é o responsavel por gerenciar os fluxos, define as regras
// Rotas = sao os responsaveis pelos metodos da API.
// servicos = responsaveis por se conectar com os nossos model (chamas as funcoes do banco de dados atraves do model)