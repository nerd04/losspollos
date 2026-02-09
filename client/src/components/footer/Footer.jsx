// Footer.jsx
import React from 'react';
import './footer.css';
import { assets } from '../../assets/admin_assets/assets';
import { fassets } from '../../assets/frontend_assets/assets';

function Footer() {
  return (
    <footer id="footer" className="footer">
      <div className="footer-content">
        {/* Left */}
        <div className="footer-content-left">
          <img src={assets.logo2} alt="Logo" className="footer-logo" />
          <p>
            Fresh flavors, fast delivery, and meals made with love. We bring the
            restaurant experience right to your door.
          </p>

          <div className="footer-social-icons">
            <img src={fassets.facebook_icon} alt="Facebook" />
            <img src={fassets.twitter_icon} alt="Twitter" />
            <img src={fassets.linkedin_icon} alt="LinkedIn" />
          </div>
        </div>

        {/* Middle */}
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery Information</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Right */}
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+1-212-344-2213</li>
            <li>gustavo@lospollos.com</li>
          </ul>
          <p className="footer-tagline">
            Have questions or special requests? Our team is here to serve you 24/7.
          </p>
        </div>
      </div>

      <hr />

      <p>
        © {new Date().getFullYear()} TastyExpress. All rights reserved. Your favorite
        food, delivered faster than you can say “I’m hungry”.
      </p>
    </footer>
  );
}

export default Footer;
