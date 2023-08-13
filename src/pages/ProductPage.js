import React from 'react'
import Nav from '../Nav'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import TrendingNow from '../TrendingNow'
import ScrollToTop from '../ScrolltoTop';
// import ProductsWeProud from '../ProductsWeProud'
function ProductPage(props) {

    const location = useLocation()
    const data = location.state;
    // console.log("yeh h product page pr aaya hua data=> ", data);
    const [image, setImage] = useState(data.image)
    
    // console.log(count)
    //    console.log(number);
    
    const [count, setCount] = useState(data.quantity);
    // let count=0;
    if ((image !== data.image) && (image !== data.image2) && (image !== data.image3)) {
        setImage(data.image)
        setCount(1);
    }
// const[value,setValue]=useState(1)
        function addToCard(){
                 data.quantity=count;
                 localStorage.setItem(data.id, JSON.stringify(data));
               
                document.getElementsByClassName("Addto").innerHTML="Added";
                window.location.reload()
                
        }
    
   
    return (
        <>

            <Nav />

            <div className='container-fluid '>
                <div className='row product-box'>
                    <div className='col-12 prod-name'>
                        {data.product}
                    </div>

                    <div className='col-lg-6 col-md-12 col-sm-12'>
                        <div className='product-main-image'>
                            <img src={image} />
                        </div>
                        <div className='row another-images'>
                            <div className='col-4 another-img'>
                                <img src={data.image} onMouseOver={() => { setImage(data.image) }} />
                            </div>
                            <div className='col-4 another-img'>
                                <img src={data.image2} onMouseOver={() => { setImage(data.image2) }} />
                            </div>
                            <div className='col-4 another-img'>
                                <img src={data.image3} onMouseOver={() => { setImage(data.image3) }} />
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6 col-md-12 col-sm-12 product-detail-box'>
                        <span className='product-description'>{data.description}</span>

                        <div className='row QuantityAndPrice' >
                            <div className='col-lg-6 col-12 product-quantity'>
                                Quantity
                            </div>
                            <div className='col-lg-6 col-12  adjust-quantity'>
                                <button className='minus' onClick={()=>{setCount(count-1)}} disabled={count===0} >-</button>
                              
                                <button className='value'>{count}</button>
                                <button className='plus' onClick={()=>{setCount(count+1)}}>+</button>
                                
                            </div>

                        </div>
                        <div className='row product-price-tag'>
                        ₹{data.price}
                        </div>
                        <div className='row addAndBuy-btn'>
                            <div className='col-12 '>
                            <span type='button' className='Addto' onClick={()=>addToCard()}>Add To Cart</span>
                               
                                
                            </div>
                            <div className='col-12'>
                                <button className='Buy'>Buy Now</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className='container-fluid other-details'>
                <div className='row other-detailsof-product'>

                    <div className='col-3 other-detail-box'>
                        <h3>Texture:</h3>
                        <p>{data.texture}</p>
                    </div>
                    <div className='col-1'></div>
                    <div className='col-3 other-detail-box'>
                        <h3>Weight</h3>
                        <p>{data.weight}</p>
                    </div>
                    <div className='col-1'></div>
                    <div className='col-3 other-detail-box'>
                        <h3>Size</h3>
                        <p>{data.size}</p>
                    </div>
                    <div className='col-1'></div>
                </div>
            </div>
            <TrendingNow onClick={() => { <ScrollToTop /> }} />


        </>
    )
}

export default ProductPage