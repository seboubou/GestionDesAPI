import express from "express";
import {getAllDisneyCharacters,getDisneyCharacterById} from "../controllers/DisneyCharacter.controllers.js";

const router = express.Router();


router.get("/characters", getAllDisneyCharacters);

// Route pour récupérer un personnage Marvel par son ID
router.get("/characters/:id", getDisneyCharacterById);

export default router;