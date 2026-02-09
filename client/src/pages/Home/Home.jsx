import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import Menu from '../../components/Menu/Menu';
import FoodItemDisplay from '../../components/FoodItemDisplay/FoodItemDisplay';
import AppDownload from '../../components/AppDownload/AppDownload';
import ContactUsCard from '../../components/contactForm/ContactUs';
import FounderCard from '../../components/FounderCard/FounderCard';
import './home.css';

export default function Home() {
  const [category, setCategory] = useState('All');

  return (
    <div className="home">
      <Header />

      <main>
        <Menu category={category} setCategory={setCategory} />
        <FoodItemDisplay category={category} />
        <AppDownload />

        {/* Contact + Founder section */}
        <section id="contact-founder" className="contact-founder-section">
          <div className="contact-founder-container">
            {/* Contact card */}
            <div className="contact-founder-card">
              <ContactUsCard />
            </div>

            {/* Founder card */}
            <div className="contact-founder-card">
              <FounderCard />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
