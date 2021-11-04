const express = require('express');
const cors = require('cors');
const Conn = require('./conn/conn');


const app = express();
app.use(express.json());
app.use(cors());


// chamo o metodo para conexao com o banco de dados
Conn();

// [GET] - retornar os dados cadastrados no banco de dados


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