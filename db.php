<?php
// Connect to the database
$db = new SQLite3('myDB.db');

// Get the values from the POST request
$user1_score = $_POST['user1_score'];
$user2_score = $_POST['user2_score'];
$user3_score = $_POST['user3_score'];
$user4_score = $_POST['user4_score'];
$song1 = $_POST['song1'];
$song2 = $_POST['song2'];
$song3 = $_POST['song3'];
$song4 = $_POST['song4'];

// Insert the values into the table
$db->exec("INSERT INTO scores (user1_score, user2_score, user3_score, user4_score, song1, song2, song3, song4) 
VALUES ($user1_score, $user2_score, $user3_score, $user4_score, '$song1', '$song2', '$song3', '$song4')");
?>
 