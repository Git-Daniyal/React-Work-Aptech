import React from 'react'
import ChildB from './ChildB'
const ChildA = ({ username }) => {
  return (
       <div>
            <h2>
                Child A Component
            </h2>
            <ChildB username={username}/>
        </div>
  )
}

export default ChildA