// Importation des modules nécessaires
import styles from "../styles/Featured.module.css"; // Le module CSS pour les styles spécifiques à ce composant
import Image from "next/image"; // Le module Image de Next.js pour afficher des images optimisées
import { useState } from "react"; // Le module useState pour gérer les états

// Définition du composant Featured
const Featured = () => {
  // Initialisation de l'état index avec le hook useState
  const [index, setIndex] = useState(0); // État pour gérer l'index de l'image affichée

  // Tableau d'images
  const images = [
    "/img/img2.png",
    "/img/img3.png",
    "/img/img4.png",
  ];

  // Fonction pour gérer le déplacement des images avec les flèches gauche et droite
  const handleArrow = (direction) => {
    if (direction === "l") {
      // Si la direction est "l" (gauche), décrémente l'index sauf si l'index est déjà 0, auquel cas revient à la dernière image
      setIndex(index !== 0 ? index - 1 : 2);
    }
    if (direction === "r") {
      // Si la direction est "r" (droite), incrémente l'index sauf si l'index est déjà à la dernière image, auquel cas revient à la première image
      setIndex(index !== 2 ? index + 1 : 0);
    }
  };

  // Rendu du composant Featured
  return (
    <div className={styles.container}>
      {/* Flèche gauche */}
      <div
        className={styles.arrowContainer}
        style={{ left: 0 }}
        onClick={() => handleArrow("l")}
      >
        <Image src="/img/arrowl.png" alt="" layout="fill" objectFit="contain" />
      </div>
      {/* Wrapper pour les images */}
      <div
        className={styles.wrapper}
        style={{ transform: `translateX(${-100 * index}vw)` }}
      >
        {/* Boucle sur le tableau d'images pour afficher chaque image */}
        {images.map((img, i) => (
          <div className={styles.imgContainer} key={i}>
            <Image src={img} alt="" layout="fill" objectFit="contain" />
          </div>
        ))}
      </div>
      {/* Flèche droite */}
      <div
        className={styles.arrowContainer}
        style={{ right: 0 }}
        onClick={() => handleArrow("r")}
      >
        <Image src="/img/arrowr.png" layout="fill" alt="" objectFit="contain" />
      </div>
    </div>
  );
};

export default Featured; // Exportation du composant Featured
