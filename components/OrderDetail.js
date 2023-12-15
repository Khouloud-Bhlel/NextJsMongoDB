// Importation des modules nécessaires
import { useState } from "react"; // Importation du module useState de React
import styles from "../styles/OrderDetail.module.css"; // Le module CSS pour les styles spécifiques à ce composant
import React from 'react'; // Importation de React
import { useRouter } from "next/router"; // Importation du module useRouter de Next.js pour la gestion des routes

// Définition du composant OrderDetail
const OrderDetail = ({ total, createOrder }) => {
  // Initialisation des états customer, address avec le hook useState
  const [customer, setCustomer] = useState(""); // État pour stocker le prénom/nom de famille du client
  const [address, setAddress] = useState(""); // État pour stocker l'adresse du client
  const router = useRouter(); // Utilisation du hook useRouter pour accéder à l'objet router

  // Fonction handleClick pour gérer le clic sur le bouton de commande
  const handleClick = () => {
    // Appel de la fonction createOrder avec les données du formulaire et méthode de paiement
    createOrder({ customer, address, total, method: 0 });
    router.push("/"); // Redirige vers la page d'accueil
  };

  // Rendu du composant OrderDetail
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Vous paierez 8 dt après la livraison.</h1>
        <div className={styles.item}>
          <label className={styles.label}>Prénom / nom de famille</label>
          <input
            placeholder="Ton nom"
            type="text"
            className={styles.input}
            onChange={(e) => setCustomer(e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Numéro de téléphone</label>
          <input
            type="text"
            placeholder="Ton telephone"
            className={styles.input}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Adresse</label>
          <textarea
            rows={5}
            placeholder="Ton adresse"
            type="text"
            className={styles.textarea}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <button className={styles.button} onClick={handleClick}>
          Commande
        </button>
      </div>
    </div>
  );
};

export default OrderDetail; // Exportation du composant OrderDetail
