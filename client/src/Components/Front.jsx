import React, { useState } from 'react';

function Front() {

  const [showDescription, setShowDescription] = useState(false);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  return (
    <div>
    <div className='header'>
       <div className='logo'>
          <div className='center'>
           <img src='../src/assets/logo2.png' className='logo-img'/>
           <div>UseLess Inventions</div>
          </div>
          <div className='nav'>
          <ul>
          <li>Home</li>
          <li>Inventions</li>
          <li>Latest</li>
          <li>Profile</li>
          </ul>
          </div>
       </div>
    </div>
    <div className='main'>
    <div className='side-left'>
      <div className='main-line'>
         Discover The Most Useless Inventions...
      </div>
      <div className='line2'>
      "Welcome to the world of absurd creativity, where the useless becomes the extraordinary."
      </div>
      <div>
        <button type='submit' className='button'>Get Started</button>
        <button type='submit' className='button1'>Log In</button>
      </div>
    </div>
    <div className='side'>
      <img src='../src/assets/EarthQuake.png' className='side-pic'/>
      <div className='name'>Earthquake Machine</div>
      <div className='info'>
        <div>Nikola Tesla</div>
        <div>Founded In: 1893</div>
        </div>
        <button className='button' onClick={toggleDescription}>
        {showDescription ? 'Close Description' : 'Show Description'}
      </button>
      {showDescription && (
        <div className='popup'>
          
          <p>
          Innovative device generates controlled seismic activity, simulating earthquakes for research or disaster preparedness, revolutionizing geological studies and safety measures.</p>
        </div>
      )}
      
      </div>
    </div>
    </div>
  )
}

export default Front
