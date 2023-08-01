import { promises as fs } from 'fs'

class ProductManager {
  constructor() {
    this.path = "./product.txt"
  }

  // Add Product function
  /*addProduct = async (product) => {
    const products = JSON.parse(await fs.readFile(this.path, 'utf-8'))

    if (products.find(product => product.id == products.id)) {
      return "El id ya existe"
  }

    if (product.title === "" || product.description === "" || product.price === "" || product.thumbnail === "" || product.code === "" || product.stock < 0) {
      console.log("Some fields are empty, please complete all fields")
      return
    }else {
      products.push(product)
    }

    await fs.writeFile(this.path, JSON.stringify(products))
  }*/

  addProduct = async (product) => {
    const products = JSON.parse(await fs.readFile(this.path, 'utf-8'))
  
    if (products.find(prod => prod.id == product.id)) {
      return "El id ya existe";
    }
  
    if (product.title === "" || product.description === "" || product.price === "" || product.thumbnail === "" || product.code === "" || product.stock < 0) {
      console.log("Some fields are empty, please complete all fields");
      return;
    } else {
      products.push(product)
    }
  
    await fs.writeFile(this.path, JSON.stringify(products));
  }
  



  // Get Products function
  getProducts = async () => {
    const products = JSON.parse(await fs.readFile(this.path, 'utf-8'))
    console.log(products)
  }

  // Get Product By ID function
  getProductById = async (id) => {
    const products = JSON.parse(await fs.readFile(this.path, 'utf-8'))
    const product = products.find(prod => prod.id === id)

    product ? console.log(product) : console.log(`Product with ID: ${id} does not exist`)
  }

  // Update Product function
  updateProduct = async (id, { title, description, price, thumbnail, code, stock }) => {
    const products = JSON.parse(await fs.readFile(this.path, 'utf-8'))
    const index = products.findIndex(prod => prod.id === id)

    if (index !== -1) {
      const product = products[index]
      product.title = title 
      product.description = description
      product.price = price 
      product.thumbnail = thumbnail
      product.code = code 
      product.stock = stock

      await fs.writeFile(this.path, JSON.stringify(products))
    }

    else {
      console.log(`Product with ID: ${id} not found`)
    }
  }

  // Delete Product function
  deleteProduct = async (id) => {
    const products = JSON.parse(await fs.readFile(this.path, 'utf-8'))
    const prods = products.filter(prod => prod.id != id)

    await fs.writeFile(this.path, JSON.stringify(prods))
  }
}

/*class Product {
  constructor(title, description, price, thumbnail, code, stock) {
    this.title = title
    this.description = description
    this.price = price
    this.thumbnail = thumbnail
    this.code = code
    this.stock = stock
    this.id = Product.incrementID()
  }

  static incrementID() {
    this.idIncrement = this.idIncrement ? this.idIncrement + 1 : 1
    return this.idIncrement
  }
}*/

class Product {
  static lastId = 0;

  constructor(title, description, price, thumbnail, code, stock) {
    this.title = title;
    this.description = description;
    this.price = price;
    this.thumbnail = thumbnail;
    this.code = code;
    this.stock = stock;
    this.id = ++Product.lastId;
  }
}

const product1 = new Product("producto de Prueba", "This is a Test Product 1", 200, "Image 1", "abc123", 25)
const product2 = new Product("producto de Prueba", "This is a Test Product 2", 400, "Image 2", "def456", 50)
const product3 = new Product("producto de Prueba", "This is a Test Product 3", 600, "Image 3", "ghi789", 75)

const productManager = new ProductManager()



//productManager.addProduct(product1)
//productManager.addProduct(product2)
//productManager.addProduct(product3)

 productManager.getProducts()

// productManager.getProductById(1)
// productManager.getProductById(3)

// productManager.updateProduct(1, { title: "Test Product updated", description: "This is a Test Product Updated" })
// productManager.updateProduct(5, { title: "Test Product updated", description: "This is a Test Product Updated" })

//productManager.deleteProduct(3)