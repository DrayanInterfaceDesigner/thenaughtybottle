<?php
    include "conexao.php";

    //índice do produto no array dados[]
    $cod = $_POST["id_produto"];

    $query = mysqli_query($conn, "SELECT * FROM carrinho WHERE id_carrinho = '$cod'");
    $carrinho = mysqli_fetch_assoc($query);

    //se o produto já está no carrinho
    if($carrinho){
        mysqli_query($conn, "UPDATE carrinho SET quantidade = quantidade + 1 WHERE id_carrinho = $cod");
    }
    //produto não está no carrinho
    else{
        mysqli_query($conn, "INSERT INTO carrinho(id_carrinho, quantidade) VALUE ($cod, 1)");
    }
?>