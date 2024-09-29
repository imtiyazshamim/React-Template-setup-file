import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import AOS from 'aos'; // Import AOS for animations
import 'aos/dist/aos.css'; // Import AOS styles
import './Footer.css'; // Import CSS for the component

function Footer() {

  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <footer className="footer">
      <div className="footer-content container">
        {/* About Section */}
        <div className="footer-section about" data-aos="fade-up">
          <h2>QuickStart</h2>
          <p>
            QuickStart is the best platform for learners and businesses to grow. Join us to accelerate your learning journey.
          </p>
          <div className="socials">
            <a href="#"><i className="bi bi-facebook"></i></a>
            <a href="#"><i className="bi bi-twitter"></i></a>
            <a href="#"><i className="bi bi-linkedin"></i></a>
            <a href="#"><i className="bi bi-instagram"></i></a>
          </div>
        </div>

        {/* Links Section */}
        <div className="footer-section links" data-aos="fade-up" data-aos-delay="100">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-section contact" data-aos="fade-up" data-aos-delay="200">
          <h3>Contact Us</h3>
          <p><i className="bi bi-envelope"></i> info@example.com</p>
          <p><i className="bi bi-telephone"></i> +123 456 789</p>
          <p><i className="bi bi-geo-alt"></i> 123, Some Street, City</p>
        </div>
      </div>

      <div className="footer-bottom" data-aos="fade-up" data-aos-delay="300">
        <p>&copy; 2024 QuickStart | All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
