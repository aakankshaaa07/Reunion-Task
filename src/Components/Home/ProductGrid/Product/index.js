import React from 'react'
import './styles.css'

/* eslint-disable no-unused-expressions */

const ProductCard = ({item:{address, rent, bedrooms, category, location, date, imgsrc}, 
}) => (
  <div className='product-card'>
    <img src={imgsrc} alt="item"/>
    <div className="content">
      <header>
        <h4>{address}, {location}</h4>
        <span><h4>₹{rent}000/month</h4></span>
      </header>
      <footer>
        <p>On lease from <b>{date}</b></p>
        <p>{bedrooms} rooms</p>
        <button className='interested'>Interested!</button>
      </footer>
    </div>
  </div>
)

export default ProductCard
