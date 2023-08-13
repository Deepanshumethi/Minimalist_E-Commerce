import React from 'react'
import BigSampleImage from './BigSampleImage'
import Image1 from './sample1.jpg'
import Image2 from './sample2.jpg'
import Image3 from './sample3.jpg'
import Image4 from './sample4.jpg'
// import Link from './pages/ProductPage'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

import SmallsampleImage from './SmallsampleImage'


function Allsampleimage() {
    const navigate=useNavigate();
    function takeToCategories(event){
        navigate('/categories')
    }

  return (
    <>
        <div className='container-fluid allsampleimage ' onClick={()=>takeToCategories()}>
            <div className='row all' >
                <div className='big col-lg-6 col-md-6 col-sm-6' >
                    <BigSampleImage image={Image1} name="Life Comfortably" />
                </div>
                <div className='big col-lg-3 col-md-6 col-sm-6'>
                    <BigSampleImage image={Image2} name="Skincare"/>
                </div>
                <div className='big col-lg-3 col-md-12 col-sm-12 flow'>
                    <div className='smalll one col-lg-12 col-md-6 col-sm-6'>
                        <SmallsampleImage image={Image3} name="Kitchen"/>
                    </div>
                    <div className='smalll col-lg-12 col-md-6 col-sm-6'>
                        <SmallsampleImage image={Image4} name="Electronics"/>
                    </div>
                </div>
            </div>
            <Link to='/categories'/>
        </div>
        
    </>
  )
}

export default Allsampleimage