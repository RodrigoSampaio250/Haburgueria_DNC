import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../../components/Nav/Nav';
import ProductsCard from '../../components/ProductsCard/ProductsCard';
import './index.scss';

export const Home = ({dados}) => {
  console.log(dados);
  return (
    <div className='home'>
        <Nav/>
        <div className='home__produto'>
            {
              dados.map(produto => (<ProductsCard key={produto.id} dados={produto}/>))
            }
        </div>
    </div>
  );
};

export default Home;