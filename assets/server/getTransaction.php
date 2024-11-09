<?php
include 'connection.php';
$id = $_GET["id"];
$query = $connection->prerpare("SELECT * FROM products WHERE user_id = ?");
$query->bind_param("i", $id);
$query->execute();
if($result -> num_rows != 0 ){
    $array = [];
    while($row = $result -> fetch_assoc){
        $array[] = $row;
    }

    echo json_encode($array);
}
else{
    echo json_encode([
        "message" => "No Transactions",
    ]);
}

?>