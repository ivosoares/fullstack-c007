// importar o mongosse para poder acessar os seus metodos
const mongoose = require('mongoose');

// url de conexao = mongodb://servidor:porta/nomedobanco
// useNewUrlParser = fala pro mongo usar o novo sistema de urls
// useUnifiedTopology = mecanismo de monitoramento do banco de dados

const Conn = () => {
  	mongoose.connect('mongodb://localhost:27017/vagas', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }).then(() => {
      console.log('MongoDB Conectado')
    }).catch(err => console.log('erro de conexao com o banco', err));
}

// exportando a funcao Conn para poder ser usada em outros locais
module.exports = Conn;