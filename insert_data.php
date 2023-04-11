<?php
// insert_data.php

function writeLog($message) {
    $logFile = 'php_log.txt';
    $currentDate = date('Y-m-d H:i:s');
    file_put_contents($logFile, "[$currentDate] $message" . PHP_EOL, FILE_APPEND);
}

writeLog("Script started");
writeLog("POST data: " . print_r($_POST, true));

$dbname = __DIR__ . "/my.db";
writeLog("Trying to connect to the database");

try {
    $conn = new PDO("sqlite:" . $dbname);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    writeLog("Connected to the database");
} catch (PDOException $e) {
    writeLog("Connection failed: " . $e->getMessage());
    exit();
}

$sql = "INSERT INTO songs_scores (song, score) VALUES (:song, :score)";
$stmt = $conn->prepare($sql);

$stmt->bindParam(':song', $_POST['song'], PDO::PARAM_STR);
$stmt->bindParam(':score', $_POST['score'], PDO::PARAM_INT);

try {
    $stmt->execute();
    writeLog("Data inserted successfully");
} catch (PDOException $e) {
    writeLog("Data insertion failed: " . $e->getMessage());
}

$conn = null;
?>
