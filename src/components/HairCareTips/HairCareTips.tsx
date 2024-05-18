import React from 'react';
import './HairCareTips.css';

const HairCareTips: React.FC = () => {
  return (
    <section id="hair-care-tips" className="hair-care-tips-section">
      <h2>Porady dotyczące pielęgnacji włosów</h2>
      <div className="tips-list">
        <div className="tip">
          <h3>1. Regularne mycie</h3>
          <p>Myj włosy regularnie, aby utrzymać je czyste i zdrowe. Używaj szamponu odpowiedniego do rodzaju swoich włosów.</p>
        </div>
        <div className="tip">
          <h3>2. Ochrona przed ciepłem</h3>
          <p>Unikaj nadmiernego używania suszarek, prostownic i lokówek. Zawsze używaj produktu chroniącego włosy przed wysoką temperaturą.</p>
        </div>
        <div className="tip">
          <h3>3. Nawilżanie</h3>
          <p>Używaj odżywek i masek nawilżających, aby utrzymać odpowiedni poziom wilgoci we włosach.</p>
        </div>
        <div className="tip">
          <h3>4. Dieta i suplementy</h3>
          <p>Zdrowa dieta bogata w witaminy i minerały ma ogromny wpływ na kondycję włosów. Rozważ suplementację, jeśli Twoja dieta jest uboga w składniki odżywcze.</p>
        </div>
      </div>
    </section>
  );
};

export default HairCareTips;
