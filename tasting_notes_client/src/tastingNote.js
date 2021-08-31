class TastingNote {

    static all = []

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
        `;
        return this.element
    }

    slapOnDom(container){
        container.append(this.tastingNoteHTML())
    }

    getTastingNote(){
        return this.tastingNoteHTML()
    }
 
    handleClick = () => {
        if (event.target.innerText === 'X'){
            this.element.remove()
            tastingNoteService.deleteTastingNote(this.id)
        }
    }
}