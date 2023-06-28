import express from "express";
import { getAllMarvelCharacters, getMarvelCharacterById } from "../controllers/MarvelCharacter.controllers.js";

const router = express.Router();

// Route pour récupérer tous les personnages Marvel
router.get("/characters", getAllMarvelCharacters);

// Route pour récupérer un personnage Marvel par son ID
router.get("/characters/:id", getMarvelCharacterById);

export default router;
