import React from 'react'


function Front() {

  return (
    <div>

    <div className="nav-container">

        <img src='../src/assets/logo2.png'alt='Logo' className='logos'/>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">Latest</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/profile">Profile</a></li>
      </ul>
    </div>


  <div className='container-product'>
    <div className='product-description'>
      <div><h2>Here and now</h2></div>
      <div className='product-name'>Pet Rock</div>
      <div><h4>Pet Rock is a collectible toy made in 1975 by advertising executive Gary Dahl. They were rocks packaged in custom cardboard boxes complete with ventilation holes and straw bedding imitating a pet carrier</h4></div>
    </div>
      <div>
         <img src='../src/assets/pet rock.jpg' alt='pet-rock' className='product-img'/>
      </div>
  </div>
    </div>
  )
}

export default Front
