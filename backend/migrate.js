import dotenv from "dotenv";
import mysql from "mysql2";
import fs from "fs";

// Chargement des variables d'environnement depuis le fichier .env
dotenv.config();

// Création d'une connexion à la base de données en utilisant les informations d'environnement
const database1 = mysql.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    multipleStatements: true,
});

const database2 = mysql.createPool({
    host: process.env.DB2_HOST,
    port: process.env.DB2_PORT,
    user: process.env.DB2_USER,
    password: process.env.DB2_PASSWORD,
    database: process.env.DB2_NAME,
    multipleStatements: true,
});

// const database3 = mysql.createPool({
//     host: process.env.DB2_HOST,
//     port: process.env.DB2_PORT,
//     user: process.env.DB2_USER,
//     password: process.env.DB2_PASSWORD,
//     database: process.env.DB2_NAME,
//     multipleStatements: true,
// });

// Établissement de la connexion à la base de données
database1.getConnection((error, connection) => {
    if (error) {
        // En cas d'erreur lors de la connexion à la base de données
        console.error("Impossible to reach the database", error);
        return;
    }
    console.log("Success, the database has been reached!");

    // Lecture du fichier SQL contenant les instructions à exécuter
    const sqlFile = fs.readFileSync("./script.sql", "utf8");

    // Exécution des instructions SQL pour ajouter des données à la base de données
    connection.query(sqlFile, (error) => {
        if (error) {
            // En cas d'erreur lors de l'exécution des instructions SQL
            console.error("Impossible to add data to the database", error);
            return;
        }
        console.log("Success, the data has been added to the database!");

        // Libération de la connexion à la base de données
        connection.release();
    });
});

// Établissement de la connexion à la deuxième base de données
database2.getConnection((error, connection) => {
    if (error) {
        // En cas d'erreur lors de la connexion à la deuxième base de données
        console.error("Impossible to reach the second database", error);
        return;
    }
    console.log("Success, the second database has been reached!");

    // Lecture du fichier SQL contenant les instructions à exécuter
    const sqlFile = fs.readFileSync("./script.sql", "utf8");

    // Exécution des instructions SQL pour ajouter des données à la deuxième base de données
    connection.query(sqlFile, (error) => {
        if (error) {
            // En cas d'erreur lors de l'exécution des instructions SQL
            console.error("Impossible to add data to the second database", error);
            return;
        }
        console.log("Success, the data has been added to the second database!");

        // Libération de la connexion à la deuxième base de données
        connection.release();
    });
});


// database3.getConnection((error, connection) => {
//     if (error) {
//         // En cas d'erreur lors de la connexion à la deuxième base de données
//         console.error("Impossible to reach the second database", error);
//         return;
//     }
//     console.log("Success, the second database has been reached!");

//     // Lecture du fichier SQL contenant les instructions à exécuter
//     const sqlFile = fs.readFileSync("./script.sql", "utf8");

//     // Exécution des instructions SQL pour ajouter des données à la deuxième base de données
//     connection.query(sqlFile, (error) => {
//         if (error) {
//             // En cas d'erreur lors de l'exécution des instructions SQL
//             console.error("Impossible to add data to the second database", error);
//             return;
//         }
//         console.log("Success, the data has been added to the second database!");

//         // Libération de la connexion à la deuxième base de données
//         connection.release();
//     });
// });