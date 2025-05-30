import React from 'react';
import './Popular.css';
import { useState } from 'react';
import { useEffect  } from 'react';

import Items from '../Items/Items'; // Adjusted path to the Items component

export default function Popular() {

  const [popularProducts,setPopularProducts]=useState([]);
  useEffect(() => {
    fetch('http://localhost:3001/popularinwomen')
      .then((response) => response.json())
      .then((data) => setPopularProducts(data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);
  
  return (
    <div className="popular">
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="popular-item">
        {popularProducts.map((item, i) => {
          return <Items key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />;
        })}
      </div>
    </div>
  );
}