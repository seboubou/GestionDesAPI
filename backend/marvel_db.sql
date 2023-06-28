-- Création de la base de données "marvel_db" s'il n'existe pas déjà
CREATE DATABASE IF NOT EXISTS `marvel_db`;

-- Sélection de la base de données "marvel_db"
USE `marvel_db`;

-- Suppression de la table "marvel_character" si elle existe déjà
DROP TABLE IF EXISTS `marvel_character`;

-- Création de la table "marvel_character" avec les colonnes "id", "name", "race", "actor" et "image"
CREATE TABLE IF NOT EXISTS `marvel_character` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `race` VARCHAR(100) NOT NULL,
    `actor` VARCHAR(25) NOT NULL,
    `image` VARCHAR(255) NOT NULL,
    PRIMARY KEY (`id`)
);
-- Insertion de plusieurs enregistrements dans la table "marvel_character"
INSERT INTO `marvel_character` (name, race, actor, image) VALUES
    ('The Silver Surfer', 'Humain', 'norrin radd', 'https://tse3.mm.bing.net/th?id=OIP.I0MN-xM1Tiab-tvwaxqH3gHaEo&pid=Api&P=0&h=180'),
    ('Mr Fantastique', 'Humain', 'Ioan Gruffudd', 'https://tse2.mm.bing.net/th?id=OIP.SoX44EGOnpQ17EivzE59LQHaKQ&pid=Api&P=0&h=180'),
    ('La femme Invisible', 'Humain', 'Jessica alba', 'https://tse3.mm.bing.net/th?id=OIP.FxPKNIn0hRAHM8xD8j0HhgHaE7&pid=Api&P=0&h=180'),
    ('La Torche Humaine', 'Humain', 'Chris Evans', 'https://tse1.mm.bing.net/th?id=OIP.qw96zftpXnkJj7ru4FUHPAHaIx&pid=Api&P=0&h=180'),
    ('the ting', 'Humain', 'Michael Chiklis', 'https://tse3.mm.bing.net/th?id=OIP.EXsgkYDNpME8jRMTLh5JcQHaJZ&pid=Api&P=0&h=180'),
    ('Docor Strange', 'Humain', 'Benedict Cumberbatch', 'https://tse3.mm.bing.net/th?id=OIP.5yo9LzjE102mui-CioIgYQHaFF&pid=Api&P=0&h=180'),
    ('Tornade', 'Mutant', 'Halle Berry', 'https://tse1.mm.bing.net/th?id=OIP.zqdWVIROeDxkpwGJ68XiuwHaEK&pid=Api&P=0&h=180'),
    ('Spider-Man', 'Humain', 'Tobey Maguire', 'https://tse2.mm.bing.net/th?id=OIP.QmZwAA8A5IbAYxyDsTO-DAHaEL&pid=Api&P=0&h=180'),
    ('Iron Man', 'Humain', 'Robert Downey Jr.', 'https://tse4.mm.bing.net/th?id=OIP.08bGE4YPB9q_OZ9hS45YpgHaGm&pid=Api&P=0&h=180'),
    ('Captain America', 'Humain', 'Chris Evans', 'https://tse1.mm.bing.net/th?id=OIP.UTc-sYuAArC6_HdjSle1dwHaHa&pid=Api&P=0&h=180'),
    ('Thor', 'Dieu Asgardien', 'Chris Hemsworth', 'https://tse3.mm.bing.net/th?id=OIP.2-myfDbGsAtWj40xjuV0FgHaFj&pid=Api&P=0&h=180'),
    ('Hulk', 'Humain', 'Mark Ruffalo', 'https://tse1.mm.bing.net/th?id=OIP.Vw75xo_FlWSIS_0XQPGXRAHaEK&pid=Api&P=0&h=180'),
    ('Black Panther', 'Humain', 'Chadwick Boseman', 'https://tse2.mm.bing.net/th?id=OIP.sdR_NSCSANuQJfnMQdgwgAHaEo&pid=Api&P=0&h=180'),
    ('Ant-Man', 'Humain', 'Paul Rudd', 'https://tse3.mm.bing.net/th?id=OIP._3L1w1vuu5wLBTZmxakykAHaEK&pid=Api&P=0&h=180'),
    ('Groot', 'Alien', 'Vince Diesel (voix)', 'https://tse2.mm.bing.net/th?id=OIP.iPljrrGlZNsjT7XxsnWnqQHaEK&pid=Api&P=0&h=180'),
    ('Captain Marvel', 'Humain', 'Brie Larson', 'https://tse4.mm.bing.net/th?id=OIP.oFb4wDxXN2HBAl5W-Qf0TQHaJl&pid=Api&P=0&h=180'),
    ('Wolverine', 'Mutant', 'Hugh Jackman', 'https://tse2.mm.bing.net/th?id=OIP.-C0U1nrshWLieYADGv8QDgHaE8&pid=Api&P=0&h=180'),
    ('Star-Lord', 'Humain', 'Chris Pratt', 'https://tse2.mm.bing.net/th?id=OIP.IXQ87RU72qasIO92XDrLcQHaE0&pid=Api&P=0&h=180'),
    ('Rocket Raccoon', 'Alien', 'Bradley Cooper (voix)', 'https://tse3.mm.bing.net/th?id=OIP.xqvbr9cLLe9x3JLUk7E-bwHaKl&pid=Api&P=0&h=180'),
    ('Winter Soldier', 'Humain', 'Sebastian Stan', 'https://tse3.mm.bing.net/th?id=OIP.EGi8a4LtcFwRDjktVKcdVgHaHa&pid=Api&P=0&h=180'),
    ('Vision', 'Androïde', 'Paul Bettany', 'https://tse2.mm.bing.net/th?id=OIP.hPdyeH6lp3_lb7w3JR58WAHaJR&pid=Api&P=0&h=180'),
    ('Gamora', 'Alien', 'Zoe Saldana', 'https://tse4.mm.bing.net/th?id=OIP.i0isGP3_zrcEu_jkKItsQgHaLH&pid=Api&P=0&h=180'),
    ('Hawkeye', 'Humain', 'Jeremy Renner', 'https://tse1.mm.bing.net/th?id=OIP.ScXKDHSnb8dyMhyQarIqZgHaLK&pid=Api&P=0&h=180'),
    ('Scarlet Witch', 'Mutant', 'Elizabeth Olsen', 'https://tse4.mm.bing.net/th?id=OIP.GdHDQbQpq8rPSdpEx1kKcwHaKp&pid=Api&P=0&h=180'),
    ('Drax', 'Alien', 'David Bautista', 'https://tse1.mm.bing.net/th?id=OIP.CxlHkgOFYJ3ehxZcZW2jvgHaNK&pid=Api&P=0&h=180'),
    ('War Machine', 'Humain', 'Don Cheadle', 'https://tse3.mm.bing.net/th?id=OIP.5yS1Zkcj2ouZ9gLJdGqPwQHaE2&pid=Api&P=0&h=180'),
    ('Cyclope', 'Mutant', 'James Marsden', 'https://tse3.explicit.bing.net/th?id=OIP.c7JiarzX6oDqVgraddGZaAHaEu&pid=Api&P=0&h=180');