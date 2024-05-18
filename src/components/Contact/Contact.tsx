import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, 'YOUR_USER_ID')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Wiadomość została wysłana!');
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      }, (error) => {
        console.log('FAILED...', error);
        alert('Wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie później.');
      });
  };

  return (
    <section id="contact" className="contact-section">
      <h2>Kontakt</h2>
      <div className="contact-details">
        <p>Adres: ul. Przykładowa 123, 00-001 Warszawa</p>
        <p>Telefon: +48 123 456 789</p>
        <p>Email: kontakt@example.com</p>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Imię:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />

        <label htmlFor="message">Wiadomość:</label>
        <textarea id="message" name="message" value={formData.message} onChange={handleChange} required></textarea>

        <button type="submit">Wyślij</button>
      </form>
    </section>
  );
};

export default Contact;
