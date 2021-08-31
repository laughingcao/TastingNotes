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

    createTastingNote(form){
        // serialize and send form data for #create
        let formData = new FormData(form);
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
        // find the container where the new Tasting Note will go
        const container = form.previousElementSibling.querySelector('.spirit-notes-list');

        // hit the api; create the Tasting Note; add to dom
        fetch(`${this.endpoint}/tasting_notes`, configObj)
        .then(resp => resp.json())
        .then(tasting_note => {
            const t = new TastingNote(tasting_note)
            t.slapOnDom(container)
            form.reset();
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