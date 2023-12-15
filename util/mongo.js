import mongoose from 'mongoose';

const MONGO_URL = process.env.MONGO_URL;

// Vérification de l'existence de l'URL de connexion MongoDB
if (!MONGO_URL) {
  throw new Error('Please define the MONGO_URL environment variable inside .env.local');
}

let cached = global.mongoose;

// Vérification de l'existence de la connexion Mongoose mise en cache
if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

// Fonction pour se connecter à la base de données MongoDB
async function dbConnect() {
  // Retourner la connexion mise en cache si elle existe déjà
  if (cached.conn) {
    return cached.conn;
  }

  // Création d'une nouvelle connexion si aucune promesse de connexion en cours n'existe
  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    // Création d'une promesse de connexion Mongoose et mise en cache de la promesse
    cached.promise = mongoose.connect(MONGO_URL, opts).then((mongoose) => {
      return mongoose;
    });
  }

  // Attendre la résolution de la promesse de connexion et mettre en cache la connexion
  cached.conn = await cached.promise;
  return cached.conn;
}

export default dbConnect;
