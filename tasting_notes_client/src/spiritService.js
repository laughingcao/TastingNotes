class SpiritService{

    constructor(endpoint){
        this.endpoint = endpoint
    }

    getSpirits(){
        fetch(`${this.endpoint}/spirits`)
        .then(resp => resp.json())
        .then(spirits => {
            for (const spirit of spirits) {
                const s = new Spirit(spirit)
                s.slapOnDom()
            }
        }) 
    }

    createSpirit(){
        const spirit = {
            name: document.getElementById('name').value,
            spirit: document.getElementById('spirit').value,
            abv: document.getElementById('abv').value,
            origin: document.getElementById('origin').value
        }

        const configObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(spirit)
        }

        fetch(`${this.endpoint}/spirits`, configObj)
        .then(resp => resp.json())
        .then(spirit => {
            const s = new Spirit(spirit)
            s.slapOnDom()
        })
    }

    deleteSpirit(id){
        fetch(`${this.endpoint}/spirits/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(resp => resp.json())
        .then(json => alert(json.message))
    }
}