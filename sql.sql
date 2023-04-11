-- CREATE TABLE songs_scores (
--   id INT AUTO_INCREMENT PRIMARY KEY,
--   song VARCHAR(255) NOT NULL,
--   score INT NOT NULL
-- );

-- Drop the existing table
DROP TABLE IF EXISTS songs_scores;

-- Create a new table with id as a string
CREATE TABLE songs_scores (
  id TEXT PRIMARY KEY,
  song TEXT NOT NULL,
  score INTEGER NOT NULL
);
