import React, { useEffect } from 'react'
function Cart(props) {
  // console.log("yeh h ",props.value)
  let p=(props.data.price)
  let q=(props.data.quantity)
let k=props.data.id;
  let t=p*q;
  
  //  useEffect(()=>{
  //   remove();
  //    // 
  //  },[])
   function remove(){
    localStorage.removeItem(k);
    window.location.reload()
    // props.onRemoveFromCart(k);
      } 
       
 
  // console.log(props.array)
  
  return (
    <>
        <div className='container-fluid cart'>
          <div className='row cartt'>
            <div className='col-lg-4 col-sm-12'>
              <img className='cart-image' src={props.data.image}/>
            </div>
            <div className='col-lg-6 col-sm-12 cart-product-detail'>
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