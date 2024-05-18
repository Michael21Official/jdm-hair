// Header.tsx
import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="ring">
        <i style={{"--clr": "#f5deb3"} as React.CSSProperties}></i>
        <i style={{"--clr": "#f5deb3"} as React.CSSProperties}></i>
        <i style={{"--clr": "#f5deb3"} as React.CSSProperties}></i>
        <div className='img_logo' />
      </div>
      <div className='logo_text'>JDM HAIR - Justyna Dziedzic-Murzydło</div>
      <nav className='nav'>
        <ul>
          <li><button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>O nas</button></li>
          <li><button onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>Usługi</button></li>
          <li><button onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}>Galeria</button></li>
          <li><button onClick={() => document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' })}>Opinie</button></li>
          <li><button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>Kontakt</button></li>
        </ul>
      </nav>
      <div className='contact_info'>Informacje kontaktowe</div>
    </header>
  );
};

export default Header;
