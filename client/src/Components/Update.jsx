import React, { useState } from 'react';

function Update({ invention, onUpdate }) {
  const [editedInvention, setEditedInvention] = useState({
    Invention: invention.Invention,
    Founder: invention.Founder,
    Founded: invention.Founded,
    Description: invention.Description,
  });
  const [showConfirmation, setShowConfirmation] = useState(false); 

  const handleInputChange = event => {
    const { name, value } = event.target;
    setEditedInvention(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch(`https://s59-useless-inventions-1.onrender.com/api/${invention._id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editedInvention),
      });
      if (!response.ok) {
        throw new Error(`Error updating invention: ${response.statusText}`);
      }
      setShowConfirmation(true); 
      onUpdate(editedInvention);
    } catch (error) {
      console.error('Error updating invention:', error);
    }
  };

  return (
    <div className="update-form">
      <label>
        Invention Name:
        <input
          type="text"
          name="Invention"
          value={editedInvention.Invention}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Founder:
        <input
          type="text"
          name="Founder"
          value={editedInvention.Founder}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Founded Year:
        <input
          type="text"
          name="Founded"
          value={editedInvention.Founded}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Description:
        <textarea
          name="Description"
          value={editedInvention.Description}
          onChange={handleInputChange}
        />
      </label>
      <button type="button" onClick={handleSubmit}>
        Update Invention
      </button>
      {showConfirmation && (
        <div className="confirmation-message">Invention updated successfully!</div>
      )}
    </div>
  );
}

export default Update;
