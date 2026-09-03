import { useState, useEffect } from 'react';

const useFetch = (url) => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    fetch(url)
      .then((res) => {

        if (!res.ok) {
          throw Error('Internal server error');
        }

        return res.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });

  }, [url]);

  return { data, loading, error };
};

export default useFetch;