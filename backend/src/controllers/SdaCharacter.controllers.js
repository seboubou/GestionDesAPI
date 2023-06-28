

// Importation de la dépendance pour la connexion à la base de données depuis le fichier "datasource.js"
import { database1 } from "../datasource.js";

// Fonction pour récupérer tous les personnages
const getAllCharacters = (req, res) => {
  // Exécution d'une requête SQL pour sélectionner tous les enregistrements de la table "SEIGNEUR_DES_ANNEAUX_CHARACTER"
  database1
    .query("SELECT * FROM SEIGNEUR_DES_ANNEAUX_CHARACTER")
    .then(([result]) => {
      // Si la requête s'est exécutée avec succès, renvoyer les résultats au format JSON avec le code d'état HTTP 200 (OK)
      res.status(200).send(result);
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
  database1
    .query("SELECT * FROM SEIGNEUR_DES_ANNEAUX_CHARACTER WHERE id = ?", [id])
    .then(([result]) => {
      if (result.length) {
        // Si un personnage correspondant à l'ID est trouvé, le renvoyer avec le code d'état HTTP 200 (OK)
        res.status(200).send(result);
      } else {
        // Si aucun personnage correspondant à l'ID n'est trouvé, renvoyer un message d'erreur avec le code d'état HTTP 404 (Non trouvé)
        res.status(404).send(`The character with id ${id} probably doesn't exist`);
      }
    })
    .catch((err) => {
      // En cas d'erreur, afficher un message d'erreur dans la console
      console.error("An error occurred while retrieving data", err);
    });
};

// Exportation des fonctions pour les rendre accessibles depuis d'autres modules
export { getAllCharacters, getCharacterById };
