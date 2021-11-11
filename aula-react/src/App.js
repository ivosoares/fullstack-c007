import React, { useState } from 'react';
import './App.css';
import Button from './components/Button/Button';
import List from './components/List/List';

// fragments

function App() {
  const [contador, setContador] = useState(0);
  const [filmes, setFilmes] = useState([
    {
      id: 1,
      nome: 'Capitao America',
      imagem: 'https://hqrock.files.wordpress.com/2011/06/poster-capitao-31mai2011.jpg'
    },
    {
      id: 2,
      nome: 'Capita Marvel',
      imagem: 'https://br.web.img2.acsta.net/pictures/19/02/04/18/35/1468867.jpg'
    }
  ])

  // crio uma funcao para ser chamada quando clico no botao
  const incrementa = () => {
    console.log('clicou');
    // chamar a funcao que atualiza o estado
    setContador(contador + 1);
  }

  const handleSubmit = (evento) => {
    evento.preventDefault();
    console.log(evento.target);
    console.log(evento.target.nome);
    const nome = evento.target.nome.value;
    const imagem = evento.target.imagem.value;
    setFilmes([
      ...filmes,
      {
        id: filmes.length + 1,
        nome: nome,
        imagem: imagem,
      }
    ])

  }

  return (
    <>
      <h1>Olá Bluemers!</h1>
      <div>
        <h2>{contador}</h2>
        <button onClick={incrementa}>incrementa</button>
      </div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="nome" placeholder="Nome do Filme"/>
        <br/>
        <input type="text" name="imagem" placeholder="imagem do Filme"/>
        <button type="submit">Enviar</button>
      </form>
      <Button text="Enviar" estilo="success"/>
      <List data={filmes}/>
    </>
  );
}

export default App;
