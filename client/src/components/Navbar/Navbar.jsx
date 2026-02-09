import React, { useState } from 'react';
import { assets } from '../../assets/admin_assets/assets';
import { Search, ShoppingBasket } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import './navbar.css';

export default function Navbar({ setShowLogin }) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleCloseMenu = () => setOpen(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">
        <Link to="/" onClick={handleCloseMenu}>
          <img src={assets.logo2} alt="logo" />
        </Link>
      </div>

      {/* Hamburger */}
      <div
        className={`hamburger ${open ? 'active' : ''}`}
        onClick={() => setOpen(!open)}
      >
        <span />
        <span />
        <span />
      </div>

      {/* Menu */}
      <ul className={`navbar-menu ${open ? 'open' : ''}`}>
        <li onClick={() => { navigate('/'); handleCloseMenu(); }}>
          Home
        </li>

        <li>
          <a href="#explore-menu" onClick={handleCloseMenu}>
            Menu
          </a>
        </li>

        <li>
          <a href="#app-download" onClick={handleCloseMenu}>
            Mobile App
          </a>
        </li>

        <li>
          <a href="#contact-us" onClick={handleCloseMenu}>
            Contact Us
          </a>
        </li>
      </ul>

      {/* Right section */}
      <div className="navbar-right">
        <Search className="icon" />
        <Link to="/cart">
          <ShoppingBasket className="icon" />
        </Link>

        <button
          onClick={() => setShowLogin(true)}
          className="sign-in-btn"
        >
          Sign In
        </button>
      </div>
    </nav>
  );
}
