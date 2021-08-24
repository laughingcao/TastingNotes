class TastingNoteService{

    constructor(endpoint){
        this.endpoint = endpoint
    }

    getTastingNotes(){
        fetch(`${this.endpoint}/tasting_notes`)
        .then(resp => resp.json())
        .then(tastingNotes => {
               
        }) 
    }
}