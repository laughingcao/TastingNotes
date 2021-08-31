class TastingNoteService{

    constructor(endpoint){
        this.endpoint = endpoint
    }

    getTastingNotes(spirit_id, callback){
        fetch(`${this.endpoint}/notes/${spirit_id}`)
        .then(resp => resp.json())
        .then(tastingNotes => {
            let notes = [];
            for (const tastingNote of tastingNotes) {
                const t = new TastingNote(tastingNote)
                notes.push(t.getTastingNote())
            }
            callback(notes)
        })
    }

    createTastingNote(spirit_id){
        event.preventDefault()
        const tastingNote = {
            tasting_note: document.getElementById('tasting-note-name').value,
            spirit_id: document.getElementById('block-spirit.data-id').value
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
            t.slapOnDom()
        })
    }

    deleteTastingNote(id){
        fetch(`${this.endpoint}/tasting_notes/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(resp => resp.json())
        .then(json => alert(json.message))
    }
}