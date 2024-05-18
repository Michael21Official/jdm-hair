import React, { useState } from 'react';
import Slider from 'react-slick';
import './Gallery.css';

const Gallery: React.FC = () => {
  const photos = [
    { url: 'image/image-hair/przedluzanie.jpg', description: 'Przedłużanie', details: 'Szczegóły dotyczące przedłużania włosów...' },
    { url: 'image/image-hair/strzyzenie.jpg', description: 'Strzyżenie', details: 'Szczegóły dotyczące strzyżenia włosów...' },
    // Dodaj więcej zdjęć i ich opisów
    { url: 'image/image-hair/przedluzanie.jpg', description: 'Przedłużanie', details: 'Szczegóły dotyczące przedłużania włosów...' },
    { url: 'image/image-hair/strzyzenie.jpg', description: 'Strzyżenie', details: 'Szczegóły dotyczące strzyżenia włosów...' },
    { url: 'image/image-hair/przedluzanie.jpg', description: 'Przedłużanie', details: 'Szczegóły dotyczące przedłużania włosów...' },
    { url: 'image/image-hair/strzyzenie.jpg', description: 'Strzyżenie', details: 'Szczegóły dotyczące strzyżenia włosów...' },
    { url: 'image/image-hair/przedluzanie.jpg', description: 'Przedłużanie', details: 'Szczegóły dotyczące przedłużania włosów...' },
    { url: 'image/image-hair/strzyzenie.jpg', description: 'Strzyżenie', details: 'Szczegóły dotyczące strzyżenia włosów...' },
  ];

  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

  const togglePhoto = (index: number) => {
    if (selectedPhoto === index) {
      setSelectedPhoto(null);
    } else {
      setSelectedPhoto(index);
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: Math.min(3, photos.length),
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <section id="gallery" className="gallery-section">
      <h2>Galeria</h2>
      <Slider {...settings}>
        {photos.map((photo, index) => (
          <div key={index} className="gallery-slide" onClick={() => togglePhoto(index)}>
            {selectedPhoto === index ? (
              <div className="photo-details">
                <h3>{photo.description}</h3>
                <p>{photo.details}</p>
              </div>
            ) : (
              <img src={photo.url} alt={`Gallery item ${index + 1}`} className="gallery-image" />
            )}
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Gallery;
