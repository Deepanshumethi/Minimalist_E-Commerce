import React, { useEffect } from 'react'
function Cart(props) {
  // console.log("yeh h ",props.value)
  let p=(props.data.price)
  let q=(props.data.quantity)

  let t=p*q;
  function remove(){
     localStorage.clear();
    window.location.reload()
  }
 
  // console.log(props.array)
  
  return (
    <>
        <div className='container-fluid cart'>
          <div className='row cartt'>
            <div className='col-4'>
              <img className='cart-image' src={props.data.image}/>
            </div>
            <div className='col-6 cart-product-detail'>
              <div className='row cart-prod-name'>
                <h2>{props.data.product}</h2>
              </div>
              <div className='row cart-prod-price'>
                <h3>Total price : ₹{t}</h3>
                <h4>Qty: {props.data.quantity}</h4>
              </div>
              
              <div className='row delete-btn-cart'>
                <button onClick={()=>remove()}>Delete</button>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Cart