import { useState, useEffect } from 'react';
import axios from 'axios';

const useAxios = (url) => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    axios
      .get(url)

      .then((response) => {
        setData(response.data.products);
        setLoading(false);
      })

      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });

  }, [url]);

  return {
    data,
    loading,
    error
  };
};

export default useAxios;