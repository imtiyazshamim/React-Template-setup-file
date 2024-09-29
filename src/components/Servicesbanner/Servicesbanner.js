import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './Servicesbanner.css'; // Import the CSS file

function Servicesbanner() {
  return (
    <section className="services-banner">
      <div className="banner-content">
        <h1>Our Professional Services</h1>
        <p>Empowering your business with top-notch solutions and expert guidance.</p>
        <Link to="/contact" className="btn-get-started">Contact Us</Link>
      </div>
    </section>
  );
}

export default Servicesbanner;
