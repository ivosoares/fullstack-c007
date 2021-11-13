import React from 'react'

const Card = (props) => {
  const musica = props.data;
  return (
    <div className="col" key={musica._id}>
      <div className="card">
        <img src={musica.capa} alt={musica.nome} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{musica.nome}</h5>
          <span className="badge bg-primary">{musica.genero}</span>
        </div>
      </div>
    </div>
  )
}

export default Card
