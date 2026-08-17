import React from 'react'
import ChildC from './ChildC'
const ChildA = ({ username }) => {
  return (
       <div>
            <h3>
                Child B Component
            </h3>
            <ChildC username={username}/>
        </div>
  )
}

export default ChildA