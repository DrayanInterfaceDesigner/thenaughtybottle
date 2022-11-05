<?php
require("conexao.php");
$email = $_POST['email'];
$senha = $_POST['senha'];
$select = mysqli_query($conn, "SELECT * FROM clientes WHERE email = '$email' and senha = '$senha'");


if(mysqli_num_rows($select) == 1){
    echo "<script>alert('sim')</script>";
}
else{
    echo "<script>alert('nao')</script>";
}
?>