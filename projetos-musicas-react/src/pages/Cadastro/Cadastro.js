import React from 'react'
import Api from '../../api/api';
import { useNavigate } from 'react-router-dom';

const Cadastro = () => {
  const navigate = useNavigate();
  
  const handleSubmit = async (evento) => {
    evento.preventDefault();
    // target = quem disparou o evento
    console.log(evento.target);
    const nome = evento.target.nome.value;
    const autor = evento.target.autor.value;
    const genero = evento.target.genero.value;
    const capa = evento.target.capa.value;
    const duracao = evento.target.duracao.value;

    const musica = {
      nome,
      autor,
      genero,
      capa,
      duracao
    }

    const request = await Api.fetchPost(musica);
    if(request.status === 500) {
      alert('ERRO NO SERVIDOR')
    }
    const result = await request.json();
    if(result.error) {
      console.log(result.error);
    }else {
      alert(result.message);
      navigate('/');
    }
  }

  return (
    <div className="container">
      <div className="card mt-4">
        <div className="card-title">
          <div className="row">
            <div className="col">
              <h3 className="mx-3 my-3">Cadastro de Músicas</h3>
            </div>
          </div>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="row mb-4">
              <div className="col-4">
                <div className="form-group">
                  <label htmlFor="nome">Nome da musica:</label>
                  <input id="nome" className="form-control" type="text" placeholder="Nome da musica" name="nome"/>
                </div>
              </div>
              <div className="col-4">
                <div className="form-group">
                  <label htmlFor="autor">Nome do autor:</label>
                  <input id="autor" type="text" className="form-control" placeholder="Nome do autor" name="autor"/>
                </div>
              </div>
              <div className="col-4">
                <div className="form-group">
                  <label htmlFor="genero">Genero da musica:</label>
                  <input id="genero" type="text" className="form-control" placeholder="Genero da musica" name="genero"/>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-4">
                <div className="form-group">
                  <label htmlFor="capa">Capa do album:</label>
                  <input id="capa" type="text" className="form-control" placeholder="URL da capa do album" name="capa"/>
                </div>
              </div>
              <div className="col-4">
                <div className="form-group">
                  <label htmlFor="duracao">Duração da musica:</label>
                  <input id="duracao" type="time" className="form-control" min="00:00" max="10:00" placeholder="Duraçao da musica" name="duracao"/>
                </div>
              </div>
              <div className="col-4 d-flex align-items-end justify-content-around">
                <button type="submit" className="btn btn-success">Enviar</button>
                <button type="button" className="btn btn-danger">Voltar</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Cadastro
