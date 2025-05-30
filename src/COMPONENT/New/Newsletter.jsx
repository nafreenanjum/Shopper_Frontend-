import React from 'react'
import './Newsletter.css'

export default function Newsletter() {
  return (
    <div className="newsletter">
        <h1>Get Exclusive Offer On Your Email </h1>
        <p> Subscribe to our newsletter and stay updated </p>
        <div>
            <input type="email" placeholder="enter your email"/>
            <button>Subscribe</button>
        </div>
    </div>
  )
}