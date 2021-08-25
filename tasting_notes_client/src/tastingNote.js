class TastingNote {

    static all = []
    static 

    constructor(id, tasting_note, spirit_id) {
        this.id = id
        this.tasting_note = tasting_note
        this.spirit_id

        this.element = document.createElement('li')
        this.element.dataset.id = this.id
        this.element.id = `tastingNote-${this.id}`

        TastingNote.all.push(this)
    }
}