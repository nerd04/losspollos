// ContactUs.jsx
import React from 'react';
import { FaUser, FaEnvelope, FaCommentDots } from 'react-icons/fa';
import './contactus.css';

const ContactUsCard = () => (
  <div className="contact-card">
    <div className="contact-header">
      <h2>Get in Touch</h2>
      <p>
        We’d love to hear from you! Fill out the form below and we’ll get back to
        you soon.
      </p>
    </div>

    <form
      className="contact-form"
      onSubmit={(e) => e.preventDefault()}
    >
      <div>
        <label htmlFor="name">
          <FaUser className="form-icon" />
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="form-input"
          placeholder="Your full name"
        />
      </div>

      <div>
        <label htmlFor="email">
          <FaEnvelope className="form-icon" />
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="form-input"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label htmlFor="message">
          <FaCommentDots className="form-icon" />
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          className="form-input textarea"
          placeholder="Write your message..."
        />
      </div>

      <button type="submit" className="form-button">
        Send Message
      </button>
    </form>
  </div>
);

export default ContactUsCard;
