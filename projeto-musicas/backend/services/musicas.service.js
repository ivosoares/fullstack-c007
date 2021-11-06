// importo o model para poder acessar os seus metodos do mongo.
const MusicasModel = require('./../models/musica');

// crio a classe do meu servico para poder acessar o seus metodos
class musicasService {
  // ela vai buscar uma lista de musicas no banco de dados atraves do model(quem tem acesso as funcoes do banco).
  // find = busca uma lista de resultados de acordo com o filtro
  findAll = async () => await MusicasModel.find();
}

// exportar a minha classe para que o controller possa acessar os seus metodos.
module.exports = musicasService;