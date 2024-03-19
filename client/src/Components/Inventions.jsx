import React, { useState, useEffect } from 'react';

function Inventions() {
  const [inventions, setInventions] = useState([]);

  useEffect(() => {
    fetch('https://s59-useless-inventions-1.onrender.com/api')
      .then(response => response.json())
      .then(data => {
        const inventionsWithDescriptions = data.map(invention => ({
          ...invention,
          showDescription: false
        }));
        setInventions(inventionsWithDescriptions);
        // console.log(inventionsWithDescriptions)
      })
      .catch(error => {
        console.error('Error fetching data');
      });
  }, []);

  const toggleDescription = index => {
    setInventions(prevInventions => {
      const updatedInventions = [...prevInventions];
      updatedInventions[index] = {
        ...updatedInventions[index],
        showDescription: !updatedInventions[index].showDescription
      };
      return updatedInventions;
    });
  };

  useEffect(()=>{
    console.log(inventions)
  },[inventions])

  return (
    <div className='data-main'>
      {inventions.map((invention, index) => (
        <div key={index} className='dataa'>
          <h2 style={{ color: 'white' }}>{invention.Invention}</h2>
          <img src={invention.Image} className='Invention-img' />
          <h3>Founder: {invention.Founder}</h3>
          <div>Founded In: {invention.Founded}</div>
          <button className='button' onClick={() => toggleDescription(index)}>
            {invention.showDescription ? 'Close Description' : 'Show Description'}
          </button>

          {invention.showDescription && (
            <div className=''>
              <p>{invention.Description}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Inventions;
