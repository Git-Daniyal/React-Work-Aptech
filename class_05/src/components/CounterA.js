import React from 'react'
import useCounter from './useCounter'
const CounterA = () => {

    const [count, Increament, Decreament] = useCounter(0);

    return (

        <>

            <h1 className='mx-2'> {count}</h1>

            <button type='button' className='btn btn-secondary mx-2' onClick={Increament}>Increament</button>
            
            <button type='button' className='btn btn-danger' onClick={Decreament}>Decreament</button>

        </>

    )
}

export default CounterA