import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

// Configuration du magasin (store) Redux
export default configureStore({
  reducer: {
    cart: cartReducer, // Utilisation du reducer du slice "cart" pour gérer l'état du panier
  },
});
