import React from 'react';
import Header from '../components/Header/Header';
import AboutUs from '../components/AboutUs/AboutUs';
import Services from '../components/Services/Services';
import Gallery from '../components/Gallery/Gallery';
import Testimonials from '../components/Testimonials/Testimonials';
import Contact from '../components/Contact/Contact';
import LocationMap from '../components/LocationMap/LocationMap';
import Footer from '../components/Footer/Footer';

const MainForm: React.FC = () => {
  return (
    <div>
      <Header />
      <AboutUs />
      <Services />
      <Gallery />
      <Testimonials />
      <Contact />
      <LocationMap />
      <Footer />
    </div>
  );
};

export default MainForm;
