import React from 'react';
import './LocationMap.css';

const LocationMap: React.FC = () => {
  return (
    <section id="location-map">
      <h2>Lokalizacja</h2>
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d320.23852472875114!2d18.605762!3d50.050551!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47114de78f995b7f%3A0x417902221cacbf7c!2sJDM%20HAIR%20Justyna%20Dziedzic-Murzyd%C5%82o!5e0!3m2!1spl!2spl!4v1716071987231!5m2!1spl!2spl"
          width="100%"
          height="400"
          allowFullScreen
          title="Location Map"
        ></iframe>
      </div>
    </section>
  );
};

export default LocationMap;