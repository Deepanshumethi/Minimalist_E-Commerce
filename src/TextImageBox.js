import React from 'react'
import { Link } from 'react-router-dom';
import Categories from './pages/Categories';
import { useNavigate } from 'react-router-dom';
function TextImageBox(props) {
  const navigate = useNavigate();
  function takeToCategories(event) {
    navigate('/categories')
  }
  return (
    <>
      <div className='container-fluid TextImageBox'>
        <div className='row banner'>
          {
            ((props.flip) ? <><div className='col-lg-6 col-md-6 col-sm-0 box-image'>
              <img src={props.image}></img>
            </div><div className='col-lg-6 col-md-6 col-sm-12 text-box'>

                <span>
                  <h1>{props.heading}</h1>
                  <p>{props.text}</p>
                  <span type='button' className='banner_shopNowBtn' onClick={() => takeToCategories()}>SHOP NOW</span>
                </span>
              </div> </>
              :
              <><div className='col-lg-6 col-md-6 col-sm-12 text-box'>
                <span>
                  <h1>{props.heading}</h1>
                  <p>{props.text}</p>
                  <span type='button' className='banner_shopNowBtn' onClick={() => takeToCategories()}>SHOP NOW</span>
                </span>
              </div>
                <div className='col-lg-6 col-md-6 col-sm-0 box-image'>
                  <img src={props.image}></img>
                </div></>)
          }

        </div>
        <Link to='/categories' />
      </div>

    </>
  )
}

export default TextImageBox