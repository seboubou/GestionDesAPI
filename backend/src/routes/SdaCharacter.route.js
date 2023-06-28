import Express from "express";
import { getAllCharacters, getCharacterById } from "../controllers/SdaCharacter.controllers.js";

const router = Express.Router();

// Route pour récupérer tous les personnages
router.get("/", getAllCharacters);

// Route pour récupérer un personnage par son ID
router.get("/personnages/:id", getCharacterById);

export default router;
