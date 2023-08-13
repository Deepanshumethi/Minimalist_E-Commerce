import React from 'react'

function SmallsampleImage(props) {
    return (
        <>
            <div className='smallimage' >
                <img className='img' src={props.image}/>
                <div className='text small-text'>
           <h1>{props.name}</h1>
           </div>
            </div>
        </>
      )
}

export default SmallsampleImage