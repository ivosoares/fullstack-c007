const apiUrl = 'http://localhost:3000/musicas';
// pego o elemento lista para poder ser manipulado no js
const lista = document.getElementById('lista');

// buscar os elementos no html
let nomeEl = document.getElementById('nome');
let autorEl = document.getElementById('autor');
let generoEl = document.getElementById('genero');
let capaEl = document.getElementById('capa');
let duracaoEl = document.getElementById('duracao');


// [GET] /musicas = retornar e listar a lista de musicas na tela.
const getMusicas = async() => {
  // vou usar a API fech do javascript para disparar uma req do tipo GET para o backend.
  // faz uma requisicao do tipo GET para o backend
  const response = await fetch(apiUrl);
  // musicas = lista de musicas
  const musicas = await response.json();
  // iterar a lista de musicas onde para cada musica eu preciso exibir alguma coisa no front
  musicas.map((musica) => {
    lista.insertAdjacentHTML('beforeEnd', `
      <div class="col">
        <div class="card">
          <img src="${musica.capa}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${musica.nome}</h5>
            <p class="card-title">${musica.autor}</p>
            <p class="card-text">${musica.genero}</p>
            <p class="card-text">${musica.duracao}</p>
            <div class="btn-group">
              <button class="btn btn-outline-primary">Editar</button>
              <button class="btn btn-outline-danger">Excluir</button>
            </div>
          </div>
        </div>
      </div>
    `)
  })
}

// [POST] - cadastrar uma nova musica
const submitForm = async(evento) => {
  evento.preventDefault();

  const musica = {
    nome: nomeEl.value,
    autor: autorEl.value,
    genero: generoEl.value,
    capa: capaEl.value,
    duracao: parseFloat(duracaoEl.value),
  }

  // construir como vai ser a minha requisicao.
  const request = new Request(`${apiUrl}/add`, {
    method: 'POST',
    body: JSON.stringify(musica),
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  })

  const response = await fetch(request);
  const result = await response.json();
  alert(result.message);

  nomeEl.value = '';
  autorEl.value = '';
  generoEl.value = '';
  capaEl.value = '';
  duracaoEl.value = '';
  lista.innerHTML = '';

  getMusicas();

}

getMusicas();