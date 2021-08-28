class TastingNote {

    static all = []
    static tastingNoteContainer = document.getElementById("tasting-notes-container")
    static tastingNoteForm = document.getElementById("tasting-note-form-container")

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
            <h4>${this.tasting_note}</h4>
        </div>
        <button id='delete-bttn'>Delete</button>
        <br>
        `
        return this.element
    }

    slapOnDom(){
        TastingNote.tastingNoteContainer.append(this.tastingNoteHTML())
    }

    static renderTastingNoteForm(){
        TastingNote.tastingNoteForm.innerHTML += `
        <form id="new-tastingNote-form">
            Add a new tasting note:<input type="text" id="tasting_note">
            <input type="submit" id="create">
            <form>
        `
    }

    handleClick = () => {
        if (event.target.innerText === 'Delete'){
            this.element.remove()
            tastingNoteService.deleteTastingNote(this.id)
        }
    }
}