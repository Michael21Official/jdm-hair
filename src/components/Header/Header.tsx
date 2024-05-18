import React, { useState } from 'react';
import './Header.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="ring">
        <i style={{"--clr": "#f5deb3"} as React.CSSProperties}></i>
        <i style={{"--clr": "#f5deb3"} as React.CSSProperties}></i>
        <i style={{"--clr": "#f5deb3"} as React.CSSProperties}></i>
        <div className='img_logo' />
      </div>
      <button className="menu-toggle" onClick={toggleMenu}>
        <span className="hamburger-icon">&#9776;</span>
      </button>
      <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li><button onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>Usługi</button></li>
          <li><button onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}>Galeria</button></li>
          <li><button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>O nas</button></li>
          <li><button onClick={() => document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' })}>Opinie</button></li>
          <li><button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>Kontakt</button></li>
        </ul>
      </nav>
      <div className='logo_text'>JDM HAIR - Justyna Dziedzic-Murzydło</div>
      <div className='contact_info'>
        <div className='contact_item'>
          <i className="fas fa-phone-alt"></i>
          <span>+48 123 456 789</span>
        </div>
        <div className='contact_item'>
          <i className="fas fa-envelope"></i>
          <span>contact@jdmhair.pl</span>
        </div>
        <div className='contact_item'>
          <i className="fas fa-map-marker-alt"></i>
          <span>Ul. Przykładowa 1, Warszawa</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
