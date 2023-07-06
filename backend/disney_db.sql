-- Création de la base de données "disney_db" s'il n'existe pas déjà
CREATE DATABASE IF NOT EXISTS `disney_db`;

-- Sélection de la base de données "disney_db"
USE `disney_db`;

-- Suppression de la table "disney_character" si elle existe déjà
DROP TABLE IF EXISTS `disney_character`;

-- Création de la table "disney_character" avec les colonnes "id", "name", "created_date", "films" et "image"
CREATE TABLE IF NOT EXISTS `disney_character` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `created_date` DATE NOT NULL,
    `films` TEXT NOT NULL,
    `image` VARCHAR(255) NOT NULL,
    PRIMARY KEY (`id`)
);


INSERT INTO `disney_character` (name, created_date, films, image) VALUES
  ('Mickey Mouse', '1928-11-18', 'Steamboat Willie, Fantasia, Mickeys Christmas Carol', 'https://tse2.mm.bing.net/th?id=OIP.VgNI8q0_D5XFcvQPkqJ6IgHaF7&pid=Api&P=0&h=180'),
  ('Donald Duck', '1934-06-09', 'The Wise Little Hen, The Three Caballeros, DuckTales: The Movie', 'https://tse3.mm.bing.net/th?id=OIP.cwU6lywLqGDSzwAIz3YkNwHaKU&pid=Api&P=0&h=180'),
  ('Goofy', '1932-05-25', 'A Goofy Movie, An Extremely Goofy Movie', 'https://tse1.mm.bing.net/th?id=OIP.qiCE2VnaHMXnCiT7vk9mlwHaGa&pid=Api&P=0&h=180'),
  ('Minnie Mouse', '1928-11-18', 'Steamboat Willie, Fantasia, Mickeys Christmas Carol', 'https://tse4.mm.bing.net/th?id=OIP.OYAFG5B4tROJHypaqKqsowHaFj&pid=Api&P=0&h=180'),
  ('Pluto', '1930-06-26', 'Plutos Quin-puplets, The Legend of Coyote Rock, Runaway Brain', 'https://tse4.mm.bing.net/th?id=OIP.HuxA-F3VHVw6ewexzoJVBwHaFj&pid=Api&P=0&h=180'),
  ('Snow White', '1937-12-21', 'Snow White and the Seven Dwarfs', 'https://tse4.mm.bing.net/th?id=OIP.ZFk5S5CkekY2qlatbUKnYQHaGl&pid=Api&P=0&h=180'),
  ('Cinderella', '1950-03-04', 'Cinderella, Cinderella II: Dreams Come True, Cinderella III: A Twist in Time', 'https://tse1.mm.bing.net/th?id=OIP.AikZrpi7KDMQ0catjlTZnAHaF8&pid=Api&P=0&h=180'),
  ('Sleeping Beauty', '1959-01-29', 'Sleeping Beauty', 'https://tse2.mm.bing.net/th?id=OIP.ig-YidNSm_iJ_RbQ_7Yr0QAAAA&pid=Api&P=0&h=180'),
  ('Belle', '1991-11-13', 'Beauty and the Beast, Beauty and the Beast: The Enchanted Christmas, Beauty and the Beast: Belles Magical World', 'https://tse1.mm.bing.net/th?id=OIP.2nAvT-DML7-39cuY4s8-xgHaEo&pid=Api&P=0&h=180'),
  ('Aladdin', '1992-11-25', 'Aladdin, The Return of Jafar, Aladdin and the King of Thieves', 'https://tse2.mm.bing.net/th?id=OIP.hNYD6WgI8oqcIPyCRtRFrwHaEB&pid=Api&H=86&W=160'),
  ('Mulan', '1998-06-19', 'Mulan, Mulan II', 'https://tse3.mm.bing.net/th?id=OIP.tM1z1468LT0AxWmPJS92fQHaEK&pid=Api&P=0&h=180'),
  ('Pocahontas', '1995-06-23', 'Pocahontas, Pocahontas II: Journey to a New World', 'https://tse4.mm.bing.net/th?id=OIP.vOhi9PCddLXlEhOlnPi5UQHaEK&pid=Api&P=0&h=180'),
  ('The Little Mermaid', '1989-11-17', 'The Little Mermaid, The Little Mermaid II: Return to the Sea, The Little Mermaid: Ariels Beginning', 'https://tse2.mm.bing.net/th?id=OIP.w6UT_pqoXCnonicrLuz1bwHaE-&pid=Api&P=0&h=180'),
  ('Tinker Bell', '1953-02-05', 'Peter Pan, Tinker Bell and the Lost Treasure, Tinker Bell and the Great Fairy Rescue', 'https://tse4.mm.bing.net/th?id=OIP.VKWvwxJQZ-iG7dHEwSpU2wHaF7&pid=Api&P=0&h=180'),
  ('Mowgli', '1967-10-18', 'The Jungle Book, The Jungle Book 2', 'https://tse4.mm.bing.net/th?id=OIP._RgqHhrjwLPLti6e18fb_AHaEP&pid=Api&P=0&h=180'),
  ('Simba', '1994-06-15', 'The Lion King, The Lion King II: Simbas Pride', 'https://tse4.mm.bing.net/th?id=OIP.L8SEDNRTTMsIB1phH0NV4wHaF7&pid=Api&P=0&h=180'),
  ('Nemo', '2003-05-30', 'Finding Nemo, Finding Dory', 'hhttps://tse2.mm.bing.net/th?id=OIP.OH7FLNayPc0wBGZSbJAJZAHaFj&pid=Api&P=0&h=180'),
  ('Elsa', '2013-11-27', 'Frozen, Frozen II', 'https://tse2.mm.bing.net/th?id=OIP.U6JfcJKr3uzoSUeljR9DeQHaFj&pid=Api&P=0&h=180'),
  ('Buzz Lightyear', '1995-11-22', 'Toy Story, Toy Story 2, Toy Story 3, Toy Story 4', 'https://tse3.mm.bing.net/th?id=OIP.Wsg1vi_nGG_YuU9Z1ShmGQAAAA&pid=Api&P=0&h=180'),
  ('Woody', '1995-11-22', 'Toy Story, Toy Story 2, Toy Story 3, Toy Story 4', 'https://tse2.mm.bing.net/th?id=OIP.0zYDezcWBsRyfvPbHvpX8AHaHa&pid=Api&P=0&h=180'),
  ('Tiana', '2009-12-11', 'The Princess and the Frog', 'https://tse2.mm.bing.net/th?id=OIP.xefENlrmYRawlpO8arJ7xwHaGc&pid=Api&P=0&h=180'),
  ('Rapunzel', '2010-11-24', 'Tangled, Tangled Ever After', 'https://tse3.mm.bing.net/th?id=OIP.HKxzEOc9Z_brkIVXUEJOwgHaEo&pid=Api&P=0&h=180'),
  ('Merida', '2012-06-22', 'Brave', 'https://tse2.mm.bing.net/th?id=OIP.WusINAb4LpQpu3B-QZz61gHaEo&pid=Api&P=0&h=180'),
  ('Hercules', '1997-06-13', 'Hercules', 'https://tse3.explicit.bing.net/th?id=OIP.1sIdgYgV48RIaguDhusuxAHaFi&pid=Api&P=0&h=180'),
  ('Tarzan', '1999-06-18', 'Tarzan, Tarzan & Jane', 'https://tse1.explicit.bing.net/th?id=OIP.9WeQ4s7R2s3YhMzywfSlswHaD4&pid=Api&P=0&h=180'),
  ('Moana', '2016-11-23', 'Moana', 'https://tse4.mm.bing.net/th?id=OIP.CLrGOGivWnIJG8styJ2SQwHaE8&pid=Api&P=0&h=180'),
  ('miguel(coco)', '2017-10-20', 'Coco', 'https://tse1.mm.bing.net/th?id=OIP.QCOMu0hG3BmoBuIesqZBIgHaH3&pid=Api&P=0&h=180'),
  ('Daisy Duck', '1940-06-07', 'Various Donald Duck cartoons and movies', 'https://tse2.mm.bing.net/th?id=OIP.zk3urWaktou3yjpJR-aAVgHaFj&pid=Api&P=0&h=180'),
  ('Hiro Hamada', '2014-10-23', 'Big Hero 6', 'https://tse4.mm.bing.net/th?id=OIP.ejsofJ6YbLE1f3edLUqYmAHaHa&pid=Api&P=0&h=180');
