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

    createTastingNote(){
        let newTastingNoteForm = document.getElementById('new-tastingNote-form');
        let formData = new FormData(newTastingNoteForm);
        var object = {};
        formData.forEach((value, key) => object[key] = value);
        var json = JSON.stringify(object);

        const configObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: json
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