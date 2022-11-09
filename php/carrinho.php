<?php
    include "conexao.php";

    $query = mysqli_query($conn, "SELECT id_produto, nome, subtitulo, valor,estoque, model_address, cor FROM produtos JOIN carrinho ON produtos.id_produto = carrinho.id_carrinho");

    for($i = 0; $retornar = mysqli_fetch_assoc($query); $i++){
        $matriz[$i]["id_produto"] = $retornar["id_produto"];
        $matriz[$i]["subtitulo"] = $retornar["subtitulo"];
        $matriz[$i]["nome"] = $retornar["nome"];
        $matriz[$i]["valor"] = $retornar["valor"];
        $matriz[$i]["estoque"] = $retornar["estoque"];
        $matriz[$i]["model_address"] = $retornar["model_address"];
        $matriz[$i]["cor"] = $retornar["cor"];
    }

    $objetoJSON = json_encode($matriz);
    echo $objetoJSON;
?>