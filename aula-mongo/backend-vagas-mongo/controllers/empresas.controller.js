const EmpresasService = require('./../services/empresas.service');

// inicializo a classe do servico para poder acessar seus metodos
const empresasService = new EmpresasService;

class empresasController {
    listAll = async (req, res) => {
      // acesso a funcao do service para acessar a lista de vagas do banco
      const empresas = await empresasService.findAll();
      res.send(empresas);
    }
}
module.exports = empresasController;