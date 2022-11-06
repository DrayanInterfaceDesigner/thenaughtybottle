<?php
require("conexao.php");
$email = $_POST['email'];
$senha = $_POST['senha'];
$select = mysqli_query($conn, "SELECT * FROM clientes WHERE email = '$email' and senha = '$senha'");


if(mysqli_num_rows($select) == 1){
    echo "<script defer>alert('Bem-vindo!')</script>";
    $usuario = $select->fetch_assoc();
    if(!isset($_SESSION)){
        session_start();
    }
    $_SESSION['id'] = $usuario['id_clientes'];
    $_SESSION['nome'] = $usuario['nome'];

    header("location: ../pages/home.htm");
}
else{
    echo "<script>alert('Digite uma senha válida!')</script>";
   // header("location: loginteste.html");
}
?>