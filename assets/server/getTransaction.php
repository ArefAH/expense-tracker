<?php
include 'connection.php';
$id = $_GET["id"];
$query = $connection->prepare("SELECT * FROM transaction WHERE user_id = ?");
$query->bind_param("i", $id);
$query->execute();
$result = $query -> get_result();
if($result -> num_rows != 0 ){
    $array = [];
    while($row = $result -> fetch_assoc()){
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