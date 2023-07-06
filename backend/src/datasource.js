import mysql from "mysql2/promise";
import dotenv from "dotenv";

// Chargement des variables d'environnement depuis le fichier .env
dotenv.config();

// Création d'un pool de connexions à la base de données
const database1 = mysql.createPool({
  host: process.env.DB1_HOST, // Adresse du serveur de la base de données
  port: process.env.DB1_PORT, // Port utilisé pour la connexion à la base de données
  user: process.env.DB1_USER, // Nom d'utilisateur pour la connexion à la base de données
  password: process.env.DB1_PASSWORD, // Mot de passe pour la connexion à la base de données
  database: process.env.DB1_NAME, // Nom de la base de données à laquelle se connecter
  multipleStatements: true, // Autorise l'exécution de plusieurs instructions SQL dans une seule requête
});

// Création d'un pool de connexions à la deuxième base de données
const database2 = mysql.createPool({
  host: process.env.DB2_HOST, // Adresse du serveur de la deuxième base de données
  port: process.env.DB2_PORT, // Port utilisé pour la connexion à la deuxième base de données
  user: process.env.DB2_USER, // Nom d'utilisateur pour la connexion à la deuxième base de données
  password: process.env.DB2_PASSWORD, // Mot de passe pour la connexion à la deuxième base de données
  database: process.env.DB2_NAME, // Nom de la deuxième base de données à laquelle se connecter
  multipleStatements: true, // Autorise l'exécution de plusieurs instructions SQL dans une seule requête
});

const database3 = mysql.createPool({
  host: process.env.DB3_HOST, // Adresse du serveur de la deuxième base de données
  port: process.env.DB3_PORT, // Port utilisé pour la connexion à la deuxième base de données
  user: process.env.DB3_USER, // Nom d'utilisateur pour la connexion à la deuxième base de données
  password: process.env.DB3_PASSWORD, // Mot de passe pour la connexion à la deuxième base de données
  database: process.env.DB3_NAME, // Nom de la deuxième base de données à laquelle se connecter
  multipleStatements: true, // Autorise l'exécution de plusieurs instructions SQL dans une seule requête
});

// Établissement d'une connexion à la base de données pour vérifier si la connexion est réussie
database1.getConnection((error, connection) => {
  if (error) {
    // En cas d'erreur lors de la connexion à la base de données
    console.error("Impossible to reach the database", error);
    return;
  }
  console.log("Success, the database has been reached!");
});


// Établissement d'une connexion à la deuxième base de données pour vérifier si la connexion est réussie
database2.getConnection((error, connection) => {
  if (error) {
    // En cas d'erreur lors de la connexion à la deuxième base de données
    console.error("Impossible to reach the second database", error);
    return;
  }
  console.log("Success, the second database has been reached!");
});


database3.getConnection((error, connection) => {
  if (error) {
    // En cas d'erreur lors de la connexion à la base de données
    console.error("Impossible to reach the database", error);
    return;
  }
  console.log("Success, the database has been reached!");
});
// Exportation de l'objet de connexion à la base de données pour le rendre accessible depuis d'autres modules
export { database1, database2, database3 };
