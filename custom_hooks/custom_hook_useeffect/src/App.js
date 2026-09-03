import React from 'react';
import useFetch from './useFetch';

const App = () => {

  const { data, loading, error } = useFetch(
    'https://jsonplaceholder.typicode.com/users'
  );

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      <h2>Users Details</h2>

      {data.map((user) => (
        <p key={user.id}>
          Username is {user.username}
        </p>
      ))}
    </div>
  );
};

export default App;