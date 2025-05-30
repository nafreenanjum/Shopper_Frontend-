import React from 'react'
import './Breadcrum.css'
import arrow from '../Assets/breadcrum_arrow.png'

export default function Breadcrum(props) {
    const {product}=props;
  return (
    <div className="breadcrum">
      HOME <img src={arrow} alt="" /> SHOP <img src={arrow} alt="" />{product.category} <img src={arrow} alt="" />{product.name}
    </div>
  )
}
