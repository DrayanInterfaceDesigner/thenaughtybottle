import { resultBagJSON } from './bag/listar_carrinho.js'

const loot_number = document.querySelector(".bag__quantity")

window.onload = function() {
    fetch("../php/carrinho.php", {
        method: "GET",
    }).then(async(resposta) => {
        let dados = await resposta.json();
        loot_number.innerText = dados.length
        console.log("old: ", resultBagJSON.length)
        console.log(dados);
    }).then(()=> {
        loot_number.innerText = resultBagJSON.length
    })
}

setTimeout(()=> {
    loot_number.innerText = resultBagJSON.length
    console.log(resultBagJSON.length)
}, 1000)