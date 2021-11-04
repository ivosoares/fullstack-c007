// importar o express para poder inicializar as minhas rotas
const express = require('express');
//importar o controller para acessar as funcoes
const VagasController = require('./../controllers/vagas.controller');


// inicializa as rotas
const router = express.Router();
// inicializa a classe do controller
const vagasController  = new VagasController;

// [GET] /vagas - Retornar uma lista de vagas
router.get('/', vagasController.getVagas);

//[GET /vagas/:id - retorna um item por id
router.get('/:id', vagasController.getVagasById);


module.exports = router;