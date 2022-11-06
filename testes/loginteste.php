<?php
require("conexao2.php");
$email = $_POST['email'];
$senha = $_POST['senha'];
$select = mysqli_query($conn, "SELECT * FROM clientes WHERE email = '$email' and senha = '$senha'");


if(mysqli_num_rows($select) == 1){
    echo "<script>alert('Bem-vindo!')</script>";
    header("location: deucerto.html");
}
else{
    echo "<script>write('Digite uma senha válida!')</script>";
    header("location: ../cadastro teste/cadastro.html");
}
?>