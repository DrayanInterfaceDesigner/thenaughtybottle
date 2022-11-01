import {ItemParent} from "./ItemParent.js"
import {Item} from "./Item.js"

const item_parent = document.querySelector('.products__list__item__wrapper')

// Essa array vai ser criada dinamicamente usando as informações
// vindas do servidor, que são: 
// color(potion-bottle-corAqui), name, subtitle, description, price
const items = [
	new Item({
	URL: './iframe.htm',
	model_adress: 'potion-bottle_blue',
	name: 'Blasmorpheus',
	subtitle: 'cold freezing',
	description: "Sex was never a option. So I've brought the cold.",
	price: "568.75"
	}),
	new Item({
	URL: './iframe.htm',
	model_adress: 'potion-bottle_wine',
	name: 'Blasmorpheus',
	subtitle: 'cold freezing',
	description: "Sex was never a option. So I've brought the cold.",
	price: "568.75"
	}),
	new Item({
	URL: './iframe.htm',
	model_adress: 'potion-bottle_green',
	name: 'Blasmorpheus',
	subtitle: 'cold freezing',
	description: "Sex was never a option. So I've brought the cold.",
	price: "568.75"
	}),
	new Item({
	URL: './iframe.htm',
	model_adress: 'potion-bottle_orange',
	name: 'Blasmorpheus',
	subtitle: 'cold freezing',
	description: "Sex was never a option. So I've brought the cold.",
	price: "568.75"
	}),
	new Item({
	URL: './iframe.htm',
	model_adress: 'potion-bottle_pink',
	name: 'Blasmorpheus',
	subtitle: 'cold freezing',
	description: "Sex was never a option. So I've brought the cold.",
	price: "568.75"
	}),
	new Item({
	URL: './iframe.htm',
	model_adress: 'potion-bottle_purple',
	name: 'Blasmorpheus',
	subtitle: 'cold freezing',
	description: "Sex was never a option. So I've brought the cold.",
	price: "568.75"
	})
]

// cria os items na página
items.forEach(item => {
	console.log('ITEM: ', item)
	const p = new ItemParent(item_parent).create(item)
	item.createIframe('item__3D__iframe', p)
})