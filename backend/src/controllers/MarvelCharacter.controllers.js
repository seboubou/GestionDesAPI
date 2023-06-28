import { database2 } from "../datasource.js";

// Function to get all Marvel characters
const getAllMarvelCharacters = (req, res) => {
  // Execute an SQL query to select all records from the "MARVEL_CHARACTER" table
  database2
    .query("SELECT * FROM MARVEL_CHARACTER")
    .then(([result]) => {
      // If the query is successful, send the results as JSON with HTTP status code 200 (OK)
      res.status(200).send(result);
    })
    .catch((err) => {
      // In case of an error, log the error message to the console
      console.error("An error occurred while retrieving data", err);
    });
};

// Function to get a Marvel character by ID
const getMarvelCharacterById = (req, res) => {
  // Retrieve the character ID from the request parameters
  const id = req.params.id;

  // Execute a parameterized SQL query to select the character with the specified ID
  database2
    .query("SELECT * FROM MARVEL_CHARACTER WHERE id = ?", [id])
    .then(([result]) => {
      if (result.length) {
        // If a character matching the ID is found, send it with HTTP status code 200 (OK)
        res.status(200).send(result);
      } else {
        // If no character matching the ID is found, send an error message with HTTP status code 404 (Not Found)
        res.status(404).send(`The Marvel character with id ${id} probably doesn't exist`);
      }
    })
    .catch((err) => {
      // In case of an error, log the error message to the console
      console.error("An error occurred while retrieving data", err);
    });
};

// Export the functions to make them accessible from other modules
export { getAllMarvelCharacters, getMarvelCharacterById };
