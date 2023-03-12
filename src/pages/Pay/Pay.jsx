import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Nav from '../../components/Nav/Nav';
import './index.scss';

<style>
@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,200;0,400;1,300&display=swap');
</style>


export const Pay = ({dados}) => {

  const {payId} = useParams();
  const seletorProduto = dados.find((produto)=> produto.id == payId)

  

  return (
    <div className='pay'>
        <Nav/>
        <div className='pay__produto'>
          <div className='pay__produto__esquera'>
            <div>
              <img src={seletorProduto.imagem} alt="model" />
              <h3>{seletorProduto.nome}</h3>
            </div>
            <p>{seletorProduto.descricao}</p>
          </div>
          <div className='pay__produto__direita'>
              <div className='pay__produto__direita__detalhes'>
                <h2 className='pay__produto__direita__titulo'>Minha Sacola</h2>
                <h1>{seletorProduto.nome}</h1>
                <h2 className='pay__produto__direita__preco'>{seletorProduto.preco}</h2>
              </div>
              <button className='pay__produto__direita__continua'>Continuar Comprando</button>
              <button className='pay__produto__direita__finalizar'>Finalizar Compra</button>
          </div>
        </div>
    </div>
  )
}

export default Pay;