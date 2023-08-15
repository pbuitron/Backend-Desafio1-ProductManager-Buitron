import { promises as fs } from 'fs';
import { v4 as uuidv4 } from 'uuid';

export class CartManager {
  constructor(filePath) {
    this.filePath = filePath;
    this.carts = [];
  }

  async createCart() {
    const newCart = {
      id: uuidv4(),
      products: []
    };
    this.carts.push(newCart);
    await this.saveCartsToFile();
    return newCart;
  }

  //Agrego metodo para ver los carritos creados 
  async getCarts() {
    try {
        const cartsData = await fs.readFile(this.filePath, 'utf-8');
        return JSON.parse(cartsData);
    } catch (error) {
        return [];
    }
}

  async getCartById(id) {
    await this.loadCartsFromFile();
    const cart = this.carts.find(cart => cart.id === id);
    return cart;
  }
  async addProductToCart(cartId, productId) {
    await this.loadCartsFromFile();
  
    const cartIndex = this.carts.findIndex(cart => cart.id === cartId);
    if (cartIndex !== -1) {
      const cart = this.carts[cartIndex];
      const existingProductIndex = cart.products.findIndex(product => product.product === productId);
      
      if (existingProductIndex !== -1) {
        cart.products[existingProductIndex].quantity += 1;
      } else {
        cart.products.push({ product: productId, quantity: 1 });
      }
  
      await this.saveCartsToFile();
      console.log('Producto agregado al carrito correctamente:', cart.products);
      return true;
    } else {
      console.error('Carrito no encontrado.');
      return false;
    }
  }

   //Agrego metodo para borrar los carritos creados por Id
  async deleteCart(id) {
    await this.loadCartsFromFile();
    
    const initialCartCount = this.carts.length;
    this.carts = this.carts.filter(cart => cart.id !== id);

    if (this.carts.length === initialCartCount) {
      console.error('Carrito no encontrado.');
      return false;
    } else {
      await this.saveCartsToFile();
      console.log('Carrito eliminado correctamente.');
      return true;
    }
  }

  async loadCartsFromFile() {
    try {
      const cartsData = await fs.readFile(this.filePath, 'utf-8');
      this.carts = JSON.parse(cartsData);
    } catch (error) {
      this.carts = [];
    }
  }

  async saveCartsToFile() {
    try {
      await fs.writeFile(this.filePath, JSON.stringify(this.carts, null, 2));
    } catch (error) {
      console.error('Error al guardar los carritos:', error);
    }
  }
}