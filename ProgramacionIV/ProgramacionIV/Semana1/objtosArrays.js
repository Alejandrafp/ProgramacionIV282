let ObjetoPersona ={
    id: 123456789,
    nombre:'Maria Funez',
    ciudad:'Cortes'

}

let ObjetoPersona2 ={
    id: 98273681,
    nombre:'Carlos Altamirano',
    ciudad:'SPS'

}

let arraynumeros = [1,24,54,32]
let arraypersonas = [{ id: 98273681,
    nombre:'Carlos Altamirano',
    ciudad:'SPS'},
    objetopersonal
]

arraypersonas.push(ObjetoPersona2)
arraypersonas.push(50)
let resultadofiltro = arraypersonas.find(personas => personas.ciudad === 'SPS')

console.log(arraynumeros)