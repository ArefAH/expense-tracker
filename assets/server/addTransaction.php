<?php
include 'connection.php';

if (isset($_POST['name'],$_POST['amount'], $_POST['category'], $_POST['note'], $_POST['user_id'])) {

    $name = $_POST['name'];
    $amount = $_POST['amount'];
    $category = $_POST['category'];
    $note = $_POST['note'];
    $user_id = $_POST['user_id'];
    

    $query = $connection->prepare('INSERT INTO transaction (name, amount, category, note, user_id) VALUES ( ?, ?, ?, ?, ?)');
    $query->bind_param('sdssi', $name , $amount, $category, $note, $user_id);

    if ($query->execute()) {
        echo json_encode([
            "status" => "Successful",
            "message" => "Transaction added successfully"
        ]);
    } else {
        echo json_encode([
            "status" => "Failed",
            "message" => "Failed to add transaction"
        ]);
    }
} else {
    echo json_encode([
        "status" => "Failed",
        "message" => "Missing required fields"
    ]);
}
?>
