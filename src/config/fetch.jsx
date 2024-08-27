import React, { useEffect, useState } from 'react';

const URI = 'http://localhost:3000/api/recipes'; 

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
        console.log(result.data); // Check the structure of the response
        setData(result.data); // Assuming result.data is an array of facts
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
          {data.map((fact, index) => (
            <li key={index}>{fact.fact}</li>
          ))}
        </ul>
      ) : (
        'Loading...'
      )}
    </div>
  );
};

export default FetchComponent;
