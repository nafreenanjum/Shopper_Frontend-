import React from 'react';
import './Items.css'; // Ensure the path to the CSS file is correct
import { Link } from 'react-router-dom';

export default function Items(props) {
  return (
    <div className='item'>

      <Link to ={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.image} alt={props.name} /></Link>
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-price-new">
          Rs {props.new_price}
        </div>
        {props.old_price && (
          <div className="item-price-old">
            Rs {props.old_price}
          </div>
        )}
      </div>
    </div>
  );
}