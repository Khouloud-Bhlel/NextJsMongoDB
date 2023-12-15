import styles from "../styles/PullList.module.css";
import PullCard from "./PullCard";
import React from 'react';
const PullList = ({ pullList }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>LE MEILLEUR PULL AU MONDE</h1>
      <p className={styles.desc}>
      Un bon pull peut être fait de matériaux de haute qualité, tels que de la laine douce et durable, du cachemire ou de l'alpaga,
      qui offrent chaleur et confort tout en étant respirants et légers.
       Il peut également présenter un design classique et polyvalent qui peut être facilement habillé ou décontracté, comme un col ras du cou, un col en V ou un style en tricot torsadé.
      </p>
      <div className={styles.wrapper}>
        {pullList.map((pull) => (
          <PullCard key={pull._id} pull={pull} />
        ))}
      </div>
    </div>
  );
};

export default PullList;
