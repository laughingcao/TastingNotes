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

const selectElement = document.querySelector('.spirits')
selectElement.addEventListener('change', Spirit.getSortedSpirits())