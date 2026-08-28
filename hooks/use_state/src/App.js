import React, { useState } from 'react'

const App = () => {

  const [count, setCount] = useState(0);

  return (

    <>

      <p className="h2 text-white bg-primary p-2 rounded mt-2 ms-3 text-center col-6"> Count Value is : {count} </p>

      <button type="button" onClick={() => setCount(count + 1)} className="btn btn-success ms-2 w-25 fw-bold">Increment</button>
      <button type="button" onClick={() => setCount(count - 1)} className="btn btn-danger ms-3 w-25 fw-bold">Decrement</button>
    </>

  )
}

export default App