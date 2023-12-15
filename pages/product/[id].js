import styles from "../../styles/Product.module.css";
import Image from "next/image";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/cartSlice";



import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

const Product = ({ pull }) => {
  const [price] = useState(pull.prices[0]);
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(addProduct({ ...pull, price, quantity }));
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image src={pull.img} objectFit="contain" layout="fill" alt="" />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{pull.title}</h1>
        <span className={styles.price}>{price} TND</span>
        <p className={styles.desc}>{pull.desc}</p>
        <div className={styles.add}>
          <input
            onChange={(e) => setQuantity(e.target.value)}
            type="number"
            defaultValue={1}
            className={styles.quantity}
          />
          <button className={styles.button} onClick={handleClick}>
          Ajouter au panier
          </button>
        </div><br></br>
        <Button  href="/" variant="secondary">
        Retour à la page d'accueil
              </Button>
        </div>
        <div> 
        
       
      </div>
    </div>
  );
};

export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(`http://localhost:3000/api/products/${params.id}`);
  return {
    props: {
      pull: res.data,
    },
  };
};

export default Product;
