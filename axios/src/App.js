import React from 'react';
import useAxios from './useAxios';

const App = () => {

  const { data, loading, error } = useAxios(
    'https://dummyjson.com/products'
  );

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error: {error}</h1>;
  }

  return (
    <div>

      <h2>Products Details</h2>

      {data.map((product) => (

        <div key={product.id}>

          <h3>ID: {product.id}</h3>

          <h3>Title: {product.title}</h3>

          <p>Category: {product.category}</p>

          <p>Price: ${product.price}</p>

          <hr />

        </div>

      ))}

    </div>
  );
};

export default App;