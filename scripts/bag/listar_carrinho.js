export let resultBagJSON

fetch("../php/carrinho.php", {
    method: "GET",
}).then(async(resposta) => {
    let d=await resposta.json()
    console.log(d)
    let dados = await resposta.json();
    resultBagJSON = dados
    console.log(dados);
})

// criar/implementar funções de listar e calcular. Seguem exemplos(das nossas veteranas): 

// function listarCarrinho(dados){
//     for(let i=0; i < 8; i++){
//         let conteudo = "";
        
//         conteudo += '<div class="card">';
//         conteudo += '<form id="form-carrinho">';
//         conteudo += '<img onclick="removerCarrinho('+ dados[i].cod + ')" src="../imagens/x.png" class="x"/>';
//         conteudo += '<input type="hidden" value="'+ dados[i].cod + '" name="id-produto" id="id-produto"/>';
//         conteudo += '</form>';
//         conteudo += '<div class="conteudo-produto">';
//         conteudo += '<h2><b>'+ dados[i].nome +'</b></h2>';
//         conteudo += '<h4>'+ dados[i].autor + '</h4>';
//         conteudo += '</div>';
//         conteudo += '<p>R$'+ dados[i].preco + '</p>';
//         conteudo += '<p>Qtd: ' + dados[i].quantidade + '</p>'
//         conteudo += '</div>';

//         document.getElementById("container-carrinho").innerHTML += conteudo;
//     }
// }

// function removerCarrinho(item){

//     document.getElementById("id-produto").value = item;

//     var form = document.getElementById("form-carrinho");
//     var dados = new FormData(form);
    
//     fetch("../php/remover-carrinho.php", {
//         method: "POST",
//         body: dados
//     })
//     window.location.href="../paginas/carrinho.html";
// }

// function calcularValor(dados){
//     var valorTotal = 0;

//     for(var i=0; i < dados.lenght; i++){

//         valorTotal += (dados[i].preco * dados[i].quantidade);

//     }
//     document.getElementById("valorTotal").innerHTML += "valorTotal";
// }
