import React, { useState, useEffect } from 'react';
import Delete from './Delete';
import Update from './Update';

function Inventions() {
  const [inventions, setInventions] = useState([]);
  const [isUpdating, setIsUpdating] = useState(false);
  const [selectedInvention, setSelectedInvention] = useState(null);

  useEffect(() => {
    fetch('https://s59-useless-inventions-1.onrender.com/api')
      .then(response => response.json())
      .then(data => {
        const inventionsWithDescriptions = data.map(invention => ({
          ...invention,
          showDescription: false
        }));
        setInventions(inventionsWithDescriptions);
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

  const handleUpdateClick = invention => {
    setSelectedInvention(invention);
    setIsUpdating(true);
  };

  const handleUpdate = async updatedInvention => {
    try {
      const response = await fetch(`https://s59-useless-inventions-1.onrender.com/api/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedInvention),
      });
      if (!response.ok) {
        throw new Error(`Error updating invention: ${response.statusText}`);
      }
      const updatedInventions = inventions.map(inv =>
        inv._id === updatedInvention._id ? updatedInvention : inv
      );
      setInventions(updatedInventions);
      setIsUpdating(false);
    } catch (error) {
      console.error('Error updating invention:', error.message);
    }
  };
  

  useEffect(()=>{
    console.log(inventions)
  },[inventions])

  return (
    <div className='data-main'>
      {inventions.map((invention, index) => (
        <div key={index} className='dataa'>
        <div  className='image'>
          <img src={invention.Image} className='Invention-img' />
        </div>
        <div>
          <h2 style={{ color: 'white' }}>{invention.Invention}</h2>
          
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
          <button className="button" onClick={() => handleUpdateClick(invention)}>
            Update Description
          </button>
          {isUpdating && selectedInvention === invention && (
            <Update invention={invention} onUpdate={handleUpdate} />
          )}
          <Delete id={invention._id} />
          </div>
        </div>
        
      ))}
      
    </div>
  );
}

export default Inventions;
