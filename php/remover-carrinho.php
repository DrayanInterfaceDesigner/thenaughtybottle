<?php
    include "conexao.php";

    //índice do produto no array dados[]
    $cod = $_POST["id_produto"];

    mysqli_query($conn, "DELETE FROM carrinho WHERE id_carrinho= '$cod'");
    
?>