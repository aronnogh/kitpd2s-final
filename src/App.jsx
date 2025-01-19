import React from 'react';
import FOF from './pages/FOF';
import { BrowserRouter, Route, Routes } from 'react-router';
import NavS from './components/NavBar/NavS';
import NavL from './components/NavBar/NavL';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import AboutUs from './pages/aboutUS/AboutUs';
import ContactUs from './pages/home/ContactUs';
import Gallery from './pages/gallery/Gallery';
import TeamLeads from './pages/team/TeamLeads';

const App = () => {
  return (
    <BrowserRouter>
      <NavS />
      <NavL />
      <section id='main' className='my-0 lg:my-5'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/team" element={<TeamLeads />} />
          {/* <Route path="/portfolio" element={<Portfolio />} /> */}
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/*" element={<FOF />} />
          {/* <Route path="/cta-response" element={<FOF />} /> */}
        </Routes>
      </section>
      <Footer />
    </BrowserRouter>
  );
}

export default App;