import React from 'react'
import ChildB from './ChildB'
const ChildA = ({ username }) => {
  return (
       <div>
            <h1>
                Child A Component
            </h1>
            <ChildB username={username}/>
        </div>
  )
}

export default ChildA