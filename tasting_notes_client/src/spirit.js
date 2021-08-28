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

    static renderSpiritForm(){
        Spirit.spiritForm.innerHTML += `
        <form id="new-spirit-form">
            Add a New Bottle:
            <br>
            Name:<input type="text" id="name">
            <br>
            Spirit:<input type="text" id="spirit">
            <br>
            Abv:<input type="text" id="abv">
            <br>
            Origin:<input type="text" id="origin">
            <br>
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