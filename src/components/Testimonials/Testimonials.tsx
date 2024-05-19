import React from 'react';
import './Testimonials.css';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="testimonials-section">
      <h2>Opinie</h2>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSdCQdOEdA3E5z4Gf5CJyjWxlmn2sEHH7znQ8K_6A9Aq9PfGEQ/viewform?embedded=true"
        width="100%"
        height="600"
        frameBorder="0"
        marginHeight={0}
        marginWidth={0}
        title="Opinie"
      >
        Ładuję…
      </iframe>
    </section>
  );
};

export default Testimonials;
