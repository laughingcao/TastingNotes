const base_url = "http://127.0.0.1:3000"
const tastingNoteService = new TastingNoteService(base_url)
const spiritService = new SpiritService(base_url)

Spirit.spiritForm.addEventListener('submit', handleSpiritSubmit)
// TastingNote.tastingNoteForm.addEventListener('submit', handleTastingNoteSubmit)

spiritService.getSpirits()
Spirit.renderSpiritForm()

// tastingNoteService.getTastingNotes()
// TastingNote.renderTastingNoteForm()

function handleTastingNoteSubmit(e){
    e.preventDefault()
    tastingNoteService.createTastingNote()
    e.target.reset()
}

function handleSpiritSubmit(e){
    e.preventDefault()
    spiritService.createSpirit()
    e.target.reset()
}