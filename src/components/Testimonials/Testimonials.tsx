import React from 'react';
import Slider from 'react-slick';
import './Testimonials.css';

const testimonials = [
  {
    name: 'Anna Kowalska',
    text: 'Świetna obsługa i wspaniałe rezultaty! Na pewno wrócę.',
    image: 'image/image-testimonials/jan.jpg',
  },
  {
    name: 'Jan Nowak',
    text: 'Profesjonalne podejście i miła atmosfera. Polecam każdemu!',
    image: 'image/image-testimonials/jan.jpg',
  },
  {
    name: 'Maria Wiśniewska',
    text: 'Jestem bardzo zadowolona z efektów strzyżenia i farbowania. Dziękuję!',
    image: 'image/image-testimonials/jan.jpg',
  },
  // Dodaj więcej opinii w razie potrzeby
];

const Testimonials: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <section id="testimonials" className="testimonials-section">
      <h2>Opinie</h2>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-slide">
            <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
            <p className="testimonial-text">{testimonial.text}</p>
            <p className="testimonial-name">- {testimonial.name}</p>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Testimonials;
