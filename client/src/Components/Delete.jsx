import React from 'react';
function Delete({ id }) {
  const handleClick = async () => {
    try {
      const response = await fetch(`https://s59-useless-inventions-1.onrender.com/api/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`Error deleting entity with ID ${id}: ${response.statusText}`);
      }


    } catch (err) {
      console.error('Error deleting entity:', err.message);
    }
  };

  return (
    <button onClick={handleClick}><img src="https://cdn-icons-png.flaticon.com/512/8508/8508366.png" alt="delete" width="20px" /></button>
  );
}

export default Delete;