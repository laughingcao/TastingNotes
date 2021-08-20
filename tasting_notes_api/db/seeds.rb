# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

spirits = Spirit.create([
        { name:'Buffalo Trace', origin:'USA', abv: '45', spirit: 'Bourbon' },
        { name:'Monkey 47', origin:'Germany', abv: '47', spirit: 'Gin' },
        { name:'Tapatio Blanco', origin:'Mexico', abv: '40', spirit: 'tequila' }
])

tasting_notes = TastingNote.create([
    {tasting_note: 'Orange Peels' },
    {tasting_note: 'Vanilla' },
    {tasting_note: 'Cherry' }
    ])