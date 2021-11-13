// importar o express para poder acessar o seu metodo de rotas e as funcoes http.
const express = require("express");
// importar o controller para poder chamar as suas funcoes na rota
const MusicasController = require("./../controllers/musicas.controller");

const MusicasControllerFunc = require('./../controllers/musicas.func.controller');
// inicializar a classe controller
const musicasController = new MusicasController();

// inicializar a instancia  da rota do express para poder gerenciar minhas chamadas(rotas)
const router = express.Router();

// [GET] - retornar a lista de muscas cadastradas no banco de dados(mensagem)
// requisicao = o que vem do cliente(front) para o server (back).
// response = o que o server(backend) responde para o client(frontend).
router.get("/", musicasController.getMusicas);

router.get('/listar', MusicasControllerFunc.getAll);

// [GET] /musicas/{id} - retornar uma unica musica de acordo com o seu id
router.get("/:id", musicasController.getMusicaById);

// [POST] /musicas/add - cadastrar uma nova musica no nosso banco de dados.
router.post("/add", musicasController.createMusic);

// [PUT] /musicas/{id} - Editar uma musica pre cadastrada de acordo com o seu id.
router.put("/:id", musicasController.editMusic);

// [DELETE] /musicas/{id} - Excluir uma musica pré cadastrada no DB por id.
router.delete("/:id", musicasController.deleteMusic);

// exporto o modulo de rotas para poder ser acessavel via index.
module.exports = router;
