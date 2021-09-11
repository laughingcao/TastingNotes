const base_url = "http://127.0.0.1:3000"
const tastingNoteService = new TastingNoteService(base_url)
const spiritService = new SpiritService(base_url)

Spirit.spiritForm.addEventListener('submit', handleSpiritSubmit)

spiritService.getSpirits()
Spirit.renderSpiritForm()

function handleSpiritSubmit(e){
    e.preventDefault()
    spiritService.createSpirit()
    e.target.reset()
}

document.getElementById('sort').onclick = function changeContent() {
        Spirit.spiritContainer.innerHTML = ""
        fetch("http://127.0.0.1:3000/spirits")
        .then(resp => resp.json())
        .then(spirits => {
            for (const spirit of spirits.sort((a, b) => (a.name > b.name ? 1 : -1 ))) {
                const s = new Spirit(spirit)
                s.slapOnDom()
            }
        })
    }