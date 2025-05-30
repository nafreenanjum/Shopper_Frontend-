import React from 'react';
import './NewCollection.css';
import { useState } from 'react';
import { useEffect } from 'react';
import Items from '../Items/Items'; // Adjusted path to point to Items component

export default function NewCollection() {
  const [new_collection,setNew_collection] =useState([]);
  useEffect(() => {
    fetch('http://localhost:3001/newcollection')  // ✅ Correct path
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched new collection:", data);
        setNew_collection(data);
      })
      .catch((err) => console.error("Fetch error:", err));
  }, []);
  
  return (
    <div className="new-collections">
      <h1> NEW COLLECTION </h1>
      <hr />
      <div className="collections">
        {new_collection.map((item, i) => (
          <Items
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  );
}