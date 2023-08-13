import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductPage from './pages/ProductPage';


const ProductCard=(props)=> {
const navigate = useNavigate();
  function handlePage(event){
    navigate('/productpage' ,{state:props.product});
  }
  console.log("yeh h product page pr props s aaya data => ",props.product)
  return (
    <>
    
        <div className='productCard' onClick={handlePage}>
            <div className='productHeader'>
            <img className='productCardImage' src={props.product.image}/>
            </div>
            <div className='productDetails'>
            <span className='product-name'>{props.product.product}</span>
            <span className='product-price'>₹{props.product.price}</span>
            </div>
        </div>
        <Link to="/productpage"/>
    </>
    
  )
}

export default ProductCard