// Importation des modules nécessaires
import React, { useState } from 'react'; // Importation de React et du module useState
import Navbar from "./Navbar"; // Importation du composant Navbar
import ContactPage from './ContactPage'; // Importation du composant ContactPage

// Définition du composant Layout
const Layout = ({ children }) => {
  // Initialisation de l'état showContactPage avec le hook useState
  const [showContactPage, setShowContactPage] = useState(false); // État pour gérer l'affichage de la page de contact

  // Fonction pour gérer le clic sur le bouton de contact
  const handleContactClick = () => {
    setShowContactPage(true); // Définit l'état showContactPage à true
  };

  // Rendu du composant Layout
  return (
    <>
      {/* Condition de rendu : affiche la page de contact si showContactPage est true, sinon affiche la barre de navigation */}
      {showContactPage ? (
        <ContactPage />
      ) : (
        <Navbar onContactClick={handleContactClick} />
      )}
      {children} {/* Affiche le contenu enfant du composant Layout */}
    
    </>
  );
};

export default Layout; // Exportation du composant Layout
