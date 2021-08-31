# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Spirit.create([
        {name: "Buffalo Trace",        
        origin: "USA",
        abv: "45",
        spirit: "Bourbon"},
        {name: "Monkey 47",
        origin: "Germany",
        abv: "47",
        spirit: "Gin"},
        {name: "Tapatio Blanco",
        origin: "Mexico", 
        abv: "40", 
        spirit: "tequila"}
])

TastingNote.create(tasting_note: 'vanilla', spirit_id: '3')
TastingNote.create(tasting_note: 'cherry', spirit_id: '1')
TastingNote.create(tasting_note: 'orange', spirit_id: '2')
