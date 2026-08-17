import React, {useState} from 'react'
import ChildA from './ChildA'
const Parent = () => {

    const [username, setUsername] = useState("Daniyal Ahmed");

  return (

    <div>
        <h1>
            Parent Component
        </h1>
        <ChildA username={username}/>
    </div>
  )
}

export default Parent