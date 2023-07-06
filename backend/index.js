// Importation des modules nécessaires
import express from "express";
import sdaCharacterRoutes from "./src/routes/SdaCharacter.route.js";
import marvelCharacterRoutes from "./src/routes/MarvelCharacter.route.js";
// import disneyCharacterRoutes from "./src/routes/DisneyCharacter.route.js";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

// Création d'une instance de l'application express
const app = express();

// Définition du numéro de port
const port = process.env.BACKEND_PORT;

// Configuration des options CORS
const corsOptions = {
  origin: process.env.FRONTEND_URL, // Définit l'URL autorisée à accéder à l'API (pour les requêtes CORS)
  optionSuccessStatus: 200, // Définit le code de succès à renvoyer pour les requêtes CORS pré-vérification
};

// Middleware pour la gestion du format JSON
app.use(express.json());

// Middleware pour la gestion des requêtes CORS
app.use(cors(corsOptions));

// Middleware pour la gestion des routes
// app.use(router);

// Middleware pour la gestion des routes pour les personnages du Seigneur des Anneaux
app.use("/api/sda", sdaCharacterRoutes);

// Middleware pour la gestion des routes pour les personnages Marvel
app.use("/api/marvel", marvelCharacterRoutes);

// app.use("/api/disney", disneyCharacterRoutes);

// Lancement de l'application en écoutant le port spécifié
app.listen(port, () => {
  console.log(`Server is actually running on port ${port}`);
});

