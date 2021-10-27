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

// definir a porta onde irá executar o meu servidor Back-End
const port = 3000;

//lista com nomes
let lista = ["leo","rafa","jose"];  

//GET rota raiz do app
app.get("/", (req,res) =>{
    res.send("Ola turma");
});

//GET rota que exibe a lista completa
app.get("/listar", (req,res) =>{
    res.send(lista);
});

app.post("/listar", (req,res) =>{
    res.send(`bem vindo ao listar ${req.body.nome}`);
});

//POST salvando o nome na lista
app.post("/listar2", (req,res) =>{
    const { nome, profissao, empresa } = req.body;
    // const nome = req.body.nome;
    // const profi = req.body.profissao;
    // const empresa = req.body.empresa;

    lista.push(nome); //metodo push add na lista na ultima posicao
    res.send(lista);
});

//PUT atualiza uma posicao da lista que foi identificada
app.put("/listar2/:id", (req,res) =>{
    const id = req.params.id -1 ;
    const { nome } = req.body;
    lista[id] = nome; //alterando na lista na posicao desejada
    res.send(lista);
});

//DELETE apagar a info de dentro da lista
app.delete("/listar2/:id", (req,res) =>{
    const id = req.params.id -1 ;
    delete lista[id]; // delete deixa null a posicao da lista
    res.send(lista);
});

// inicializamos o servidor na porta pré definida.
app.listen(port, () => {
    console.log(`o app está rodando em: http://localhost:${port}`);
});