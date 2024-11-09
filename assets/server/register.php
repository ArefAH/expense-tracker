<?php
include 'connection.php';

$username = $_POST['username'];
$password = $_POST['password'];

$hashed = password_hash($password, PASSWORD_DEFAULT);
echo $hashed;

$query = $connection->prepare('INSERT INTO user(username, password) VALUES (?, ?)');
$query->bind_param('ss', $username, $hashed);
$query->execute();
$result = $query->affected_rows;

if($result != 0){
    echo json_encode([
        "status" => "Successful",
        "message" => "$result users created",
    ]);
} else{
    echo json_encode([
        "status" => "Failed",
        "message" => "Could not create account",
    ]);
}
?>
