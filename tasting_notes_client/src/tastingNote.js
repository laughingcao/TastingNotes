class TastingNote {

    static all = []
    static tastingNoteContainer = document.getElementById("tastingnotes-contrainer")

    constructor({id, tasting_note, spirit_id}) {
        this.id = id
        this.tasting_note = tasting_note
        this.spirit_id = spirit_id

        this.element = document.createElement('li')
        this.element.dataset.id = this.id
        this.element.id = `tastingNote-${this.id}`

        TastingNote.all.push(this)
    }

    tastingNoteHTML(){
        this.element.innerHTML += `
        <div>
            <h3>${this.tasting_note}</h3>
        </div>
        `
        return this.element
    }

    slapOnDom(){
        TastingNote.tastingNoteContainer.append(this.tastingNoteHTML())
    }
}