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
}

// Exportando essa classe criada para poder ser acessada de outros arquivos
module.exports = MusicasController;