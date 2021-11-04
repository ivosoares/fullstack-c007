// importar o nosso model para usar as funcoes do mongo no servico
const Vaga = require('./../models/vaga');

class vagasService {
  // vai conectar com o banco de dados e retornar a lista de vagas
  findAll = async () => await Vaga.find();

  // vai buscar um unico item no banco de acordo com o seu id
  findById = async (id) => await Vaga.findById(id);

}

module.exports = vagasService;