const Empresa = require('./../models/empresa');

class empresaService {
    // vai conectar com o banco de dados e retornar a lista de vagas
    findAll = async () => await Empresa.find();
  
  }
  
  module.exports = empresaService;