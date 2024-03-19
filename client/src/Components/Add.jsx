import React, { useState } from 'react';

function Add() {
  const [formData, setFormData] = useState({
    "Invention": '',
    "Image": '',
    "Founder": '',
    "Founded": '',
    "Description": ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://s59-useless-inventions-1.onrender.com/api/add-invention', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        setFormData({
          "Invention": '',
          "Image": '',
          "Founder": '',
          "Founded": '',
          "Description": ''
        });
        alert('Invention added successfully!');
      } else {
        alert('Failed to add invention. Please try again later.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div>
      <h2>Add New Invention</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="invention">Invention:</label><br/>
        <input type="text" id="invention" name="Invention" value={formData["Invention"]} onChange={handleChange} required/><br/><br/>

        <label htmlFor="image">Image:</label><br/>
        <input type="text" id="image" name="Image" value={formData["Image"]} onChange={handleChange} /><br/><br/>

        <label htmlFor="founder">Founder:</label><br/>
        <input type="text" id="founder" name="Founder" value={formData["Founder"]} onChange={handleChange} required/><br/><br/>

        <label htmlFor="founded">Founded:</label><br/>
        <input type="text" id="founded" name="Founded" value={formData["Founded"]} onChange={handleChange} required/><br/><br/>

        <label htmlFor="description">Description:</label><br/>
        <textarea id="description" name="Description" value={formData["Description"]} onChange={handleChange} rows="4" required/><br/><br/>

        <input type="submit" value="Submit"/>
      </form>
    </div>
  );
}

export default Add;
