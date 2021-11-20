import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Api from "../../api/api";

const Edit = () => {
  const navigate = useNavigate();
  //declarar o estado da musica
  const [musica, setMusica] = useState({
    nome: '',
    autor: '',
    genero: '',
    capa: '',
    duracao: ''
  });
  
  useEffect(() => {
    getMusicaById();
  }, []);

  // buscar a musica que ja foi cadastrado no banco.
  // buscar a musica pelo o id passado via parametro da url.
  const { id } = useParams();

  //buscar a musica por id;
  const getMusicaById = async () => {
    const request = await Api.fetchGetById(id);
    const musica = await request.json();
    setMusica(musica);
  };

  const handleFieldsChange = (evento) => {
    // copio o objeto do estado.
    const musicaEdit = { ...musica };
    // musicaEdit['nome'] = 'novo valor'
    // atualiza os campos do objeto de forma dinamica de acordo com o input que o usuario digitou
    musicaEdit[evento.target.name] = evento.target.value;
    // atualzo estado musica
    setMusica(musicaEdit);
  }

  const handleSubmit = async (evento) => {
    evento.preventDefault();
    const request = await Api.fetchPut(musica, id);
    const data = await request.json();
    alert(data.message);
    navigate(`/view/${id}`);
  }

  return (
    <div className="container">
      <div className="card mt-4">
        <div className="card-title">
          <div className="row">
            <div className="col">
              <h3 className="mx-3 my-3">Edição da Música</h3>
            </div>
          </div>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="row mb-4">
              <div className="col-4">
                <div className="form-group">
                  <label htmlFor="nome">Nome da musica:</label>
                  <input
                    id="nome"
                    className="form-control"
                    type="text"
                    placeholder="Nome da musica"
                    value={musica.nome}
                    onChange={handleFieldsChange}
                    name="nome"
                  />
                </div>
              </div>
              <div className="col-4">
                <div className="form-group">
                  <label htmlFor="autor">Nome do autor:</label>
                  <input
                    id="autor"
                    type="text"
                    className="form-control"
                    placeholder="Nome do autor"
                    onChange={handleFieldsChange}
                    value={musica.autor}
                    name="autor"
                  />
                </div>
              </div>
              <div className="col-4">
                <div className="form-group">
                  <label htmlFor="genero">Genero da musica:</label>
                  <input
                    id="genero"
                    type="text"
                    className="form-control"
                    onChange={handleFieldsChange}
                    value={musica.genero}
                    placeholder="Genero da musica"
                    name="genero"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-4">
                <div className="form-group">
                  <label htmlFor="capa">Capa do album:</label>
                  <input
                    id="capa"
                    type="text"
                    onChange={handleFieldsChange}
                    value={musica.capa}
                    className="form-control"
                    placeholder="URL da capa do album"
                    name="capa"
                  />
                </div>
              </div>
              <div className="col-4">
                <div className="form-group">
                  <label htmlFor="duracao">Duração da musica:</label>
                  <input
                    id="duracao"
                    type="time"
                    onChange={handleFieldsChange}
                    value={musica.duracao}
                    className="form-control"
                    min="00:00"
                    max="10:00"
                    placeholder="Duraçao da musica"
                    name="duracao"
                  />
                </div>
              </div>
              <div className="col-4 d-flex align-items-end justify-content-around">
                <button type="submit" className="btn btn-success">
                  Enviar
                </button>
                <button type="button" className="btn btn-danger">
                  Voltar
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Edit;
