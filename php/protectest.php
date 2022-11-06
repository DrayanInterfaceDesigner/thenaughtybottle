<?php

if(!isset($_SESSION)){
    session_start();
}

if(!isset($_SESSION['id'])){
    die ("<script>alert('Voce não pode acessar essa pagina porque não esta logado!')</script><p><a href=\"./thenaughtybottle/index.htm\"");
}
?>