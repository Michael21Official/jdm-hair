import React from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact-section">
      <h2>Kontakt</h2>
      <div className="contact-details">
        <p>Adres: ul. Przykładowa 123, 00-001 Warszawa</p>
        <p>Telefon: +48 123 456 789</p>
        <p>Email: kontakt@example.com</p>
      </div>
      <form className="contact-form">
        <label htmlFor="name">Imię:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Wiadomość:</label>
        <textarea id="message" name="message" required></textarea>

        <button type="submit">Wyślij</button>
      </form>
    </section>
  );
};

export default Contact;
