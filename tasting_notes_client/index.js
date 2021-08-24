const base_url = "http://127.0.0.1:3000"
const tastingNoteService = new TastingNoteService(base_url)

tastingNoteService.getTastingNotes()