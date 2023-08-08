'use strict';

let usuario1 = {
    nombre: `Paul`, apellido: `Buitron`, mascotas: [
        { nombre: `Luna`, animal: `Gato`, crías: [] },
        { nombre: `Rocky`, animal: `Perro`, crías: [] },
    ]
}
//console.log(usuario1)

const array = [1,2,3,4,5,6,7,8,9]
const array2 =[10,11,12,13,14,15,16]

const newArray = [...array, ...array2]
const newArray2 = newArray

//console.log(newArray2)
const arrayNuevo = structuredClone(newArray)
arrayNuevo[2]=878
//console.log(arrayNuevo)

let user1 = { nombre: "Pedro", apellido: "Parker" }
user1 = null //Eliminar la referencia a memoria
const user = { nombre: "Pedro", apellido: "Parker" }
user.nombre = null
user.apellido = null
//user = null
console.log(user1)
console.log(user)





