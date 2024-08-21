import React, { useEffect, useState } from 'react';

const URI = 'https://catfact.ninja/facts'; 

const FetchComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(URI);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        console.log(result.data); // Handle the data from the response
        setData(result.data);
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
      }
    };

    fetchData();
  }, []); 

  return (
    <div>
      {/* {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Loading...'} */}
    </div>
  );
};

export default FetchComponent;
