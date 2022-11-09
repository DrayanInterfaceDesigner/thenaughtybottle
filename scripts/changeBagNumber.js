import { resultBagJSON } from './bag/listar_carrinho.js'

const loot_number = document.querySelector(".bag__quantity")

window.onload = function() {
    fetch("../php/carrinho.php", {
        method: "GET",
    }).then(async(resposta) => {
        let dados = await resposta.json();
        loot_number.innerText = dados.length
        console.log("old: ", resultBagJSON)
        console.log(dados);
    })
}
