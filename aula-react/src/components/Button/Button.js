// importar o react
import React from 'react';
import './Button.css';
// inicio a minha funcao/componente

const Button = (props) => {
  const text = props.text;
  const estilo = props.estilo;
  
  return (
    <button className={'btn ' + estilo}>
      {text}
    </button>
  )
}

// exportar essa funcao/componente
export default Button;