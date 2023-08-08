/*
import {promises as fs} from 'fs'

const addProduct = async(producto)=> {
    
    const productosData= JSON.parse(await fs.readFile('./product.txt','utf-8'))
    console.log('Productos:',productosData);

    if (productosData.find(product => product.id == producto.id)) {
        return "El id ya existe"
    }
    productosData.push(producto)
    //console.log(productosData)

    await fs.writeFile('./product.txt', JSON.stringify(productosData))
}

const getProducts = async()=>{
    const productosData= JSON.parse(await fs.readFile('./product.txt','utf-8'))
    console.log('Consulta de Productos:',productosData )
}

const getProductsById = async(id)=>{
    const productosData= JSON.parse(await fs.readFile('./product.txt','utf-8'))
   const producto = productosData.find(product => product.id == id)
   if (producto) {
        console.log (producto)
   }else {
    console.log("Producto no existe")
}
}

const updateProduct = async(id, {nombre,precio,cantidad})=>{
    const productosData= JSON.parse(await fs.readFile('./product.txt','utf-8'))
    const indice = productosData.findIndex(prod => prod.id === id)
    if (indice!== -1){
        productosData[indice].nombre =nombre
        productosData[indice].precio =precio
        productosData[indice].cantidad=cantidad
         

        await fs.writeFile('./product.txt', JSON.stringify(productosData))
        console.log(productosData)

    }else {
        console.log("Producto no encontrado")
    }
}

const deleteProducts = async(id) => {
    const productosData= JSON.parse(await fs.readFile('./product.txt','utf-8'))
    const indexToDelete = productosData.filter(prod => prod.id != id)
    if (indexToDelete) {
        await fs.writeFile('./producto',JSON.stringify(indexToDelete))
        console.log("Producto eliminado")
    }else {
        console.log("Producto ya se elimino anteriormente")
    }
}


const product = {
nombre: "Vino Tinto",
precio: 25,
cantidad:30,
id: 1
}

const product1 = {
    nombre: "Vino Mistela",
    precio: 28,
    cantidad:30,
    id: 2
    }




//addProduct(product)
//addProduct(product1)

//getProducts()
//getProductsById(2)
//updateProduct(2,{nombre:"Mango",precio:12,cantidad:6,})
//deleteProducts(2)

*/
class Productos {
    constructor(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
}

const objeto1 = new Productos("Paul", "Buitron", 35);
const objeto2 = new Productos("Paul", "Buitron", 40);
const objeto3 = new Productos("Paul", "Buitron", );

const array = [];
console.log(array)
const validarCampo = (objeto) => {
    const campoRequerido = ['nombre', 'apellido', 'edad']
    return campoRequerido.some((campo) => (objeto[campo] === undefined || objeto[campo] === null || objeto[campo]=== ''))
}
 console.log(!validarCampo(objeto3))

try {
    if (!validarCampo(objeto3)) {
       
        array.push(objeto3)
        console.log("Producto añadido")
    } else {
        console.log("falta rellenar algun campo")
    }

} catch (error) {
    console.log("error al intentar", error.message)
}

console.log(array)