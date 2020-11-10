class Dish extends HTMLElement {
  constructor() {
    super()

    const name = this.document.getElementById('dish')

    const shadowDOM = this.attachShadow({ mode: 'open' })

    const text = document.createElement('p')
    text.innerHTML = this.innerHTML
    this.innerHTML = ''
    shadowDOM.appendChild(text)

  }
}

customElements.define('dish-name', Dish)


class DishDescription extends HTMLElement {
  constructor() {
    super()

    const name = this.document.getElementById('dish-des')

    const shadowDOM = this.attachShadow({ mode: 'open' })

    const text = document.createElement('p')
    text.innerHTML = this.innerHTML
    this.innerHTML = ''




    shadowDOM.appendChild(text)

  }
}

customElements.define('dish-description', DishDescription)

class Menu extends HTMLElement {
  connectedCallback() {

  }
}
customElements.define('menu', Menu);

var MyButton = document.registerElement('My-button', {
  prototype: Object.create(HTMLButtonElement.prototype),
  extends: 'button'
});

