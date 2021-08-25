class TastingNoteService{

    constructor(endpoint){
        this.endpoint = endpoint
    }

    getTastingNotes(){
        fetch(`${this.endpoint}/tasting_notes`)
        .then(resp => resp.json())
        .then(tastingNotes => {
            for (const tastingNote of tastingNotes) {
                const t = new TastingNote(tastingNote)
                t.slapOnDom()
            }
        }) 
    }

    createTastingNote(){
        const tastingNote = {
            tasting_note: document.getElementById('tasting_note').value
            spirit_id: 1
        }
    }
}