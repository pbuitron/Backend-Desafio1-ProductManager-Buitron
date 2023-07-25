class ProductManager {
  constructor() {
    this.products = [];
  }
  /*
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

  }*/
/*
  addProduct(title, description, price, thumbnail, code, stock) {
    if (!title || !description || !price || !thumbnail || !code || !stock) {
      console.error('Todos los campos del producto son obligatorios.');
      return;
    }

    const codeInUse = this.products.some((product) => product.code === code);

    if (codeInUse) {
      console.error('El código de producto ya está en uso');
      return;
    }

    const createId = this.products.length + 1;

    const createLista = {
      id: createId,
      title,
      description,
      price: parseFloat(price),
      thumbnail,
      code,
      stock,
    };

    this.products.push(createLista);
    return createId;
  }*/

  addProduct(title, description, price, thumbnail, code, stock) {
    const { products } = this;

    const codeInUse = products.some((product) => product.code === code);

    if (codeInUse) {
      console.error('El código de producto ya está en uso');
      return;
    }

    if (!title || !description || !price || !thumbnail || !code || !stock) {
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
    const foundProduct = products.find((product) => product.id === idProducto);
    return foundProduct ?? 'Not Found';
  }
  /*
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
  }*/
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
    "Probando Producto Nuevo",
    "Este es un producto prueba",
    200,
    "/imagen0.jpg",
    "abc128",
    25
  );

  const productId2 = productManager.addProduct(
    "Probando Producto Nuevo",
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
  const product = productManager.getProductById(productId1);
  console.log("Producto encontrado:", product);
