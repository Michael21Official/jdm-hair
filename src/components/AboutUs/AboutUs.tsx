// AboutUs.tsx
import React from 'react';
import Card from '../helper/Card'; // Importujemy komponent Card
import './AboutUs.css';

const AboutUs: React.FC = () => {
  return (
    <section className="about-us" id='about'>
      <h2>O nas</h2>
      <div className='opis'>
        <p>1. Uczciwość i partnerskie relacje z Klientami</p>
        <p>2. Zrozumienie wobec problemu utraty włosów wynikające z osobistych doświadczeń</p>
        <p>3. Profesjonalne doradztwo pozwalające dobrać rozwiązanie do indywidualnych potrzeb Klienta</p>
        <p>4. Najwyższa jakość oferowanych produktów i usług</p>
        <p>5. Siedziba zapewniająca intymność i poczucie bezpieczeństwa</p>
        <p>6. Konkurencyjne ceny i rabaty</p>
      </div>
      <div className="services">
        <Card
          image='image/image-hair/strzyzenie.jpg' // Ścieżka do obrazu dla strzyżenia
          header="Strzyżenie"
          description="Nasi doświadczeni styliści zadbają o to, abyś zawsze wyglądał/a modnie i świeżo."
        />
        <Card
          image='image/image-hair/farbowanie.jpg' // Ścieżka do obrazu dla farbowania
          header="Farbowanie"
          description="Oferujemy szeroki zakres usług związanych z farbowaniem włosów, aby dopasować się do Twoich indywidualnych potrzeb i upodobań."
        />
        <Card
          image='image/image-hair/przedluzanie.jpg' // Ścieżka do obrazu dla przedłużania
          header="Przedłużanie"
          description="Nasze specjalistyczne techniki przedłużania włosów pozwolą Ci uzyskać wymarzoną długość i objętość."
        />
      </div>
    </section>
  );
};

export default AboutUs;
