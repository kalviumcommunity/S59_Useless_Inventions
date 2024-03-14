import React, { useState, useEffect } from 'react';

function Inventions() {
  const [inventions, setInventions] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8088/api')
    .then(response => response.json())
      .then(data => {
        setInventions(data);
        console.log(data);
      })
      .catch(error => {
        console.error('Error fetching data');
      });
  }, []); 

  return (
    <div className='data'>
      {inventions.map((invention, index) => (
        <div key={index} className='dataa'>
          <h2 style={{color:'white'}}>{invention.Invention}</h2>
          <img src={invention.Image} className='Invention-img'/>
          <h3>Founder: {invention.Founder}</h3>
          <div>Founded In: {invention.Founded}</div>
          <div>{invention.Description}</div>
        </div>
      ))}
    </div>
  );
}

export default Inventions;

