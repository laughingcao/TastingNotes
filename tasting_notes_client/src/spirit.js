class Spirit {

    static all = []
    static spiritContainer = document.getElementById("spirits-container")
    static spiritForm = document.getElementById("spirit-form-container")

    constructor({id, name, abv, origin, spirit}){
        this.id = id
        this.name = name
        this.abv = abv
        this.origin = origin
        this.spirit = spirit

        this.element = document.createElement('li')
        this.element.dataset.id = this.id
        this.element.id = `spirit-${this.id}`
        this.element.addEventListener('click', this.handleClick)

        Spirit.all.push(this)
    }

    spiritHTML(){
        this.element.innerHTML += `
        <div>
            <h3>name: ${this.name}</h3>
            <h4>spirit: ${this.spirit}</h4>
            <h4>abv: ${this.abv} % </h4> 
            <h4>origin: ${this.origin}</h4>
        </div>
        <button id='delete-bttn'>Delete</button>
        <br>
        `
        return this.element
    }

    slapOnDom(){
        Spirit.spiritContainer.append(this.spiritHTML())
    }

    static renderForm(){
        Spirit.spiritForm.innerHTML += `
        <form id="new-spirit-form">
            Add a new bottle:<input type="text" id="spirit">
            <input type="submit" id="create">
            <form>
        `
    }

    handleClick = () => {
        if (event.target.innerText === 'Delete'){
            this.element.remove()
            spiritService.deleteSpirit(this.id)
        }
    }
}