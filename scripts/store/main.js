import {Item} from "./Item.js"
import {ItemParent} from "./ItemParent.js"
import { resultJSON } from "./listar_produtos.js"
const item_parent = document.querySelector('.products__list__item__wrapper')

let items = []

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
// createItemInstance(resultJSON)
console.log(resultJSON)
// console.log("Items: ", items)

// Puts the items into the page
items.forEach(item => {
	const product = new ItemParent(item_parent).create(item)
	item.createIframe('item__3D__iframe', product)
})