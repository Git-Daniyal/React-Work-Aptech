import React, {createContext,useContext,useState} from 'react'
import ChildA from './ChildA'

export const userContext = createContext();

const Context = () => {
    const [user, setUser] = useState("Helo World");
  return (

    <userContext.Provider value={user}>
    <ChildA></ChildA>
    </userContext.Provider>

  )
}

export default Context