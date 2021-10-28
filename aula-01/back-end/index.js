// SERVER API
// para instalar npm i express.
// importamos o express
const express = require('express');
const cors = require('cors');

// inicializar o express no nosso arquivo javascript para que ele possa assumir as funcoes do servidor
const app = express();

// fala pro express ultilizar o midleware para trabalhar com JSON.
app.use(express.json());

// estou ultilizando o midleware do cors para liberar as requisicoes entre origens diferentes.
app.use(cors());


const tarefas = [
    {
        id: Math.random(),
        text: 'ir ao mercado',
        prazo: '3 dias'
    },
    {
        id: Math.random(),
        text: 'cortar cabelo',
        prazo: '1 dias'
    },
    {
        id: Math.random(),
        text: 'estudar HTML',
        prazo: '7 dias'
    },
    {
        id: Math.random(),
        text: 'Finalizar aula blue',
        prazo: '7 dias'
    },
    {
        id: Math.random(),
        text: 'estudar js',
        prazo: '7 dias'
    }
]


//API - pode criar, e nela temos os Endpoits
// REST - GET/POST/PUT/DELETE
//iremos criar uma rota (server) que retorna uma mensagem para o cliente (client)
// retornamos uma mensagem na rota raiz [GET] /
app.get('/', (req, res) => {
    // request(req) -> (requiscao que vem do cliente)
    // response(res) -> (resposta que volta para o cliente)
    res.send('Olá Bluemers!')
})


// [GET] /tarefas - Retornar a minha lista de tarefas
app.get('/tarefas', (req, res) => {
    res.send(tarefas);
})


// [GET] /tarefas/{id} - Retornar uma unica tarefa de acordo com esse id
app.get('/tarefas/:id', (req, res) => {
    // acessamos o id via parametro da requiscao
    const idParam = req.params.id;
    
    // busco o item na lista de acordo com o seu indice(id)
    // const indice = id - 1;
    // const tarefa = tarefas[indice];

    // vou procurar na minha lista uma tarefa que contenha o id igual ao que eu recebi via parametros
    const tarefa = tarefas.find((tarefa) => tarefa.id == idParam)


    res.send(tarefa);
})









// definir a porta onde irá executar o meu servidor Back-End
const port = 3001;

// inicializamos o servidor na porta pré definida.
app.listen(port, () => {
    console.log('o app está rodando na porta 3000');
})


