// Importation des modules nécessaires
import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css"; // Importation du fichier CSS de Bootstrap

// Définition du composant EditProduct
const EditProduct = ({ product }) => {
  // Initialisation des états avec le hook useState
  const [title, setTitle] = useState(product.title);
  const [price, setPrice] = useState(product.prices[0]);
  const [error, setError] = useState(null);

  // Fonction pour gérer la mise à jour du produit
  const handleUpdate = async () => {
    try {
      const res = await axios.put(
        `http://localhost:3000/api/products/${product._id}`,
        {
          title: title,
          prices: [price],
        }
      );
      console.log(res.data);
      window.location.reload();
    } catch (err) {
      setError("Une erreur s'est produite lors de la mise à jour du produit.");
      console.log(err);
    }
  };

  // Rendu du composant EditProduct
  return (
    <>
      <td>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="form-control" // Ajout de la classe "form-control" de Bootstrap
        />
      </td>
      <td>
        <input
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="form-control" // Ajout de la classe "form-control" de Bootstrap
        />
      </td>
      <td>
        {error && <div className="error">{error}</div>}
        <button onClick={handleUpdate} className="btn btn-primary"> {/* Ajout des classes "btn" et "btn-primary" de Bootstrap */}
          Sauvegarder
        </button>
      </td>
    </>
  );
};

export default EditProduct;
