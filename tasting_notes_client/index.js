const base_url = "http://127.0.0.1:3000"
const tastingNoteService = new TastingNoteService(base_url)
const spiritService = new SpiritService(base_url)

TastingNote.tastingNoteForm.addEventListener('submit', handleSubmit)

spiritService.getSpirits()
tastingNoteService.getTastingNotes()
TastingNote.renderForm()

function handleSubmit(){
    event.preventDefault()
    tastingNoteService.createTastingNote()
    event.target.reset()
}