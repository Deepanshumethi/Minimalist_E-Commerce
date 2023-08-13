import Allsampleimage from '../Allsampleimage';
import ProductsWeProud from '../ProductsWeProud'
import TextImageBox from '../TextImageBox';
import image from './Bannerimg.jpg'
import image2 from './Bannerimg2.jpg'
import TrendingNow from '../TrendingNow';
import Nav from '../Nav';
import React from 'react'


function Home() {
  return (
    <>
    <Nav/>
        <Allsampleimage/>
      <ProductsWeProud/>
      <TextImageBox image={image} heading="Creative harmonious living" text="RAOUF Products are all made to standard sizes so that you can mix and match them freely."/>
      <TrendingNow/>
      <TextImageBox image={image2} heading="Comfortable & Elegante Living" text="RAOUF Products are all made to standard sizes so that you can mix and match them freely." flip={true}
        />
         
    </>
  )
}

export default Home