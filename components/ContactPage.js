// Importation des modules nécessaires
import React, { useState } from 'react'; // Le module React pour la création de composants, ainsi que le module useState pour gérer les états
import Navbar from './Navbar'; // Importation du composant Navbar
import styles from "../styles/ContactPage.module.css"; // Le fichier CSS spécifique au composant ContactPage

// Définition du composant ContactPage
const ContactPage = () => {
  // Initialisation de l'état avec le hook useState
  const [showContact, setShowContact] = useState(true); // État pour contrôler l'affichage des informations de contact

  // Rendu du composant ContactPage
  return (
    <div className={styles.container}>
      {showContact && (
        <div>
          <div className={`${styles.mt3}`}>
            <h2>Informations de contact</h2>
            <p className={styles.mb2}>+(126) 94568260</p>
            <p className={styles.mb4}>khouloudbenhelal24@gmail.com</p>
            <button className={`${styles.btnPrimary}`} onClick={() => setShowContact(false)}>
              Fermer
            </button>
          </div>
        </div>
      )}
      <Navbar />
    </div>
  );
};

export default ContactPage; // Exportation du composant ContactPage
