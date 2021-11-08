// importo o model para poder acessar os seus metodos do mongo.
const MusicasModel = require('./../models/musica');

// crio a classe do meu servico para poder acessar o seus metodos.
class musicasService {
  // ela vai buscar uma lista de musicas no banco de dados atraves do model(quem tem acesso as funcoes do banco).
  // find = busca uma lista de resultados de acordo com o filtro
  findAll = async () => await MusicasModel.find();

  // buscar uma musica por id
  findById = async (id) => {
    return await MusicasModel.findById(id)
  };

  // recebe um objeto e salva no banco de dados.
  create = async (musica) => {
    return await MusicasModel.create(musica)  
  }

  // recebe um id e um objeto para ser atualizado no banco.
  edit = async (id, musica) => {
    return await MusicasModel.updateOne({ _id: id}, musica)
  }

  // recebe umm id e exclui a musica do banco de acordo com esse id.
  delete = async (id) => {
    return await MusicasModel.deleteOne({ _id: id})
  }

}

// exportar a minha classe para que o controller possa acessar os seus metodos.
module.exports = musicasService;