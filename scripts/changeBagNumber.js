import {resultJSON} from './store/listar_produtos.js'

const loot_number = document.querySelector(".bag__quantity")

window.onload = function() {
    console.log(resultJSON)
    loot_number.innerText = resultJSON.length
}