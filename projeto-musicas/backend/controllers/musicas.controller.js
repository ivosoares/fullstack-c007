// importar o meu servico para poder acessar as funcoes que executam as querys do banco.
const MusicasService = require('./../services/musicas.service');
// inicializamos a classe do servico
const musicasService = new MusicasService;

// crio uma classe para meu controle onde nela ira conter os meus métodos(funcoes)
class MusicasController {
  // criar uma funcao com req e response para poder gerenciar o que deve ser feito
  // o que deve ser enviado como resposta ou o que ele recebe como requisicao
  getMusicas = async (req, res) => {
    // buscar os dados no meu banco de dados e retornar para o front.
    const musicas = await musicasService.findAll();
    // envio uma resposta para o client(front-end)
    res.send(musicas);
  }

  // funcao que busca uma unica musica por id
  getMusicaById = async (req, res) => {
    // buscar o id que vem na requisicao via parmetro
    //const idParam = req.params.id;
    const musica = await musicasService.findById(req.params.id);
    res.send(musica);
  }

  // funcao que cadastra a musica recebida pelo front no banco de dados
  createMusic = async (req, res) => {
    // acesso o corpo da requisicao para pegar o objeto.
    // objeto para ser cadastrado no banco.
    //const musica = req.body;
    if(!req.body){
      return;
    }
    await musicasService.create(req.body)
    .then(() => {
      res.send({message: `Musica ${musica.nome} Cadastrada com sucesso`})
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send({message: `Erro no servidor`})
    })
  }

  // atualiza uma musica de acordo com o id e objeto recebido para ser atualizado.
  editMusic = async (req, res) => {
    const idParam = req.params.id;
    // pegamos o objeto com os dados atualizado para atualizar no banco.
    const musicaEdit = req.body;
    await musicasService.edit(idParam, musicaEdit)
    .then(() => {
      res.send({message: `Musica Editada com sucesso`})
    })
    .catch( err => { 
      res.status(500).send({message: `Erro: ${err}`})
    })
  }

  // recebe um id via parametro e exclui uma musica de acordo com esse id
  deleteMusic = async (req, res) => {
    const idParam = req.params.id;
    await musicasService.delete(idParam)
    .then(() => {
      res.send({message: 'Excluido com sucesso'})
    })
    .catch(err => {
      res.status(500).send({message: `Error: ${err}`});
    })
  }
}

// Exportando essa classe criada para poder ser acessada de outros arquivos
module.exports = MusicasController;