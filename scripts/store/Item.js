export class Item {
	constructor({URL, model_address, name,
	subtitle, description, price, id, stock}){
        this.name = name
        this.subtitle = subtitle
        this.description = description
        this.price = price
		this.URL = URL
		this.model = model_address
		this.id = id
		this.stock = stock
		this.full_URL = `${URL}#${model_address}`
	}

	createIframe(className, parent) {
		const iframe = document.createElement('iframe')
		iframe.setAttribute('src', this.full_URL)
		iframe.setAttribute('id', `productIframeID_${this.id}`)
		iframe.classList.add(className)
		parent.appendChild(iframe)
		return iframe
	}

}