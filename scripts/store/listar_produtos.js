fetch("../php/listar_produtos.php",{
    method: "GET"
}).then(async function (resposta){
    var resultado = await resposta.json();
    listar(resultado);
    console.log(resultado);
});

function listar(produto){
    for(var i = 0; i < produto.length; i++){
        document.getElementById("produtos").innerHTML += produto[i].nome +"<br>"+produto[i].valor+"<br><br>";
    }
}