import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Api from "../../api/api";

const Edit = () => {
  // acessa o id no parametro da url;
  const { id } = useParams();
  // inicializar o meu estado do objeto musica
  const [musica, setMusica] = useState({});

  // use Effect chama a funcao que retorna o objeto do backend de acordo com o id
  useEffect(() => {
    getMusicaById();
  }, [])

  const getMusicaById = async () => {
    const request = await Api.fetchGetById(id);
    const musica = await request.json();
    setMusica(musica);
  };

  const handleFieldsChange = (evento) => {
    // copia do objeto musicas
    const campos = { ...musica }

    // para cada input eu atualizo o seu respectivo valor no obj
    campos[evento.target.name] = evento.target.value;

    console.log(campos);
    setMusica(campos);

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
          <form>
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
                    value={musica.autor}
                    onChange={handleFieldsChange}
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
                    value={musica.genero}
                    onChange={handleFieldsChange}
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
                    value={musica.capa}
                    onChange={handleFieldsChange}
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
                    value={musica.duracao}
                    onChange={handleFieldsChange}
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
