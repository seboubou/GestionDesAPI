// import { database3 } from "../datasource.js";

// // Function to get all Disney characters
// const getAllDisneyCharacters = (req, res) => {
//   // Execute an SQL query to select all records from the "disney_character" table
//   database3
//     .query("SELECT * FROM disney_character")
//     .then(([result]) => {
//       // If the query is successful, send the results as JSON with HTTP status code 200 (OK)
//       res.status(200).send(result);
//     })
//     .catch((err) => {
//       // In case of an error, log the error message to the console
//       console.error("An error occurred while retrieving data", err);
//     });
// };

// // Function to get a Disney character by ID
// const getDisneyCharacterById = (req, res) => {
//   // Retrieve the character ID from the request parameters
//   const id = req.params.id;

//   // Execute a parameterized SQL query to select the character with the specified ID
//   database3
//     .query("SELECT * FROM disney_character WHERE id = ?", [id])
//     .then(([result]) => {
//       if (result.length) {
//         // If a character matching the ID is found, send it with HTTP status code 200 (OK)
//         res.status(200).send(result);
//       } else {
//         // If no character matching the ID is found, send an error message with HTTP status code 404 (Not Found)
//         res.status(404).send(`The Disney character with id ${id} probably doesn't exist`);
//       }
//     })
//     .catch((err) => {
//       // In case of an error, log the error message to the console
//       console.error("An error occurred while retrieving data", err);
//     });
// };

// export { getAllDisneyCharacters, getDisneyCharacterById };
