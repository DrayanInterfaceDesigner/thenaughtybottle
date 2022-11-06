<?php
$usuario = "root";
$senha = "";
$database = "agoravai";
$host = "localhost:3306";

$conn = mysqli_connect($host, $usuario, $senha, $database);

if (!$conn){
    die("falha ao conectar:". mysqli_connect_error());
}
?>