import React from 'react';
import { fassets } from '../../assets/frontend_assets/assets';
import './header.css';

export default function Header() {
  const bg = fassets.header_image || '';

  return (
    <header
      className="header"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <h2>Too tired to cook? We got you.</h2>
      <p>
        Delicious meals delivered right to your door. Fresh, fast, and flavorful —
        crafted for hungry foodies.
      </p>

      <div className="header-buttons">
        <a className="header-btn primary" href="#explore-menu">
          View Menu
        </a>
        <a className="header-btn secondary" href="#app-download">
          Get App
        </a>
      </div>
    </header>
  );
}
