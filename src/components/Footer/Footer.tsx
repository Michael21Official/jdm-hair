import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h4>Godziny otwarcia</h4>
        <p>Poniedziałek - Piątek: 9:00 - 18:00</p>
        <p>Sobota: 10:00 - 14:00</p>
        <p>Niedziela: Zamknięte</p>
      </div>
      <nav className="footer-section">
        <h4>Nawigacja</h4>
        <ul>
          <li><a href="#terms">Regulamin</a></li>
          <li><a href="#privacy">Polityka prywatności</a></li>
        </ul>
      </nav>
      <div className="footer-section">
        <h4>Informacje o właścicielu</h4>
        <p>Jan Kowalski</p>
        <p>Telefon: +48 123 456 789</p>
        <p>Email: jan.kowalski@example.com</p>
      </div>
    </footer>
  );
};

export default Footer;
