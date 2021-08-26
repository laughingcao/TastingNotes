class Spirit {
    static all = []
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

    tastingNoteHTML(){
        this.element.innerHTML += `
        <div>
            <h3>${this.spirit}</h3>
        </div>
        <button id='delete-bttn'>Delete</button>
        <br>
        `
        return this.element
    }
}