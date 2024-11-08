<?php
$host = 'localhost';
$username = 'root';
$pass = '';
$dbname = 'trackerdb';

$connection = new mysqli($host, $username, $pass, $dbname);

if($connection->connect_error){
    die('Connection Error');
}

?>