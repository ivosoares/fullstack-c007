// importar o express para poder inicializar as minhas rotas
const express = require('express');
//importar o controller para acessar as funcoes
const EmpresaController = require('./../controllers/empresas.controller');

const router = express.Router();

const empresaController = new EmpresaController;

router.get('/list', empresaController.listAll);

module.exports = router;