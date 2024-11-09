<?php
include 'connection.php';

$transaction_id = $_GET['transaction_id'];

if ($transaction_id) {
    $query = $connection->prepare("DELETE FROM transaction WHERE id = ?");
    $query->bind_param("i", $transaction_id);

    if ($query->execute()) {
        echo json_encode([
            'status' => 'Successful',
            'message' => 'Transaction deleted successfully'
        ]);
    } else {
        echo json_encode([
            'status' => 'Failed',
        ]);
    }
} else {
    echo json_encode([
        'status' => 'Error',
    ]);
}
?>
