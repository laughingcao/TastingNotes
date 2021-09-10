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
        let newSpiritForm = document.getElementById('new-spirit-form');
        let formData = new FormData(newSpiritForm);
        const object = {};
        formData.forEach((value, key) => object[key] = value);
        const json = JSON.stringify(object);

        const configObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: json
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