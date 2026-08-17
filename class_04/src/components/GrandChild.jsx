import React, { useContext } from 'react'
import Context, { userContext } from './Context'
const GrandChild = () => {

    const user = useContext(userContext);
    return (

        
        <h2> Grand Child Name is : {user}</h2>
        

  )
}

export default GrandChild