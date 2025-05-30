import React from 'react';
import './Offer.css';
import exclusive_image from '../Assets/exclusive_image.png'; // Go up one directory


export default function Offer() {
  return (
    <div className="offers">
      <div className="offer-left">
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <p>ONLY ON BEST SELLER PRODUCT</p>
        <button>Check Now</button>
      </div>
      <div className="offer-right">
        <img src={exclusive_image} alt="Exclusive Offer" />
      </div>
    </div>
  );
}