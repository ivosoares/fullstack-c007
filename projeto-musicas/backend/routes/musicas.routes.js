// importar o express para poder acessar o seu metodo de rotas e as funcoes http.
const express = require('express');
// importar o controller para poder chamar as suas funcoes na rota
const MusicasController = require('./../controllers/musicas.controller');
// inicializar a classe controller
const musicasController = new MusicasController;

// inicializar a instancia  da rota do express para poder gerenciar minhas chamadas(rotas)
const router = express.Router();

// [GET] - retornar a lista de muscas cadastradas no banco de dados(mensagem)
// requisicao = o que vem do cliente(front) para o server (back).
// response = o que o server(backend) responde para o client(frontend).
router.get('/', musicasController.getMusicas)

// exporto o modulo de rotas para poder ser acessavel via index.
module.exports = router;