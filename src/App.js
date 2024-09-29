import './App.css';
import 'aos/dist/aos.css'; // Import AOS CSS
import 'glightbox/dist/css/glightbox.css'; // Import GLightbox CSS
import AOS from 'aos'; // Import AOS
import GLightbox from 'glightbox'; // Import GLightbox
import { useEffect } from 'react'; // Import useEffect to initialize AOS and GLightbox

import Aboutus from './Pages/Aboutus';
import Contactus from './Pages/Contactus';
import Home from './Pages/Home';
import Services from './Pages/Services';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 600,  // Set animation duration (optional)
      easing: 'ease-in-out',
      once: true,  // Whether animation should happen only once
      mirror: false  // Whether elements should animate out while scrolling past them
    });

    // Initialize GLightbox for any elements that need it
    const lightbox = GLightbox({
      selector: '.glightbox', // Customize the selector if needed
    });
    
  }, []); // Empty dependency array so it only runs once on mount

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<Aboutus />} />
          <Route path="/contact" element={<Contactus />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
