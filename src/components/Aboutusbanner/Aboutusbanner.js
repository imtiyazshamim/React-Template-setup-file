import React, { useEffect } from 'react';
import AOS from 'aos'; // Import AOS for animations
import 'aos/dist/aos.css'; // Import AOS styles
import { Link } from 'react-router-dom'; // Import Link from React Router
import './Aboutusbanner.css'; // Import CSS for the component

function Aboutusbanner() {

  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="aboutus-banner">
      <div className="aboutus-content" data-aos="fade-up">
        <h1 data-aos="fade-up">About Us</h1>
        <p data-aos="fade-up" data-aos-delay="100">Learn more about our journey and mission.</p>
        {/* Use Link for internal routing */}
        <Link to="/services" className="btn-learn-more" data-aos="fade-up" data-aos-delay="200">
          Learn More
        </Link>
      </div>
    </section>
  );
}

export default Aboutusbanner;
