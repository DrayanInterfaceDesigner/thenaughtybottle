<?php
include "conexao.php";
$select = mysqli_query($conn, "SELECT * FROM produtos");

$i = 0;

while($registro = mysqli_fetch_assoc($select)){
    $resultado[$i]["id_produto"] = $registro["id_produto"];
    $resultado[$i]["subtitulo"] = $registro["subtitulo"];
    $resultado[$i]["nome"] = $registro["nome"];
    $resultado[$i]["valor"] = $registro["valor"];
    $resultado[$i]["estoque"] = $registro["estoque"];
    $resultado[$i]["descricao"] = $registro["descricao"];
    $resultado[$i]["model_address"] = $registro["model_address"];
    $resultado[$i]["cor"] = $registro["cor"];
    $i++;
}

$objJSON = json_encode($resultado);
echo $objJSON;