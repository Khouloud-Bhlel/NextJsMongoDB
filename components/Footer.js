
import styles from "../styles/Footer.module.css";
import React from 'react';
const Footer = () => {
  return (
    <div className={styles.container}>
      
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
          Le pull shopping en Tunisie est un vêtement polyvalent et élégant qui vous gardera au chaud pendant les mois d'hiver.
           Fabriqué à partir de matériaux de haute qualité, ce pull offre un confort exceptionnel et une durabilité longue durée.
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>TROUVEZ NOS RESTAURANTS</h1>
          <p className={styles.text}>
           sfax
            <br /> tunis, 2008
            <br /> (216) 94568260
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>HEURES D'OUVERTURE</h1>
          <p className={styles.text}>
          DU LUNDI AU VENDREDI
            <br /> 8:00 – 17:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
