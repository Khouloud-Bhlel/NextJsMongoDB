// Importation des modules nécessaires
import styles from "../styles/Add.module.css"; // Le fichier CSS spécifique au composant
import React from 'react'; // Le module React pour la création de composants

// Définition du composant AddButton
const AddButton = ({ setClose }) => {
  // Rendu du composant AddButton
  return (
    <div onClick={() => setClose(false)} className={styles.mainAddButton}>
      Ajouter un nouveau pull
    </div>
  );
};

export default AddButton; // Exportation du composant AddButton
