export class Item {
	constructor({URL, model_adress, name,
	subtitle, description, price }){
        this.name = name
        this.subtitle = subtitle
        this.description = description
        this.price = price
		this.URL = URL
		this.model = model_adress
		this.full_URL = `${URL}#${model_adress}`
	}

	createIframe(className, parent) {
		const iframe = document.createElement('iframe')
		iframe.setAttribute('src', this.full_URL)
		iframe.classList.add(className)
		parent.appendChild(iframe)
		return iframe
	}

}