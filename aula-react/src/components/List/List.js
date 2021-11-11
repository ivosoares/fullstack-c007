import React from 'react';
import './List.css';


const List = (props) => {
  const data = props.data;
  return (
    <div>
      {data.map((filme) => (
        <li key={filme.id}>
          <h3 className="title">{filme.nome}</h3>
          <img className="img" src={filme.imagem} alt={filme.nome}/>
        </li>
      ))}
    </div>
  )
}

export default List
