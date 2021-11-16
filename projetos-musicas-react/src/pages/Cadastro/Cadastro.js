import React from 'react'

const Cadastro = () => {
  return (
    <div>
      <h1>Cadastro de musicas</h1>
      <form>
        <label htmlFor="nome">Nome da musica:</label>
        <input id="nome" type="text" placeholder="Nome da musica" name="nome"/>
        <label htmlFor="autor">Nome do autor:</label>
        <input id="autor" type="text" placeholder="Nome do autor" name="autor"/>
        <label htmlFor="genero">Genero da musica:</label>
        <input id="genero" type="text" placeholder="Genero da musica" name="genero"/>
        <label htmlFor="capa">Capa do album:</label>
        <input id="capa" type="text" placeholder="URL da capa do album" name="capa"/>
        <label htmlFor="duracao">Duração da musica:</label>
        <input id="duracao" type="time" step="100" placeholder="Duraçao da musica" name="duracao"/>
        <button type="submit">Enviar</button>
      </form>
    </div>
  )
}

export default Cadastro
