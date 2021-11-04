// importo o servico
const VagasService = require('./../services/vagas.service');

// inicializo a classe do servico para poder acessar seus metodos
const vagasService = new VagasService;

class vagasController {
  getVagas = async (req, res) => {
    // acesso a funcao do service para acessar a lista de vagas do banco
    const vagas = await vagasService.findAll();
    res.send(vagas)
  }

  getVagasById = async (req, res) => {
    const idParam = req.params.id;
    const vaga = await vagasService.findById(idParam);
    res.send(vaga);
  }
}

module.exports = vagasController;