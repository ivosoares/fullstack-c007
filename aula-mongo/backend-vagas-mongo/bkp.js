
// importa o model vagas
// const Vaga = require('./models/vaga');

// [GET] - retornar os dados cadastrados no banco de dados
// app.get('/vagas', async (req, res) => {
//   Find --> retorna uma lista de documentos de acordo com o filtro'
//   try {
//     const vagas = await Vaga.find(); // lista de vagas
//   } catch(err) {
//     console.log(err);
//   }

//   Vaga.find()
//   .then((vagas) => { // lista de vagas
//     console.log(vagas); 
//     res.send(vagas);
//   }).catch((err) => console.log(err));

// })

// // [GET] - retorna a lista filtrada por titulo
// app.get('/vagas/:titulo', (req, res) => {
//   const titulo = req.params.titulo;
//   Vaga.find({ titulo: titulo })
//   .then((vagas) => res.send(vagas))
//   .catch((err) => console.log(err))
// })

// [GET] - retornna um item por id

// app.get('/vagas/findbyid/:id', async (req, res) => {
//   const idParams = req.params.id;
//   const vagaById = await Vaga.findOne({ _id: idParams})
//   res.send(vagaById);
// })
