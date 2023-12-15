// Importation des modules nécessaires
import { useState } from "react"; // Le module useState de React pour gérer les états
import styles from "../styles/Add.module.css"; // Le fichier CSS spécifique au composant
import axios from "axios"; // Le module axios pour effectuer des requêtes HTTP

// Définition du composant Add
const Add = ({ setClose }) => {
  // Initialisation des états avec le hook useState
  const [file, setFile] = useState(null); // État pour stocker le fichier de l'image
  const [title, setTitle] = useState(""); // État pour stocker le titre du produit
  const [desc, setDesc] = useState(""); // État pour stocker la description du produit
  const [price, setPrice] = useState(""); // État pour stocker le prix du produit

  // Fonction pour gérer la création du produit
  const handleCreate = async () => {
    // Création d'un objet FormData pour stocker les données à envoyer
    const data = new FormData();
    data.append("file", file); // Ajout du fichier à FormData
    data.append("upload_preset", "uploads"); // Ajout d'un paramètre supplémentaire

    try {
      // Envoi de la requête POST pour télécharger l'image vers Cloudinary
      const uploadRes = await axios.post(
        "https://api.cloudinary.com/v1_1/drupaoden/image/upload",
        data
      );

      // Extraction de l'URL de l'image téléchargée depuis la réponse
      const { url } = uploadRes.data;

      // Création d'un nouvel objet représentant le nouveau produit
      const newProduct = {
        title,
        desc,
        prices: [price],
        img: url,
      };

      // Envoi de la requête POST vers l'API locale pour créer le produit
      await axios.post("http://localhost:3000/api/products", newProduct);

      // Actualisation de la page
      window.location.reload();

      // Mise à jour de la valeur setClose
      setClose(true);
    } catch (err) {
      console.log(err); // Affichage des erreurs éventuelles dans la console
    }
  };

  // Rendu du composant Add
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <span onClick={() => setClose(true)} className={styles.close}>
          X
        </span>
        <h1>Ajouter un nouveau pull</h1>
        <div className={styles.item}>
          <label className={styles.label}>Choisissez une image</label>
          <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Titre</label>
          <input
            className={styles.input}
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Desc</label>
          <textarea
            rows={4}
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Prix</label>
          <input
            className={styles.input}
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <button className={styles.addButton} onClick={handleCreate}>
          Créer
        </button>
      </div>
    </div>
  );
};

export default Add; // Exportation du composant Add

