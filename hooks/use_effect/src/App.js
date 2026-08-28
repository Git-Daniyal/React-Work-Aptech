import React from 'react'
import { useState, useEffect } from 'react'
const App = () => {

  const [user, setUser] = useState([]);

  useEffect(() => {

    fetch('https://jsonplaceholder.typicode.com/users').then((res) => res.json()).then((data) => {
      setUser(data);
    })
      .catch((err) => {
        console.log(err);
      })
  }, [])

  return (

    <>

      <h1 className='bg-dark text-center text-white p-2 mt-3 rounded container'>Users List</h1>


      <table className='container table table-striped table-hover table-bordered'>

        <thead className='table-dark'>
          
        <tr>
          <th>Id</th>
          <th>Username</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Website</th>
          <th>Address</th>
        </tr>
        </thead>
        {user.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.username}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td>{user.website}</td>
            <td>{user.address.street}, {user.address.city}</td>
          </tr>
        ))}

      </table>

       
    </>

  )
}

export default App