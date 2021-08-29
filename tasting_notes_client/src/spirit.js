class Spirit {

    static all = []
    static spiritContainer = document.getElementById("spirits-container")
    static spiritForm = document.getElementById("spirit-form-container")

    constructor({id, name, abv, origin, spirit_type}){
        this.id = id
        this.name = name
        this.abv = abv
        this.origin = origin
        this.spirit_type = spirit_type

        tastingNoteService.getTastingNotes(id, this.updateTastingNotes)

        this.element = document.createElement('li')
        this.element.dataset.id = this.id
        this.element.id = `spirit-${this.id}`
        this.element.addEventListener('click', this.handleClick)

        Spirit.all.push(this)
    }

    updateTastingNotes = notes => {
        const notesTarget = this.element.querySelector(".spirit-notes-list")
        if (notesTarget) {
            notesTarget.innerHTML = '';
            for (const note of notes) {
                notesTarget.appendChild(note);
            }
        }
    }

    spiritHTML(){
        this.element.innerHTML += `
        <div class="block-spirit">
            <div class="spirit-info">
                <h3>name: ${this.name}</h3>
                <h4>spirit: ${this.spirit_type}</h4>
                <h4>abv: ${this.abv} % </h4> 
                <h4>origin: ${this.origin}</h4>
                <p>
                    <button>Delete</button>
                </p>
            </div>
            <div class="spirit-notes">
                <h4>Tasting notes:</h4>
                <ul class="spirit-notes-list"></ul>
            </div>
        </div>
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
            Spirit:<input type="text" id="spirit_type">
            <br>
            Abv:<input type="number" id="abv">
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