import React from 'react';
import instagram_icon from '../Assets/instagram_icon.png'; // Adjusted path
import footer_logo from '../Assets/logo_big.png'; // Adjusted path
import pintester_icon from '../Assets/pintester_icon.png'; // Adjusted path
import whatsapp_icon from '../Assets/whatsapp_icon.png'; // Adjusted path
import './Footer.css';

export default function Footer() {
  return (
    <div className="footer">
        <div className="footer-logo">
            <img src={footer_logo} alt="footer logo"/>
            <p>SHOPPER</p>
        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Product</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icon-container">
                <img src={instagram_icon} alt="Instagram"/>
            </div>
            <div className="footer-icon-container">
                <img src={pintester_icon} alt="Pinterest"/>
            </div>
            <div className="footer-icon-container">
                <img src={whatsapp_icon} alt="WhatsApp"/>
            </div>
        </div>
        <div className="footer-copyright">
            <hr/>
            <p>Copyright @ 2023 - All Right Reserved</p>
        </div>
    </div>
  );
}