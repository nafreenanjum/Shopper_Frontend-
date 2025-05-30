import React from 'react';
import './Hero.css';
import hand_icon from '../Assets/hand_icon.png';
import arrow from '../Assets/arrow.png';
import hero_image from '../Assets/hero_image.png';


export default function Hero() {
    return (
        <div className='hero'>
            <div className="hero-left">
                <h2> NEW ARRIVALS ONLY </h2>
                
            </div>
            <div className="hero-hand-icon">
                <p>new</p>
                <img src={hand_icon} alt="Hand icon" />
            </div>
            <div className="heading">
            <p>collection</p>
            <p>for everyone</p>
            </div>
            
            <div className="hero-latest-btn">
                <p> LATEST COLLECTION</p>
                <img src={arrow} alt="Arrow icon" />
            </div>
            <div className="hero-right">
                <img src={hero_image} alt="Hero" />
            </div>
        </div>
    );
}