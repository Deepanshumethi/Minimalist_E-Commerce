import React from 'react'
function BigSampleImage(props) {
  return (
    <>
        <div className='bigimage'>
            <img className='img' src={props.image}></img>
           <div className='text big-text'>
           <h1>{props.name}</h1>
           </div>
        </div>
    </>
  )
}

export default BigSampleImage