import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './component/Home/Home';
import About from './component/About/About';
import Services from './component/Services/Service';
import Blog from './component/Blog/Blog';
// import Community from './component/Community/Community'
import ContactUs from './component/ContactUs/Contact';
import Navbar from './component/Navbar/Navbar'; 
import Footer from './component/Footer/footer';
import Events from './component/Community/Events';
import Careers from './component/Community/Careers';
import Testimonials from './component/Community/Testimonials';
import Faqs from './component/Community/Faqs';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          {/* <Route path="/community" element={<Community />} /> */}
          <Route path="/events" element={<Events />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
