fetch("../php/listar_produtos.php",{
    method: "GET"
}).then(async function (resposta){
    var resultado = await resposta.json();
    listar(resultado);
    console.log(resultado);
});

function listar(produto){
    for(var i = 0; i < produto.length; i++){
        document.getElementById("produtos").innerHTML += produto[i].id_produto+ "<br>"+produto[i].nome +"<br>"+produto[i].valor+"<br>"+produto[i].estoque+"<br>"+produto[i].descricao+"<br>"+produto[i].model_addres+"<br>"+produto[i].cor+"<br><br>";
    }
}