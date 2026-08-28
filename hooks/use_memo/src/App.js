import React, { useMemo, useState } from 'react';
import './App.css';


function App() {

  const [count, setCount] = useState(0);
  const [minus, setMinus] = useState(100);

  const multiplication = useMemo( function Mult() {
    return count * 10
  }, [count]
)

  function Add() {
    setCount(count + 1)
  }

  function Sub() {
    setMinus(minus - 1)
  }
  return (

    <>
    <center>

     <p className='h4 p-2 mt-3 text-white bg-dark rounded text-center col-3'>Multiplication Value is : {multiplication}</p>

      <h3 className=''>Addition value is :{count}</h3>
      <button type='button' className='btn btn-primary w-25' onClick={Add}>Add</button>


      <h3 className=''>Subtraction value is :{minus}</h3>
      <button type='button' className='btn btn-danger w-25' onClick={Sub}>Subtract</button>

    </center>

    </>
  );
}

export default App;