import { createSlice } from "@reduxjs/toolkit";

// Création d'un slice nommé "cart" pour gérer l'état du panier
const cartSlice = createSlice({
  name: "cart", // Nom du slice
  initialState: {
    products: [], // Tableau des produits dans le panier
    quantity: 0, // Quantité totale des produits dans le panier
    total: 0, // Total du panier
  },
  reducers: {
    // Reducer pour ajouter un produit au panier
    addProduct: (state, action) => {
      state.products.push(action.payload); // Ajoute le produit à la liste des produits dans le panier
      state.quantity += 1; // Incrémente la quantité totale des produits dans le panier
      state.total += action.payload.price * action.payload.quantity; // Calcule le nouveau total du panier en fonction du prix et de la quantité du produit ajouté
    },
    // Reducer pour réinitialiser le panier
    reset: (state) => {
      state.products = []; // Réinitialise le tableau des produits dans le panier
      state.quantity = 0; // Réinitialise la quantité totale des produits dans le panier
      state.total = 0; // Réinitialise le total du panier
    },
  },
});

// Exportation des actions générées par le slice
export const { addProduct, reset } = cartSlice.actions;

// Exportation du reducer du slice
export default cartSlice.reducer;
