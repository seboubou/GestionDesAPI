-- Création de la base de données "seigneur_des_anneaux_db" s'il n'existe pas déjà
CREATE DATABASE IF NOT EXISTS `seigneur_des_anneaux_db`;

-- Sélection de la base de données "seigneur_des_anneaux_db"
USE `seigneur_des_anneaux_db`;

-- Suppression de la table "SEIGNEUR_DES_ANNEAUX_CHARACTER" s'il elle existe déjàseigneur_des_anneaux_character
DROP TABLE IF EXISTS `seigneur_des_anneaux_character`;

-- Création de la table "SEIGNEUR_DES_ANNEAUX_CHARACTER" avec les colonnes "id", "name", "race" et "image"seigneur_des_anneaux_character
CREATE TABLE IF NOT EXISTS `seigneur_des_anneaux_character` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `race` VARCHAR(100) NOT NULL,
    `image` VARCHAR(255) NOT NULL,
    PRIMARY KEY (`id`)
);

-- Insertion de plusieurs enregistrements dans la table "SEIGNEUR_DES_ANNEAUX_CHARACTER"
INSERT INTO `seigneur_des_anneaux_character` (name, race, image) VALUES
    ('Aragorn', 'Humain', 'https://tse4.mm.bing.net/th?id=OIP._j_LxlqLHZiRNyJ5hFn7lQHaFj&pid=Api&P=0&h=180'),
    ('Gandalf', 'Maia', 'https://tse3.mm.bing.net/th?id=OIP.wgNtRPxfhj9Wn87DBBsneQHaEL&pid=Api&P=0&h=180'),
    ('Legolas', 'Elfe', 'https://tse2.explicit.bing.net/th?id=OIP.Kyu5VaUfl_Tf3bxDOjzp0gHaI5&pid=Api&P=0&h=180'),
    ('Frodo', 'Hobbit', 'https://tse1.mm.bing.net/th?id=OIP.3yP4R43hzlaPe87OrY3DYgHaFj&pid=Api&P=0&h=180'),
    ('Gimli', 'Nain', 'https://tse2.mm.bing.net/th?id=OIP.wuDCu0bYpi4IhFLe-ouAUAHaEK&pid=Api&P=0&h=180'),
    ('Boromir', 'Humain','https://tse1.mm.bing.net/th?id=OIP._uHLsNbgnf1m1vK3ZWE2UAHaEo&pid=Api&P=0&h=180'),
    ('Arwen', 'Elfe','https://tse3.mm.bing.net/th?id=OIP.nq6sG2JsuCcULEDSW5Z6XwHaEy&pid=Api&P=0&h=180' );
    

    INSERT INTO `seigneur_des_anneaux_character` (name, race, image) VALUES
    ('Gollum', 'Hobbit', 'https://tse2.mm.bing.net/th?id=OIP.sXRwnvDBtw1d77a-uNIrHAHaGl&pid=Api&P=0&h=180'),
    ('Saruman', 'Maia', 'https://tse3.mm.bing.net/th?id=OIP.l2QFdtqLn1RW3qdCZYgcRQHaEK&pid=Api&P=0&h=180'),
    ('Galadriel', 'Elfe', 'https://tse4.mm.bing.net/th?id=OIP.FOHL0qYPlwmB_UzEdWNZsgHaGn&pid=Api&P=0&h=180'),
    ('Sauron', 'Maia', 'https://tse1.mm.bing.net/th?id=OIP.0gt8Iqi5QCcnTO9iBWyUHQHaEM&pid=Api&P=0&h=180'),
    ('Elrond', 'Elfe', 'https://tse2.mm.bing.net/th?id=OIP.guBn2fbQs0KBb0pmvD2ZjwAAAA&pid=Api&P=0&h=180'),
    ('Grima', 'Humain', 'https://tse2.mm.bing.net/th?id=OIP.nkqNy0ZMTbuAHR3MPdnNdAHaHO&pid=Api&P=0&h=180'),
    ('Sam', 'Hobbit', 'https://tse4.mm.bing.net/th?id=OIP.5wTvnDQUk4YqmLttCrWPqQHaJJ&pid=Api&P=0&h=180');






    
    
    
    
    

    
