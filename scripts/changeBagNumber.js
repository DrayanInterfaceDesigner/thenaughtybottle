import { resultBagJSON } from './bag/listar_carrinho.js'

const loot_number = document.querySelector(".bag__quantity")

window.onload = function() {
    console.log(resultBagJSON)
    loot_number.innerText = resultBagJSON.length
}