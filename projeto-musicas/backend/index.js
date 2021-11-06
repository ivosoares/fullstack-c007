// importar o express para criar o nosso servidor http (web)
const express = require('express');
// importar o cors para impedir problema de recursos distintos (urls externas acessando o nosso backend)
const cors  = require('cors');
// importar as nossas rotas da musica
const MusicasRouter = require('./routes/musicas.routes');
// importar a minha funcao de conexao com o banco
const Conn = require('./conn/conn');

// inicializar o express e atribuir em uma constante
const app = express();

// chamo um midleware(faz a ponte entre a entrada e saida do backend)
// para falar pro express trabalhar com o formato JSON
app.use(express.json());
// chamo outro middleware para interceptar as chamadas e garantir que cors esta correto
app.use(cors());

// configuro um middleware para interceptar as chamadas para a rota /musicas
// e enviar para o nosso arquivo de rotas
app.use('/musicas', MusicasRouter);

// executando a minha funcao de conexao com o banco criado no arquivo conn.js
Conn();

// inicializar o servidor http em alguma porta para podermos acessar ele.
const port = 3000;
app.listen(port, () => {
  console.log(`O servidor esta rodando na porta ${port}`);
})


