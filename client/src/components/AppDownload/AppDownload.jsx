// AppDownload.jsx
import React from 'react';
import './appdownload.css';
import { fassets } from '../../assets/frontend_assets/assets';

export default function AppDownload() {
  return (
    <section id="app-download" className="app-download">
      <h3>Better experience on mobile</h3>

      <p>
        Download the Los Pollos app for faster checkout, exclusive deals,
        and live order tracking.
      </p>

      <div className="app-download-platforms">
        <img
          src={fassets.app_store}
          alt="Download on the App Store"
        />
        <img
          src={fassets.play_store}
          alt="Get it on Google Play"
        />
      </div>
    </section>
  );
}
