class TastingNote {

    static all = []
    // static tastingNoteContainer = document.getElementById("tasting-notes-container")
    // static tastingNoteForm = document.getElementById("tasting-note-form-container")

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
        <strong>${this.tasting_note}</strong>
        <button>X</button>
        `
        return this.element
    }

    slapOnDom(){
        TastingNote.tastingNoteContainer.append(this.tastingNoteHTML())
    }

    getTastingNote(){
        return this.tastingNoteHTML()
    }

    static renderTastingNoteForm(){
        TastingNote.tastingNoteForm.innerHTML += `
        <form id="new-tastingNote-form">
            Add a new tasting note:
            <input type="text" id="tasting_note">
            <input type="submit" id="create">
        </form>
        `
    }

    handleClick = () => {
        if (event.target.innerText === 'X'){
            this.element.remove()
            tastingNoteService.deleteTastingNote(this.id)
        }
    }
}