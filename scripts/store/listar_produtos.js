export let resultJSON

fetch("../php/listar_produtos.php",{
    method: "GET"
}).then(async function (resposta){
    var resultado = await resposta.json();
    resultJSON = resultado
});


