import axios from "axios";
import Head from "next/head";

import { useState } from "react";
import Add from "../components/Add";
import PullList from "../components/PullList";
import styles from "../styles/Home.module.css";

export default function Home({ pullList}) {
  const [close, setClose] = useState(true);
  return (
    <div className={styles.container}>
      <Head>
        <title> Pull en Tunisie</title>
        <meta name="description" content="Best pizza shop in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <PullList pullList={pullList} />
      {!close && <Add setClose={setClose} />}
    </div>
  );
}

export const getServerSideProps = async () => {
  const res = await axios.get("http://localhost:3000/api/products");
  return {
    props: {
      pullList: res.data,
    },
  };
};
