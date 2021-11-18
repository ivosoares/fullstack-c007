import React from 'react';
import { Link } from 'react-router-dom';

const Card = (props) => {
  // objeto musica
  const musica = props.data;
  return (
    <Link to={`/view/${musica._id}`} className="col">
      <div className="card">
        <img src={musica.capa} alt={musica.nome} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{musica.nome}</h5>
          <span className="badge bg-primary">{musica.genero}</span>
        </div>
      </div>
    </Link>
  )
}

export default Card
