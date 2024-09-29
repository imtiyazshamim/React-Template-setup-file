import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import AOS from 'aos'; // Import AOS for animations
import 'aos/dist/aos.css'; // Import AOS styles
import './Homebanner.css'; 

function Homebanner() {
  
 
  return (
    <section className="homebanner">
      <div className=" container banner-content" data-aos="fade-up">
        <h1 data-aos="fade-up">Welcome to QuickStart</h1>
        <p data-aos="fade-up" data-aos-delay="100">Kickstart your journey with the best platform.</p>
        {/* Use Link for internal routing */}
        <Link to="/contact" className="btn-get-started" data-aos="fade-up" data-aos-delay="200">
          Get Started
        </Link>
      </div>
    </section>
  );
}

export default Homebanner;
