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
        .innerText = 'Buy'
        const buy__price = this.#createEl('div', 'buy__price', item__buy__wrapper)
        const price__tag = this.#createEl('p', 'price__tag', buy__price)
        .innerText = item.price
        const price__currency = this.#createEl('p', 'price__currency', buy__price)
        .innerText = 'BRL'

        return item__3D__container
    }
}