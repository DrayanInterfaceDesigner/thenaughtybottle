import {Item} from "../store/Item.js"
import {ItemParent} from "../store/ItemParent.js"
import { resultBagJSON } from "./listar_carrinho.js"

let items = []
let total = 0

const item_parent = document.querySelector('.products__list__item__wrapper')
const total_price = document.getElementById("total__price")
const total_amount = document.querySelector(".bag__quantity")





function createItemInstance(objectArray){
    objectArray.forEach(item => {
        const x = new Item({
            URL: './iframe.htm',
            model_address: item.model_address,
            name: item.nome,
            id: item.id_produto,
            stock: item.estoque,
            subtitle: item.subtitulo,
            description: item.descricao,
            price: item.valor
        })
        addItemToList(x, items)
    })
}
function addItemToList(instance, array){
    array.push(instance)
}
const test = JSON.parse(JSON.stringify([{
    "cor": "vermel",
    "descricao": "O curso",
    "estoque": "100",
    "id_produto": "1",
    "model_address": "potion-bottle_red",
    "nome": "The intercurso",
    "subtitulo": "Cheiro de...curso",
    "valor": "66.81"
},
{
    "cor": "Azul",
    "descricao": "Para ter um bom momento eita preula",
    "estoque": "100",
    "id_produto": "2",
    "model_address": "potion-bottle_red",
    "nome": "Eita preula momment",
    "subtitulo": "eita preula!",
    "valor": "56.8"
}]))
createItemInstance(test)
//ta tentando puxar o código do php, talvez pq n to com server aberto?
// createItemInstance(resultBagJSON)
console.log(resultBagJSON)
// console.log("Items: ", items)

// Puts the items into the page

const RenderItems = async () => {
    items.forEach(item => {
	const product = new ItemParent(item_parent).createForBag(item)
	item.createIframe('item__3D__iframe', product)
})}

RenderItems().then(()=>{
    const price_values = document.querySelectorAll(".mod__price__value")
    price_values.forEach(p => {
        total += eval(p.innerText)
    })
    total = total.toFixed(2)
    total_price.innerText = total
    total_amount.innerText = price_values.length
}
)