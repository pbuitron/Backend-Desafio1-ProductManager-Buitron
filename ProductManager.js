class ProductManager {
  constructor() {
    this.products = [];
  }
  addProduct(title, description, price, thumbnail, code, stock) {
    const { products } = this;

    const codeInUse = products.some((product) => product.code === code);

    if (codeInUse) {

      console.error('El código de producto ya está en uso');
      return;
    } else if (!title || !description || !price || !thumbnail || !code || !stock) {
      console.error('Todos los campos del producto son obligatorios.');
      return;
    }

    const createProduct = {
      id: products.length + 1,
      title,
      description,
      price: parseFloat(price),
      thumbnail,
      code,
      stock,
    };

    products.push(createProduct);
    return createProduct.id;
  }

  getProducts() {
    return this.products;
  }

  getProductById(idProducto) {
    const { products } = this;
    return products.find((product) => product.id === idProducto) || 'Not Found';
  }



}


// Crear una instancia de ProductManager
const productManager = new ProductManager();

// Agregar un producto
const productId0 = productManager.addProduct("Producto Prueba", "Este es un producto prueba", 200, "/imagen0.jpg", "abc123", 25);
const productId1 = productManager.addProduct("Producto Prueba", "Este es un producto prueba", 200, "/imagen0.jpg", "abc123", 25);
const productId2 = productManager.addProduct("Producto Prueba", "Este es un producto prueba", 200, "/imagen0.jpg", "abc123", 25);

// Obtener los productos nuevamente (debería incluir el producto recién agregado)
console.log(productManager.getProducts());

// Intentar agregar un producto con el mismo código (debería lanzar un error)
try {
  productManager.addProduct(
    "producto repetido",
    "Este producto tiene un código repetido",
    "precio repetido",
    "imagen repetida",
    "abc123",
    "stock repetido"
  );
} catch (error) {
  console.error(error.message);
}

// Obtener un producto por su ID (debería encontrarlo)
const product = productManager.getProductById(8);
console.log("Producto encontrado:", product);

