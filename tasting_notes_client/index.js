const base_url = "http://127.0.0.1:3000"
const tastingNoteService = new TastingNoteService(base_url)
const spiritService = new SpiritService(base_url)

Spirit.spiritForm.addEventListener('submit', handleSpiritSubmit)
// TastingNote.tastingNoteForm.addEventListener('submit', handleTastingNoteSubmit)

spiritService.getSpirits()
Spirit.renderSpiritForm()

// tastingNoteService.getTastingNotes()
// TastingNote.renderTastingNoteForm()

function handleTastingNoteSubmit(){
    event.preventDefault()
    tastingNoteService.createTastingNote()
    event.target.reset()
}

function handleSpiritSubmit(){
    event.preventDefault()
    spiritService.createSpirit()
    event.target.reset()
}
// const BASE_URL = "http://127.0.0.1:3000/spirits"
// const container = document.getElementById('spirits-list')

// function renderSpirits(spirit) {
//     const div = document.createElement('div')
//     div.id = `spirit-card-${spirit.id}`

//     const header = document.createElement('h3')
//     header.textContent = `Name: ${spirit.name}`

//     const p = document.createElement('p')
//     p.id = `spirit-info-${spirit.id}`
//     p.textContent = `
//         Spirit: ${spirit.spirit} -
//         ABV: ${spirit.abv} %-
//         Origin: ${spirit.origin}
//     `
//     const t = document.getElementById('tasting-notes-container')

//     div.append(header,p,t)
//     container.appendChild(div)
// }

// function getSpirits(){
//     fetch(BASE_URL)
//     .then(resp => resp.json())
//     .then(spirits => {
//         spirits.forEach(renderSpirits)
//     })
// }

// function init(){
//     getSpirits()
// }

// init()