// Importation des composants et des styles nécessaires
import Layout from "../components/Layout";
import "../styles/globals.css";
import store from "../redux/store";
import { Provider } from "react-redux";
import React from 'react';

function MyApp({ Component, pageProps }) {
  return (
    // Fournit le store Redux à l'application via le composant Provider
    <Provider store={store}>
      {/* Utilisation du composant Layout pour la structure de base de l'application */}
      <Layout>
        {/* Rendu du composant Component avec les props pageProps */}
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

// Exportation du composant MyApp en tant que composant par défaut
export default MyApp;
