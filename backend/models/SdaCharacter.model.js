import { database1 } from "../src/datasource.js";

export const findAll = async () => {
  return await database1.query("SELECT * FROM seigneur_des_anneaux_character");
};

export const findById = async (id) => {
  return await database1.query(
    "SELECT * FROM seigneur_des_anneaux_character WHERE id = ?",
    [id]
  );
};

export const insertCharacter = async (name, race, image) => {
  return await database1.query(
    "INSERT INTO seigneur_des_anneaux_character (name,race,image) VALUES (?, ?, ?)",
    [name, race, image]
  );
};

export const deleteCharacterById = async (id) => {
  return await database1.query(
    "DELETE FROM seigneur_des_anneaux_character WHERE id = ?",
    [id]
  );
};

export const updateCharacterById = async (id, name, race, image) => {
  return await database1.query(
    "UPDATE seigneur_des_anneaux_character SET name = ?, race = ?, image = ? WHERE id = ?",
    [name, race, image, id]
  );
};
