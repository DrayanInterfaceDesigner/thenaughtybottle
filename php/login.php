<?php
require("conexao.php");
$email = $_POST['email'];
$senha = $_POST['senha'];
$id_cliente = mysqli_query($conn, "SELECT id_clientes FROM clientes WHERE email = '$email'");
$select = mysqli_query($conn, "SELECT * FROM clientes WHERE email = '$email' and senha = '$senha'");
$i = 0;

if(mysqli_num_rows($select) == 1){
    echo "<script>alert('Bem-vindo!')</script>";
    $usuario = $select->fetch_assoc();

    if(!isset($_SESSION)){
        session_start();
    }
    $_SESSION['id'] = $usuario['id_clientes'];
    $_SESSION['nome'] = $usuario['nome'];

    header("location: ../pages/home_welcome.htm");

}
else{
    echo "<script> alert('Conta não encontrada. Faça já seu cadastro!.');
          window.location.replace('../pages/join.htm'); </script>"; }
?>