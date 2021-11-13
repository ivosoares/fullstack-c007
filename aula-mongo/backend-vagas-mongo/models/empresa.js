const mongoose = require('mongoose');

const empresaModel = new mongoose.Schema({
    nome: { type: String, required: true }
});

const Empresa = mongoose.model('empresas', empresaModel);

module.exports = Empresa;