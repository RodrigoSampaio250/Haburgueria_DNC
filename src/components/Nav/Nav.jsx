import React from 'react';
import './index.scss';
import logo from "../../assets/DNCfood.svg";
import carrinho from "../../assets/carrinho.svg";

<style>
@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,200;0,400;1,300&display=swap');
</style>

export const Nav = () => {
  return (
    <nav className='nav'>
        <img src={logo} alt="logo" className="nav__logo" />
        <ul>
            <li>Variedades</li>
            <li>Lanches</li>
            <li>Pizzas</li>
            <li>Doces</li>
            <li>Promoções</li>
        </ul>

        <div className='nav__card-shop'>
            <h1>Minhas Compras</h1>
            <img src={carrinho} alt="carrinho" />
        </div>    
    </nav>
  );
};

export default Nav;
