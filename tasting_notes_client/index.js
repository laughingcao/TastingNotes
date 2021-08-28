const base_url = "http://127.0.0.1:3000"
const tastingNoteService = new TastingNoteService(base_url)
const spiritService = new SpiritService(base_url)

TastingNote.tastingNoteForm.addEventListener('submit', handleTastingNoteSubmit)
Spirit.spiritForm.addEventListener('submit', handleSpiritSubmit)

spiritService.getSpirits()
Spirit.renderSpiritForm()

tastingNoteService.getTastingNotes()
TastingNote.renderTastingNoteForm()

function handleTastingNoteSubmit(){
    event.preventDefault()
    tastingNoteService.createTastingNote()
    event.target.reset()
}

function handleSpiritSubmit(){
    event.preventDefault()
    Spirit.createSpirit()
    event.target.reset()
}