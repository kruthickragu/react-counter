import React, { useState } from 'react'

const App = () => {
  const [count,setCount]=useState(0)
  return (
    <div className='container my-5'>
      <div className='card text-center my-5'>
        <div className='card-body'>
          <h1>Counter App</h1>
          <div className='my-5'>
            <h2 className='my-5'>Count {count} </h2>
            <button onClick={()=>setCount(count+1)} className='btn btn-success mx-3'>Increment</button>
            <button onClick={()=>setCount(count-1)} disabled={count === 0} className='btn btn-danger mx-3'>Decrement</button >
            <button onClick={()=>setCount(0)} className='btn btn-secondary mx-3'>Reset</button>
          
          </div>
          <div className="d-flex justify-content-center align-items-center" >
        <div className="card text-white bg-dark mb-3 "  style={{ maxWidth: '18rem' }} >
  <div className="card-header">Author</div>
  <div className="card-body">
    <h5 className="card-title">K</h5>
    <p className="card-text">Its Just the beginnig.....!</p>
  </div>
  </div>
</div>


         
        </div>
      </div>
    </div>
  )
}

export default App