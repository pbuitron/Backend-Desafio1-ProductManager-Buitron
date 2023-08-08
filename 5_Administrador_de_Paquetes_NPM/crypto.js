/*
Proceso de Encriptación:
1. Algoritmo de encriptación
2. Key o clave
3. Iv o Vector Inicial
*/

/* // Primero consultamos mediante un console log la cantidad de algoritmos y elegimos uno a nuestro criterio, en este caso elijo aes-256-ecb
    //luego creamos nuevas variables y le seleccionamos crypto.randomByte() donde pondremos la cantidad de bytes en base 2 () tanto para la
    //key y para el vector
console.log(crypto.getCiphers())
*/



import * as cripto from 'crypto'

console.log(cripto.getCiphers())

const algoritmo = 'aes-256-cbc'
const key = cripto.randomBytes(32) // 32 bytes para una clave AES-256
const iv = cripto.randomBytes(16)

console.log(algoritmo)
console.log(key.toString('hex'))
console.log(iv.toString('hex'))

// Encriptar datos

const encriptar = (password) => {
    const cipher = cripto.createCipheriv(algoritmo, key, iv)
    let passwordEncriptada = cipher.update(password, 'utf-8', 'hex')
    passwordEncriptada += cipher.final('hex')
    console.log(passwordEncriptada)
    return passwordEncriptada
}

const desencriptar = (passwordEncriptada) => {
    const decipher = cripto.createDecipheriv(algoritmo, key, iv)
    let passwordDesencriptado = decipher.update(passwordEncriptada, 'hex', 'utf-8')
    passwordDesencriptado += decipher.final('utf-8')
    console.log(passwordDesencriptado)
}

const password = encriptar("Bitchgetinmycar1!")

desencriptar(password)

/*Aquí, la variable passwordEncriptada se inicializa con el resultado parcial de la encriptación que se obtiene
 mediante cipher.update(...), que toma la cadena password en formato 'utf-8' y la encripta en formato 'hex'. Luego,
 usamos el operador += para agregar el resultado final de la encriptación, que se obtiene mediante cipher.final('hex'),
 al resultado parcial almacenado en passwordEncriptada. Esto es necesario porque la encriptación puede dividirse en 
 múltiples bloques, y el método update() se utiliza para procesar cada bloque parcial mientras final() se usa para el
  último bloque.*/


