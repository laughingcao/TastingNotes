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

        const configObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(tastingNote)
        }

        fetch(`${this.endpoint}/tasting_notes`, configObj)
        .then(resp => resp.json())
        .then(tastingNote => {
            const t = new TastingNote(tastingNote)
            t.slapOnDom
        })
    }
}