fetch("../php/join.php",{
    method: "post"
}).then(async function (resposta){
    var resultado = await resposta.json();
});
function gravar(){
        $.ajax({
            type: "POST",
            url: "../php/join.php",
            data:{
                "nome": document.getElementById("nome").value,
                "email": document.getElementById("email").value,
                "senha": document.getElementById("senha").value,
                "cpf": document.getElementById("cpf").value,
            }
    
        });
    }
    
document.getElementById("enviar_real").addEventListener("click", ()=>{gravar()})
