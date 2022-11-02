<?php
$conexao = mysqli_connect("localhost:3306", "root", "", "agoravai");
$verifica = mysqli_query($conexao, "SELECT cpf FROM clientes");
$ver_cpf = mysqli_fetch_assoc($verifica);
$nome = $_POST["nome"];
$cpf = $_POST["cpf"];
$senha = $_POST["senha"];
$email = $_POST["email"];

mysqli_query($conexao, "INSERT INTO clientes(nome, email, senha, cpf) VALUES ('$nome', '$email', '$senha', '$cpf')");
header("Location: ../index.htm");

?>