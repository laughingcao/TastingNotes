class Spirit {

    static all = []
    static spiritContainer = document.getElementById("spirits-container")
    static spiritForm = document.getElementById("spirit-form-container")
    static sortButton = document.getElementById("sort-button")
 
    constructor({id, name, abv, origin, spirit}){
        this.id = id
        this.name = name
        this.abv = abv
        this.origin = origin
        this.spirit = spirit

        tastingNoteService.getTastingNotes(id, this.updateTastingNotes)

        this.element = document.createElement('li')
        this.element.dataset.id = this.id
        this.element.id = `spirit-${this.id}`
        this.element.addEventListener('click', this.handleClick)

        Spirit.all.push(this)
    }
 
    updateTastingNotes = notes => {
        const notesTarget = this.element.querySelector(".spirit-notes-list")
        if (notesTarget) {
            notesTarget.innerHTML = '';
            for (const note of notes) {
                notesTarget.appendChild(note);
            }
        }
    }

    spiritHTML(){
        const body = document.createElement('div');
        body.classList.add('block-spirit');
        body.innerHTML = `
            <div class="spirit-info">
                <h3>name: ${this.name}</h3>
                <h4>spirit: ${this.spirit}</h4>
                <h4>abv: ${this.abv} % </h4> 
                <h4>origin: ${this.origin}</h4>
                <p>
                    <button>Delete</button>
                </p>
            </div>
            <div class="spirit-notes">
                <h4>Tasting notes:</h4>
                <ul class="spirit-notes-list"></ul>
            </div>
        `;

        const form = document.createElement('form');
        form.setAttribute('method', 'post');
        form.setAttribute('action', `${base_url}/tasting_notes`);
        form.innerHTML = `
            Add a new tasting note to ${this.name}:
            <input type="text" name="tasting_note">
            <input type="hidden" name="spirit_id" value=${this.id}>
            <input type="submit">
        `;
        form.addEventListener('submit', e => {
            e.preventDefault();
            tastingNoteService.createTastingNote(form);
        });

        this.element.appendChild(body);
        this.element.appendChild(form);

        return this.element;
    }

    slapOnDom(){
        Spirit.spiritContainer.append(this.spiritHTML())
    }

    static renderSpiritForm(){
        Spirit.spiritForm.innerHTML += `
        <form id="new-spirit-form">
            Add a New Bottle:
            <br>
            Name:<input type="text" name="name">
            <br>
            Spirit:<input type="text" name="spirit">
            <br>
            Abv:<input type="number" name="abv">
            <br>
            Origin:<input type="text" name="origin">
            <br>
            <input type="submit">
        <form>
        `
    }

    sortSpirits() {
        const selectElement = document.querySelector('.spirits')
        selectElement.addEventListener('change', getSortedSpirits())
    }

    getSortedSpirits(){
        fetch(`${this.endpoint}/spirits`)
        .then(resp => resp.json())
        .then(spirits => {
            for (const spirit of spirits) {
                const s = new Spirit(spirit).sort((a, b) => (a.name > b.name ? 1 : -1 ))
                s.slapOnDom()
            }
        })
    }

    handleClick = () => {
        if (event.target.innerText === 'Delete'){
            this.element.remove()
            spiritService.deleteSpirit(this.id)
        }
    }
}