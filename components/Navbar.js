import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import { useSelector } from "react-redux";
import Link from "next/link";
import React from 'react';
const Navbar = ({ onContactClick }) => {
  const quantity = useSelector((state) => state.cart.quantity);
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div><Image src="/img/img1.png" width="1000%" height="1000%"  onClick={onContactClick}/></div>
       

        <div className={styles.texts}>
        <div className={styles.text}>PrimePicks!</div>
          <div className={styles.text}>+12694568260</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <Link href="/" passHref>
            <li className={styles.listItem}>Accueil</li>
          </Link>
          <Link href="/blog">
          <li className={styles.listItem}>Blog </li>
          </Link>
        </ul>
      </div>
      <Link href="/cart" passHref>
        <div className={styles.item}>
          <div className={styles.cart}>
            <Image src="/img/cart.png" alt="" width="80px" height="80px" />
            <div className={styles.counter}>{quantity}</div>
          </div>
        </div>
      </Link>
      
    </div>
  );
};

export default Navbar;

        
          