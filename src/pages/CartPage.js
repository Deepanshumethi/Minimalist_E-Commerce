import React, { useState } from 'react'
import Cart from './Cart'
import { useEffect } from 'react'
import Nav from '../Nav'
import { useNavigate } from 'react-router-dom'
// import ProductPage from './ProductPage'
import { Link } from 'react-router-dom'
function CartPage() {
  console.log("hello")
 let arr=[];
  // const [data, setdata] = useState()
  console.log("hello1")
  
    for(let key in localStorage){
     if(localStorage.hasOwnProperty(key)){
      arr.push(JSON.parse(localStorage.getItem(key)))
    
     }
    
    }
    const navigate=useNavigate();
    function takeToCategories(event){
        navigate('/categories')
    }
  

  // console.log(localStorage.key)
  // console.log(arr[0])
  // console.log(arr[1])

  // const[value,setValue]=useState()
  
  // let length=(arr.length)/2

  return (
    
    <>
    <Nav/>
    <h1 className='your-cart'>Your Cart</h1>
       {
        (localStorage.length>0 ? 
        arr.map((value)=>
        <Cart data={value} array={arr}/>
        )
        :<div className='empty_cart'>
          <img src='image/Empty_cart.png'/>
          <button onClick={()=>takeToCategories()}>Keep Shopping</button>
        </div>)
       }
        <Link to="/cartpage"></Link>
    </>
  )
  }

export default CartPage;