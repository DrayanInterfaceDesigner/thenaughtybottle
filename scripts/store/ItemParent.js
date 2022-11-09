export class ItemParent {
	constructor(parent) {
		this.parent = parent
	}
    #createEl(type, className, parent, child) {
        const el = document.createElement(type)
		el.classList.add(className)
        if(child) el.appendChild(child)
        parent.appendChild(el)
		return el
    }
	#createListItem() {
		const list_item = document.createElement('div')
		list_item.classList.add('products__list__item')
		this.parent.appendChild(list_item)
		return list_item
	}
	createItem3DContainer() {
        // this.#createEl('div', 'item__3D__container', this.#createListItem())
		// const item_container = document.createElement('div')
		// item_container.classList.add('item__3D__container')
		// this.#createListItem().appendChild(item_container)
		return this.#createEl('div', 'item__3D__container', this.#createListItem())
	}

    create(item) {
        const product__list__item = this.#createListItem()
        const item__3D__container = this.#createEl('div', 'item__3D__container', product__list__item)
        const item__header = this.#createEl('div', 'item__header', product__list__item)
        const item__footer = this.#createEl('div', 'item__footer', product__list__item)

        product__list__item.setAttribute("id", `productID_${item.id}`)
        const item__header__info = this.#createEl('div', 'item__header__info', item__header)
        const info__name = this.#createEl('p', 'info__name', item__header__info)
        .innerText = item.name
        const info__subtitle = this.#createEl('p', 'info__subtitle', item__header__info)
        .innerText = item.subtitle
        const info__bg__wrapper = this.#createEl('div', 'info__bg__wrapper', item__header__info)
        const info__bg = this.#createEl('img', 'info__bg', info__bg__wrapper)
        .setAttribute('src', '../assets/svg/petals.svg')
        const info__bg_2 = this.#createEl('img', 'info__bg', info__bg__wrapper)
        .setAttribute('src', '../assets/svg/petals.svg')

        const item__description = this.#createEl('p', 'item__description', item__footer)
        .innerText = item.description
        const item__buy__wrapper = this.#createEl('div', 'item__buy__wrapper', item__footer)
        const buy__button__wrapper = this.#createEl('div', 'buy__button__wrapper', item__buy__wrapper)
        const buy__button = this.#createEl('div', 'buy__button', buy__button__wrapper)
        const buy__button__label = this.#createEl('p', 'buy__button__label', buy__button)
        buy__button__label.innerText = 'Buy'
        const buy__price = this.#createEl('div', 'buy__price', item__buy__wrapper)
        const price__tag = this.#createEl('p', 'price__tag', buy__price)
        .innerText = item.price
        const price__currency = this.#createEl('p', 'price__currency', buy__price)
        .innerText = 'BRL'

        item__buy__wrapper.addEventListener("click", ()=> {

            const _data = {
                id_produto: item.id
            }

            fetch("../php/adiciona-carrinho.php", {
              method: "POST",
              body: JSON.stringify(_data),
              headers: {"Content-type": "application/json; charset=UTF-8"}
            })
            .then(response => response.json()) 
            .then(json => console.log(json))

            const loot_number = document.querySelector(".bag__quantity")
            loot_number.innerText = eval(loot_number.innerText) + 1
            loot_number.classList.remove("jump")
            setTimeout(() =>{loot_number.classList.add("jump")}, 100)

            item__buy__wrapper.classList.remove("item__buy__wrapper")
            buy__button__wrapper.classList.remove("buy__button__wrapper")
            buy__button.classList.remove("buy__button")
            item__buy__wrapper.classList.add("item__buy__wrapper__disabled")
            buy__button__wrapper.classList.add("buy__button__wrapper__disabled")
            buy__button.classList.add("buy__button__disabled")

            product__list__item.classList.remove("products__list__item")
            product__list__item.classList.add("products__list__item__disabled")
            product__list__item.classList.add("disabled")
            buy__button__label.innerText = "Bought"
        })

        return item__3D__container
    }

    createForBag(item) {
        const product__list__item = this.#createListItem()
        const item__3D__container = this.#createEl('div', 'item__3D__container', product__list__item)
        const item__header = this.#createEl('div', 'item__header', product__list__item)
        const item__footer = this.#createEl('div', 'item__footer', product__list__item)

        product__list__item.setAttribute("id", `productID_${item.id}`)
        const item__header__info = this.#createEl('div', 'item__header__info', item__header)
        const info__name = this.#createEl('p', 'info__name', item__header__info)
        .innerText = item.name
        const info__subtitle = this.#createEl('p', 'info__subtitle', item__header__info)
        .innerText = item.subtitle
        const info__bg__wrapper = this.#createEl('div', 'info__bg__wrapper', item__header__info)
        const info__bg = this.#createEl('img', 'info__bg', info__bg__wrapper)
        .setAttribute('src', '../assets/svg/petals.svg')
        const info__bg_2 = this.#createEl('img', 'info__bg', info__bg__wrapper)
        .setAttribute('src', '../assets/svg/petals.svg')

        const payment__total__wrapper = this.#createEl('div', 'payment__total__wrapper', item__footer)
        const payment__button__wrapper = this.#createEl('div', 'payment__button__wrapper', payment__total__wrapper)
        const buy__button = this.#createEl('div', 'buy__button', payment__button__wrapper)
        const buy__button__label = this.#createEl('p', 'buy__button__label', buy__button)
        buy__button__label.innerText = 'Price'
        const payment__price = this.#createEl('div', 'payment__price', payment__total__wrapper)
        payment__price.classList.add('mod__price')
        const price__tag = this.#createEl('p', 'price__tag', payment__price)
        price__tag.classList.add('mod__price__value')
        price__tag.innerText = item.price
        const price__currency = this.#createEl('p', 'price__currency', payment__price)
        .innerText = 'BRL'

        return item__3D__container
    }
}

  