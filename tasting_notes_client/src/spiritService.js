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
}