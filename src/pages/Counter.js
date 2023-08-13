import react,{useState} from 'react';

const Count=()=>{
    const[count,setcount]=useState(0)


    return(
        <div className='container my-5'>
          
      <div className='card-body'>
      <div className='my-5'>
       <h1 className='my-5'>{count}</h1>
         <button className='btn bnt-success mx-3' onClick={()=>setcount(count+1) }  >+</button>
         <button className='btn bnt-success mx-3' onClick={()=>setcount(count-1)} disabled={count===0} >-</button>
         <button className='btn bnt-success mx-3' onClick={()=>setcount(0)} disabled={count===0} >reset</button>
       </div>
      </div>
        </div>
    );
}
export default Count;