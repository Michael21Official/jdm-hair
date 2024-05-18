import React from 'react';
import './Services.css';

const Services: React.FC = () => {
  return (
    <section id="services" className="services-section">
      <h2>Usługi</h2>
      <div className="services-container">
        <div className="services-list">
          <ul>
            <li>Strzyżenie</li>
            <li>Koloryzacja</li>
            <li>Pielęgnacja</li>
            <li>Stylizacja</li>
            <li>Przedłużanie włosów</li>
            <li>Farbowanie ombre</li>
            <li>Balayage</li>
            <li>Prostowanie keratynowe</li>
            <li>Regeneracja włosów</li>
            <li>Strzyżenie męskie</li>
            <li>Strzyżenie dziecięce</li>
            <li>Upięcia okolicznościowe</li>
            <li>Fryzury ślubne</li>
          </ul>
        </div>
        <div className="services-video">
          <iframe
            src="https://www.youtube.com/embed/tgbNymZ7vqY"
            width="100%"
            height="auto"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="Usługi wideo"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Services;
