// Importation des modules nécessaires
import axios from "axios"; // Module axios pour effectuer des requêtes HTTP
import Image from "next/image"; // Module Image de Next.js pour l'affichage des images optimisées
import { useState } from "react"; // Module useState de React pour gérer les états
import styles from "../../styles/Admin.module.css"; // Le module CSS pour les styles spécifiques à ce composant
import React from 'react'; // Importation de React
import AddButton from "../../components/AddButton"; // Composant AddButton
import Add from "../../components/Add"; // Composant Add
import EditProduct from "../../components/EditProduct"; // Composant EditProduct
import 'bootstrap/dist/css/bootstrap.min.css'; // Importation du style CSS de Bootstrap
import { Button } from 'react-bootstrap'; // Composant Button de Bootstrap

// Définition du composant Index
const Index = ({ orders, products }) => {
  // Gestion des états
  const [pullList, setPullList] = useState(products); // Liste des produits
  const [orderList, setOrderList] = useState(orders); // Liste des commandes
  const status = ["en train de préparer", "en chemin", "livré"]; // Liste des statuts des commandes
  const [close, setClose] = useState(true); // État pour contrôler l'affichage du formulaire d'ajout
  const [selectedProduct, setSelectedProduct] = useState(null); // Produit sélectionné pour l'édition
  const [deletedOrders, setDeletedOrders] = useState([]); // Liste des commandes supprimées

  // Fonction pour supprimer une commande
  const handleDeleteOrder = async (id) => {
    try {
      await axios.delete("http://localhost:3000/api/orders/" + id);
      setDeletedOrders([...deletedOrders, id]);
      window.location.reload(); // Recharge la page
    } catch (err) {
      console.log(err);
    }
  };

  // Fonction pour supprimer un produit
  const handleDeleteProduct = async (id) => {
    try {
      await axios.delete("http://localhost:3000/api/products/" + id);
      setPullList(pullList.filter((product) => product._id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  // Fonction pour changer le statut d'une commande
  const handleStatus = async (id) => {
    const item = orderList.filter((order) => order._id === id)[0];
    const currentStatus = item.status;

    try {
      const res = await axios.put("http://localhost:3000/api/orders/" + id, {
        status: currentStatus + 1,
      });
      setOrderList([
        res.data,
        ...orderList.filter((order) => order._id !== id),
      ]);
    } catch (err) {
      console.log(err);
    }
  };

  // Fonction pour éditer un produit
  const handleEdit = (product) => {
    setSelectedProduct(product);
  };

  // Rendu du composant Index
  return (
    <div className={styles.container}>
      <AddButton setClose={setClose} className={styles.mainAddButton} />
      <div className={styles.item}>
        <h1 className={styles.title}>Products</h1>
        {close ? null : <Add setClose={setClose} />}
        <table className={styles.table}>
          <tbody>
            <tr className={styles.trTitle}>
              <th>Image</th>
              <th>Title</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </tbody>
          {/* Affichage de la liste des produits */}
          {pullList.map((product) => (
            <tbody key={product._id}>
              {/* Vérification si le produit est en cours d'édition */}
              {selectedProduct === product ? (
                <tr className={styles.trTitle}>
                  <td>
                    <EditProduct product={product} />
                  </td>
                </tr>
              ) : (
                <tr className={styles.trTitle}>
                  <td>
                    <Image
                      src={product.img}
                      width={50}
                      height={50}
                      objectFit="cover"
                      alt=""
                    />
                  </td>
                  <td>{product.title}</td>
                  <td> {product.prices[0]} TND</td>
                  <td>
                    <button
                      className={styles.button}
                      onClick={() => handleEdit(product)}
                    >
                      Edit
                    </button>
                    <button
                      className={styles.button}
                      onClick={() => handleDeleteProduct(product._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              )}
            </tbody>
          ))}
        </table>
      </div>
      
      <div className={styles.item}>
      <h1 className={styles.title}>Orders</h1>
      <table className={styles.table}>
        <tbody>
          <tr className={styles.trTitle}>
            <th>Customer</th>
            <th>Total</th>
            <th>Payment</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </tbody>
        {/* Affichage de la liste des commandes */}
        {orderList.map((order) => (
          <tbody key={order._id}>
            <tr className={styles.trTitle}>
              <td>{order.customer}</td>
              <td> {order.total} TND</td>
              <td>
                {order.method === 0 ? <span>cash</span> : <span>paid</span>}
              </td>
              <td>{status[order.status]}</td>
              <td>
                <Button variant="secondary" onClick={() => handleStatus(order._id)}>
                  Next Stage
                </Button>
                <Button variant="warning" onClick={() => handleDeleteOrder(order._id)}>
                  Delete
                </Button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  </div>
);
};

export const getServerSideProps = async (ctx) => {
  // Récupération des données des produits et des commandes via des requêtes HTTP
  const productRes = await axios.get("http://localhost:3000/api/products");
  const orderRes = await axios.get("http://localhost:3000/api/orders");

  return {
    props: {
      orders: orderRes.data,
      products: productRes.data,
    },
  };
};

export default Index; // Exportation du composant Index
