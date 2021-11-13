import React from 'react';
import './Img.css';

const Img = (props) => {
    const nome = props.nome;
    const imagem = props.imagem;
    const classe = props.classe;

    return(
        <img className={classe} src={imagem} alt={nome}/>
    )
}

export default Img