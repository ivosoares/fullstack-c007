// buscar o elemento no html da minha lista onde irei inserir as vagas
const lista = document.getElementById('lista')

// atribuindo a endpoint da api do backend em um constante
const apiUrl = 'http://localhost:3000/vagas';


// faz uma resquisicao do tipo [GET] para o back que recebe todas as vagas cadastradas
const getVagas = async () => {
    // FETCH API api do javascript responsavel por fazer comunicacao entre requicoes http.
    const response = await fetch(apiUrl)
    // é a lista de objetos vagas (array de objetos)
    const vagas = await response.json();
    console.log(vagas);
    vagas.map((vaga) => {
        lista.insertAdjacentHTML('beforeend', `
        <div class="col">
            <div class="card">
            <img src="${vaga.logo}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${vaga.titulo} - ${vaga.empresa}</h5>
                <span class="badge bg-primary">${vaga.senioridade}</span>
                <p class="card-text">R$ ${vaga.salario}</p>
                <p class="card-text">${vaga.descricao}</p>
                <div>
                    <button class="btn btn-primary">Editar</button>
                    <button class="btn btn-danger">Excluir</button>
                </div>
            </div>
            </div>
        </div>
        `)
    })
}

const submitForm = (evento) => {
    evento.preventDefault();
    console.log('teste');

    // pegar os valores que o usuario digitou no input
    // let titulo = document.getElementById('titulo').value;


    // const obj = {
    //     titulo,
    // }

    // {
    //     titulo: 'desenvolvedor front'
    // }
}

getVagas();
