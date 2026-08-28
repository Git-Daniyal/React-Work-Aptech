import React, { useContext } from 'react';
import { Data, Data1 } from './App';

const ChildA = () => {

    const username = useContext(Data);
    const useremail = useContext(Data1);
    return (
        <>
        <p className="bg-dark col-3 text-white p-3 mt-2 rounded container text-center" >Username is : <span className="fw-bold">{username}</span></p>
        <p className="bg-dark col-3 text-white p-3 mt-2 rounded container text-center" >Email is : <span className="fw-bold">{useremail}</span></p>
        </>
    )
}

export default ChildA