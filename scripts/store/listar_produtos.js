export let resultJSON
console.log("1")
// alert("xampp imbecil")
fetch("../php/listar_produtos.php",{
    method: "GET"
}).then(async function (resposta){
    var resultado = await resposta.json();
    resultJSON = resultado
    console.log(resultado)
    console.log("2")
});


