import React, { useState, useEffect } from 'react';

function Inventions() {
  const [inventions, setInventions] = useState([]);

  useEffect(() => {
    fetch('https://s59-useless-inventions.onrender.com/api')
    .then(response => response.json())
      .then(data => {
        setInventions(data);
      })
      .catch(error => {
        console.error('Error fetching data');
      });
  }, []); 

  return (
    <div>
      {inventions.map((invention, index) => (
        <div key={index}>
          <h1>{invention.Invention}</h1>
        </div>
      ))}
    </div>
  );
}

export default Inventions;

