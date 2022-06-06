const pokémon = Object.freeze([
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
]);
// const bListPkmn = pokémon.filter( p => p.name[0] === "B" );
// bListPkmn.map(p=>console.log(p.name))

// const pkmnIds = pokémon.map( p => p.id )
// console.log(pkmnIds)
console.log(">>>>>>>>>>>>#1")
const bListPkmn1 = pokémon.filter( p => p.id %3== 0 );
bListPkmn1.map(p =>console.log(p.id))
console.log(">>>>>>>>>>>>#2")
const bListPkmn2 = pokémon.filter( p => p.types[0] ==="fire" );
bListPkmn2.map(p=>console.log(p.id))
console.log(">>>>>>>>>>>>#3")
const bListPkmn3 = pokémon.filter(p=>p.types[1]!=null)
bListPkmn3.map(p=>console.log(p.id))
console.log(">>>>>>>>>>>>#4")
const bListPkmn4 = pokémon.filter(p=>p.name!=null)
bListPkmn4.map(p=>console.log(p.name))
console.log(">>>>>>>>>>>>#5")
const bListPkmn5 = pokémon.filter(p=>p.id>99)
bListPkmn5.map(p=>console.log(p.name))
console.log(">>>>>>>>>>>>#6")
const bListPkmn6 = pokémon.filter(p=>p.types[0]==="poison").filter(p=>p.types.length=1)
bListPkmn6.map(p=>console.log(p.name))
console.log(">>>>>>>>>>>>#7")
const bListPkmn7 = pokémon.filter(p=>p.types[1]==='flying')
bListPkmn7.map(p=>console.log(p.types[0]))
console.log(">>>>>>>>>>>>#8")
const bListPkmn8 = pokémon.filter(p=>p.types[0]==='normal')
bListPkmn8.map(p=>console.log(bListPkmn8.length))