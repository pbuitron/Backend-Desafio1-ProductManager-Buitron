class ProductManager {
  constructor() {
    this.products = [];
  }
  addProduct(title, description, price, thumbnail, code, stock,) {
    

    this.products.forEach(
      (producto) => {
        if (producto.code === code)
          console.error('El código de producto ya esta en uso')
      }
    )
    
    const createId = this.products.length+1;

    const createLista  ={
    id : createId,
    title,
    description,
    price: parseFloat(price),
    thumbnail,
    code,
    stock,

    }

    this.products.push(createLista)
    return createId

  }
  getProducts() {
    return this.products
  }

  getProductById(idProducto) {
    let foundProduct = null??'Not Found';
    this.products.forEach((producto) => {
      if (producto.id === idProducto) {
        foundProduct = producto;
      }
    });
    return foundProduct;
  }
}


  // Crear una instancia de ProductManager
  const productManager = new ProductManager();
  
  // Obtener los productos (debería estar vacío)
  console.log(productManager.getProducts()); // []
  
  // Agregar un producto
  const productId0 = productManager.addProduct(
    "Probando Producto Nuevo",
    "Este es un producto prueba",
    200,
    "/imagen0.jpg",
    "abc123",
    25
  );
  

  const productId1 = productManager.addProduct(
    "Probando Producto Nuevo1",
    "Este es un producto prueba",
    2300,
    "/imagen1.jpg",
    "abc124",
    25
  );
  console.log("ID del nuevo producto:", productId1);
  
  // Obtener los productos nuevamente (debería incluir el producto recién agregado)
  console.log(productManager.getProducts());
  
  // Intentar agregar un producto con el mismo código (debería lanzar un error)
  try {
    productManager.addProduct(
      "producto repetido",
      "Este producto tiene un código repetido",
      300,
      "Sin imagen",
      "abc123",
      10
    );
  } catch (error) {
    console.error(error.message);
  }
  
  // Obtener un producto por su ID (debería encontrarlo)
  const product = productManager.getProductById(2);
  console.log("Producto encontrado:", product);
