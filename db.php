<?php
// insert_data.php

// Database connection
$dbname = "my.db";

// Create connection
$conn = new SQLite3($dbname);

// Prepare and bind
$stmt = $conn->prepare("INSERT INTO songs_scores (song, score) VALUES (:song, :score)");
$stmt->bindValue(':song', $_POST['song'], SQLITE3_TEXT);
$stmt->bindValue(':score', $_POST['score'], SQLITE3_INTEGER);

// Execute statement
$result = $stmt->execute();

// Close statement and connection
$stmt->close();
$conn->close();
?>
