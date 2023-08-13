import React, { useEffect, useState } from 'react'
import products from './ProductsList'
import ProductCard from './ProductCard'


function ProductsWeProud() {

  // const [hello, sethello] = useState([])

  const proud_product = products.filter(function (item) {
    // console.log(products.proud)
    return ((item.proud));
  })
  // useEffect(() => {
  //   var requestOptions = {
  //     method: 'GET',
  //     redirect: 'follow'
  //   };

  //   fetch("https://fakestoreapi.com/products", requestOptions)
  //     .then(response => response.json())
  //     .then(result => sethello(result))
  //     .catch(error => console.log('error', error));
  // }, [])

  // console.log("hello",hello)

  return (


    <>
      <div className='container-fluid ProductsWeProud'>
        <div className='row text-proud'>
          <span>Products We are proud of</span>
        </div>
        <div className='row products-list'>

          {

            proud_product.map((Products) => (
              <div className='col-lg-3 col-md-4 col-sm-6 product'>
                <ProductCard product={Products} />
              </div>
            ))
          }

        </div>
      </div>
    </>
  )
 
}

export default ProductsWeProud