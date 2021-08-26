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
            tasting_note: document.getElementById('tasting_note').value,
            spirit_id: document.getElementById('spirit_id').value
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

    deleteTastingNote(id){
        fetch(`${this.endpoint}/tasting_note/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(resp => resp.json())
        .then(json => alert(json.message))
    }
}