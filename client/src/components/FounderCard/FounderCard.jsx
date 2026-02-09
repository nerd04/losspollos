import { useState } from 'react';
import './FounderCard.css';
import { fassets } from '../../assets/frontend_assets/assets';

export default function FounderCard() {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="founder-container">
      <div
        className={`founder-card ${flipped ? 'is-flipped' : ''}`}
        role="button"
        tabIndex={0}
        onClick={() => setFlipped(v => !v)}
        onKeyDown={(e) =>
          (e.key === 'Enter' || e.key === ' ') && setFlipped(v => !v)
        }
      >
        {/* FRONT */}
        <div className="founder-front">
          <img
            src={fassets.founder_image}
            alt="Gustavo Fring"
            className="founder-image"
          />

          <div className="founder-front-overlay">
            <h3 className="founder-name">Gustavo Fring</h3>
            <p className="founder-title">Founder & Visionary</p>
          </div>
        </div>

        {/* BACK */}
        <div className="founder-back">
          <h3 className="founder-back-heading">
            Our Esteemed Founder
          </h3>

          <blockquote className="founder-quote">
            “A man provides. And he does it even when he’s not appreciated,
            or even respected, or even loved.”
          </blockquote>

          <div className="founder-info-section">
            <h4>Our Mission</h4>
            <p>
              To serve food that's exceptional — crafted with passion,
              precision, and a touch of perfection.
            </p>
          </div>

          <div className="founder-info-section">
            <h4>Our Inspiration</h4>
            <p>
              Founded on principles of quality and trust, Los Pollos
              stands as a symbol of culinary excellence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
