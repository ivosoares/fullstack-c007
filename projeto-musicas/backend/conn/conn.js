// importar o mongoose (framework para nos ajudar a trabalhar com o mongodb)
// para poder acessar a sua funcao de conexao com o banco de dados.
const mongoose = require('mongoose');

const Conn = () => {
  // criar uma conexao com o banco de dados.
  // url de conexao = mongodb://servidor:porta/nomedobanco
  // useNewUrlParser = fala pro mongo usar o novo sistema de urls
  // useUnifiedTopology = mecanismo de monitoramento do banco de dados
  mongoose.connect('mongodb://localhost:27017/musicas',{
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  ).then(() => {
    console.log('Conexao com o MongoDB executada com sucesso');
  }).catch((err) => {
    console.error(err);
  })
}

module.exports = Conn;