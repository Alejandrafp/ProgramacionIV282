const fs = require('fs')
var vehiculos = JSON.parse(fs.readFileSync('data.json'))
console.log(vehiculos);

//Recorrer un arreglo de la forma tradicional
for(let i=0;i<5;i++){
    console.log(`Vehiculo numero ${i+1}:${ vehiculos[i].marca}`)

}
//Recorrrer el arrglo usando la funcion foreach de tipo flecha
vehiculos.forEach(item => {
    console.log(item)
});

//Funcion en Javascript
vehiculos.forEach(function(item){
    console.log(item)
});

console.log(vehiculos)
console.log('---------------------------------------')
//Agregar datos al arreglo
vehiculos.push({'marca':'Kia', 'color': 'negro', 'year':2022})
console.log(vehiculos)

//Guardar arreglo

fs.writeFileSync('data.json',JSON.stringify(vehiculos))

//Hacerle edicion de un elemento de data