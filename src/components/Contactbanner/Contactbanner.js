import React from 'react';
import './Contactbanner.css'; // Import the CSS file

function Contactbanner() {
  return (
    <section className="contact-banner">
     <div className="container">
     <div className=" banner-content">
        <h1>Contact Us</h1>
        <p>We are here to help you. Fill in the form below, and we’ll get back to you shortly.</p>
        <form className="contact-form">
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <input type="email" className="form-control" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <textarea className="form-control" rows="4" placeholder="Your Message" required></textarea>
          </div>
          <button type="submit" className="btn-submit">Send Message</button>
        </form>
      </div>
     </div>
      
    </section>
  );
}

export default Contactbanner;
