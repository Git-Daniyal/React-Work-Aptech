import React from 'react'
import ChildC from './ChildC'
const ChildA = ({ username }) => {
  return (
       <div>
            <h1>
                Child B Component
            </h1>
            <ChildC username={username}/>
        </div>
  )
}

export default ChildA