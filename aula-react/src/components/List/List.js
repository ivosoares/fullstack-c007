import React from 'react';
import './List.css';
import Img from '../Imgs/Img';


const List = (props) => {
  const data = props.data;
  return (
    <div>
      {data.map((filme) => (
        <li key={filme.id}>
          <h3 className="title">{filme.nome}</h3>
          <Img classe="img" nome={filme.nome} imagem={filme.imagem}/>
        </li>
      ))}
    </div>
  )
}

export default List
