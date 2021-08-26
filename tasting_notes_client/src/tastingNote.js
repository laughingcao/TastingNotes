class TastingNote {

    static all = []
    static tastingNoteContainer = document.getElementById("tastingnotes-contrainer")
    static tastingNoteForm = document.getElementById("form-container")

    constructor({id, tasting_note, spirit_id}){
        this.id = id
        this.tasting_note = tasting_note
        this.spirit_id = spirit_id

        this.element = document.createElement('li')
        this.element.dataset.id = this.id
        this.element.id = `tastingNote-${this.id}`
        this.element.addEventListener('click', this.handleClick)

        TastingNote.all.push(this)
    }

    tastingNoteHTML(){
        this.element.innerHTML += `
        <div>
            <h3>${this.tasting_note}</h3>
        </div>
        <button id='delete-bttn'>Delete</button>
        <br>
        `
        return this.element
    }

    slapOnDom(){
        TastingNote.tastingNoteContainer.append(this.tastingNoteHTML())
    }

    static renderForm(){
        TastingNote.tastingNoteForm.innerHTML += `
        <form id="new-tastingNote-form">
            Add a new tasting note:<input type="text" id="tasting_note">
            Submit: <input type="submit" id="create">
            <form>
        `
    }

    handleClick = () => {
        
    }
}