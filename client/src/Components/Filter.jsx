import React, { useState, useEffect } from 'react';
import Delete from './Delete';
import Update from './Update';

function Filter() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState('');
  const [inventions, setInventions] = useState([]);
  const [selectedInvention, setSelectedInvention] = useState(null);

  const fetchUsers = () => {
    fetch('http://localhost:8088/api/users')
      .then(response => response.json())
      .then(data => {
        setUsers(data);
      })
      .catch(error => console.error('Error fetching users:', error));
  };

  const fetchInventions = user => {
    fetch(`http://localhost:8088/api/user/${user}`)
      .then(response => response.json())
      .then(data => {
        setInventions(data);
      })
      .catch(error => {
        setError('Error fetching inventions: ' + error.message);
        console.error('Error fetching inventions:', error);
      });
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    if (selectedUser) {
      fetchInventions(selectedUser);
    }
  }, [selectedUser]);

  const handleUserChange = event => {
    setSelectedUser(event.target.value);
  };

  const handleUpdateClick = id => {
    const selected = inventions.find(inv => inv._id === id);
    setSelectedInvention(selected);
  };

  return (
    <div>
      <h1>Accessories added by {selectedUser}</h1>
      <select value={selectedUser} onChange={handleUserChange}>
        <option value="">Select a user</option>
        {users.length > 0 &&
          users.map((user, index) => (
            <option key={index} value={user}>
              {user}
            </option>
          ))}
      </select>

      <div>
        <h1>Selected Inventions:</h1>
        <div>
          {inventions.length > 0 ? (
            inventions
              .filter(invention => invention.User === selectedUser)
              .map(data => (
                <div key={data._id}>
                  <div>
                    <div>{data.Invention}</div>
                    <img src={data.Image} alt={data.Invention} />
                    <h2>{data.User}</h2>
                  </div>
                  <div>
                    <div>
                      <h3>{data.Founder}</h3>
                      <p>{data.Founded}</p>
                    </div>
                    <br />
                    <button onClick={() => handleUpdateClick(data._id)}>
                      Update Invention
                    </button>
                    <Delete id={data._id} />
                  </div>
                </div>
              ))
          ) : (
            <p>No inventions available for the selected user</p>
          )}
        </div>
      </div>
      {selectedInvention && (
        <Update
          invention={selectedInvention}
          onUpdate={() => {
            
            setSelectedInvention(null);
          }}
        />
      )}
    </div>
  );
}

export default Filter;
