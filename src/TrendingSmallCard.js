import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react'
function TrendingSmallCard(props) {
  // const [image,setImage]=useState(props.product.image);
  // useEffect(() => {
    
  //  });
  const[data,setData]=useState(props.product)
  const navigate=useNavigate();
  function handlePage(event){
      navigate('/productpage',{state:data})
      
  }
  return (
   <>
        <div className='trendingCard' onClick={()=>{handlePage()}}>
            <div className='trendingCardHeader'>
            <img className='trendingCardImage' src={props.product.image}/>
            </div>
            <div className='trendingCardDetails'>
            <span className='trendingCard-name'>{props.product.product}</span>
            <span className='trendingCard-price'>₹{props.product.price}</span>
            </div>
        </div>
        <Link to={'/productpage'}/>
   </>
  )
}

export default TrendingSmallCard