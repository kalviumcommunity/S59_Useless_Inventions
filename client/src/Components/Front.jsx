import React from 'react'
import { useState } from 'react'

function Front() {
    const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <div>
    <nav>
    <div className="nav-container">
      <div className="logo">
        <img src='../src/assets/Screenshot (146).png'alt='Logo' className='logos'/>
      </div>
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <button type="submit">Search</button>
      </form>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">Latest</a></li>
        <li><a href="/contact">Profile</a></li>
        
      </ul>
    </div>
  </nav>
    </div>
  )
}

export default Front
