import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

export const ProductsCard = ({dados}) => {
  console.log(dados);
  return (
    <div className='produto_card'>
        <img src={dados.imagem} alt="model" />
        <div className='produto_card__add'>
          <p>{dados.nome}</p>
          <button>
            <Link to={`/pay/${dados.id}`}>Adicionar</Link>
          </button>
        </div>
    </div>
  );
};

export default ProductsCard;
