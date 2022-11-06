<?php
require("conexao.php");
$nome = $_POST["nome"];
$cpf = $_POST["cpf"];
$senha = $_POST["senha"];
$email = $_POST["email"];
$verifica = mysqli_query($conn, "SELECT * FROM clientes WHERE cpf = '$cpf'");
//$ver_cpf = mysqli_fetch_assoc($verifica);

if(mysqli_num_rows($verifica) == 1){
    header("location: ./thenaughtybottle/index.htm");
}
else{
    mysqli_query($conn, "INSERT INTO clientes(nome, email, senha, cpf) VALUES ('$nome', '$email', '$senha', '$cpf')");
}
?>