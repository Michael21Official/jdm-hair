// LocationMap.tsx
import React from 'react';
import './LocationMap.css';

const LocationMap: React.FC = () => {
  return (
    <section id="location-map">
      <h2>Lokalizacja</h2>
      <div className="map-container">
        <iframe
          src="https://maps.google.com/maps?q=Tangesir%20Dates%20Products&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
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
