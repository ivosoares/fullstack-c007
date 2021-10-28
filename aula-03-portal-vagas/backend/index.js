// Backend - Projeto vagas
// importacao das libs externas (express e cors)
const express = require('express');
const cors = require('cors');

// importar as rotas que eu vou ultilizar
const vagasRouter = require('./routes/vagas.routes');

// inicializacao do express
const app = express();


// habilitar o modo json do express; JSON (Javascript Objective Notation)
app.use(express.json());

// habilitar o midleware do cors
app.use(cors());

//inicializar a rota /vagas de acordo com as configuracoes no meu arquivo de rotas
app.use('/vagas', vagasRouter);


const port = 3000;
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
})
