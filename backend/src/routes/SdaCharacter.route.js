import Express from "express";
import {
  getAllCharacters,
  getCharacterById,
  createCharacter,
  deleteCharacter,
  updateCharacterBy,
} from "../controllers/SdaCharacter.controllers.js";

const router = Express.Router();

// Route pour récupérer tous les personnages
router.get("/", getAllCharacters);

// Route pour récupérer un personnage par son ID
router.get("/personnages/:id", getCharacterById);

router.post("/", createCharacter);

router.delete("/personnages/:id", deleteCharacter);

router.put("/personnages/:id", updateCharacterBy);

export default router;
