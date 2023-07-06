import {
  findAll,
  findById,
  insertCharacter,
  deleteCharacterById,
  updateCharacterById,
} from "../../models/SdaCharacter.model.js";

// Importation de la dépendance pour la connexion à la base de données depuis le fichier "datasource.js"

// Fonction pour récupérer tous les personnages
const getAllCharacters = (req, res) => {
  // Exécution d'une requête SQL pour sélectionner tous les enregistrements de la table "SEIGNEUR_DES_ANNEAUX_CHARACTER"

  findAll()
    .then(([result]) => {
      if (result.length) {
        return res.status(200).send(result);
      } else {
        return res.status(404).json({ error: "No characters found" });
      }
      // Si la requête s'est exécutée avec succès, renvoyer les résultats au format JSON avec le code d'état HTTP 200 (OK)
    })
    .catch((err) => {
      // En cas d'erreur, afficher un message d'erreur dans la console
      console.error("An error occurred while retrieving data", err);
    });
};

// Fonction pour récupérer un personnage par son ID
const getCharacterById = (req, res) => {
  // Récupération de l'ID du personnage à partir des paramètres de la requête
  const id = req.params.id;

  // Exécution d'une requête SQL paramétrée pour sélectionner le personnage avec l'ID spécifié

  findById(id)
    .then(([result]) => {
      if (result.length) {
        // Si un personnage correspondant à l'ID est trouvé, le renvoyer avec le code d'état HTTP 200 (OK)
        return res.status(200).send(result);
      } else {
        // Si aucun personnage correspondant à l'ID n'est trouvé, renvoyer un message d'erreur avec le code d'état HTTP 404 (Non trouvé)
        return res.status(404).json({
          error: `The character with the id ${req.params.id} doesn't exist`,
        });
      }
    })
    .catch((err) => {
      // En cas d'erreur, afficher un message d'erreur dans la console
      console.error("An error occurred while retrieving data", err);
    });
};

const createCharacter = (req, res) => {
  const { name, image, race } = req.body;

  insertCharacter(name, race, image)
    .then(([result]) => {
      if (result.affectedRows) {
        return res
          .status(201)
          .send(
            `THe character with the id ${name} has been created successfully`
          );
      }
      return res
        .status(404)
        .send("An error occurred while creating this character");
    })
    .catch((err) => {
      console.error("Internal server Error", err.message);
    });
};

const deleteCharacter = (req, res) => {
  const id = req.params.id;

  // Exécutez une requête SQL pour supprimer le personnage avec l'ID spécifié
  deleteCharacterById(id)
    .then(([result]) => {
      if (result.affectedRows) {
        // Si le personnage est supprimé avec succès, renvoyez une réponse avec le code d'état HTTP 200 (OK)
        return res
          .status(200)
          .send(`Le personnage avec l'ID ${id} a été supprimé avec succès`);
      } else {
        // Si aucun personnage correspondant à l'ID n'est trouvé, renvoyez un message d'erreur avec le code d'état HTTP 404 (Non trouvé)
        return res
          .status(404)
          .json({ error: `Le personnage avec l'ID ${id} n'existe pas` });
      }
    })
    .catch((err) => {
      // En cas d'erreur, affichez un message d'erreur dans la console
      console.error(
        "Une erreur s'est produite lors de la suppression du personnage",
        err
      );
      return res.status(500).json({
        error: "Une erreur s'est produite lors de la suppression du personnage",
      });
    });
};

// Fonction pour mettre à jour un personnage par son ID
const updateCharacterBy = async (req, res) => {
  const id = req.params.id;
  const updatedData = req.body;

  try {
    const result = await updateCharacterById(
      id,
      updatedData.name,
      updatedData.race,
      updatedData.image
    );
    return res.status(200).send(result);
  } catch (error) {
    console.error(
      "Une erreur s'est produite lors de la mise à jour du personnage",
      error
    );
    return res.status(500).json({
      error: "Une erreur s'est produite lors de la mise à jour du personnage",
    });
  }
};

// Exportation des fonctions pour les rendre accessibles depuis d'autres modules
export {
  getAllCharacters,
  getCharacterById,
  createCharacter,
  deleteCharacter,
  updateCharacterBy,
};
