<?php
require("conexao.php");
$nome = $_POST["nome"];
$cpf = $_POST["cpf"];
$senha = $_POST["senha"];
$email = $_POST["email"];
$verifica = mysqli_query($conn, "SELECT * FROM clientes WHERE cpf = '$cpf'");
//$ver_cpf = mysqli_fetch_assoc($verifica);

if(mysqli_num_rows($verifica) == 1){ 
    echo "<script> alert('Conta já cadastrada. Faça já seu login!');
    window.location.replace('./index.htm'); </script>";
}
else{
    mysqli_query($conn, "INSERT INTO clientes(nome, email, senha, cpf) VALUES ('$nome', '$email', '$senha', '$cpf')");
}
?>