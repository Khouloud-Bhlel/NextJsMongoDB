// Importation des modules nécessaires
import Image from "next/image"; // Importation du module Image de Next.js pour l'affichage des images optimisées
import styles from "../styles/PullCard.module.css"; // Le module CSS pour les styles spécifiques à ce composant
import Link from "next/link"; // Importation du module Link de Next.js pour la navigation entre les pages
import React from 'react'; // Importation de React

// Définition du composant PullCard
const PullCard = ({ pull }) => {
  // Rendu du composant PullCard
  return (
    <div className={styles.container}>
      {/* Utilisation du composant Link de Next.js pour créer un lien vers la page produit */}
      <Link href={`/product/${pull._id}`} passHref>
        {/* Utilisation du composant Image de Next.js pour afficher l'image du pull */}
        <Image src={pull.img} alt="" width="500" height="500" />
      </Link>
      <h1 className={styles.title}>{pull.title}</h1> {/* Affiche le titre du pull */}
      <span className={styles.price}>{pull.prices[0]} TND </span> {/* Affiche le prix du pull */}
      <p className={styles.desc}>{pull.desc}</p> {/* Affiche la description du pull */}
    </div>
  );
};

export default PullCard; // Exportation du composant PullCard
