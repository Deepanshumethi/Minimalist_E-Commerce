import React, { useState } from 'react';
import Home from './pages/Home';
import Categories from './pages/Categories';
// import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Nav = () => {
  const navigate = useNavigate();
  
  function handleClickCategories(event) {
    navigate('/categories');
  }
  function handleClickHome(event){
    navigate('/');
  }
  function handleClickCart(event){
    navigate('/cart');
  } 
  return (
    <>
      <div className='container-fluid mainNav'>
          <span className='logo' onClick={handleClickHome}><img src='image/Logo.png'/></span>

          <ul className='pages'>
            <li className='page categorie-Page' onClick={handleClickCategories} >Categories</li>
            {/* <li className='page product-page' onClick={handleClickProduct}>Product Page</li> */}
            <li className='page'  ><i className="fa-solid fa-cart-shopping" onClick={handleClickCart}>
            </i><div className='counter'>{localStorage.length}</div></li>
          </ul>
      </div>
    </>
  )
}
export default Nav;