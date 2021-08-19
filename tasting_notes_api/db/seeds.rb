# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

buffalo_trace = Spirit.create(name:'Buffalo Trace', origin:'USA', abv: '45', spirit: 'Bourbon' )
monkey47 = Spirit.create(name:'Monkey 47', origin:'Germany', abv: '47', spirit: 'Gin' )
tapatio = Spirit.create(name:'Tapatio Blanco', origin:'Mexico', abv: '40', spirit: 'tequila' )

TastingNote.create(tasting_note: 'Orange Peels')
TastingNote.create(tasting_note: 'Vanilla')
TastingNote.create(tasting_note: 'Cherry')