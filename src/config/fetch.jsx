import React, { useEffect, useState } from 'react';

const URI = 'http://localhost:3000/api/recipes'; 

const FetchComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(URI, {
          method: "GET",
          headers: {
            'Content-Type': 'application/json'
          }
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const result = await response.json();
        console.log(result); // Check the structure of the response
        setData(result.data); // Assuming result.data is an array of objects
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {/* Rendering the data */}
      {data ? (
        <ul>
          {data.map((item, index) => (
            <li key={index}>{item.fact || item.name}</li> 
          ))}
        </ul>
      ) : (
        'Loading...'
      )}
    </div>
  );
};

export default FetchComponent;
