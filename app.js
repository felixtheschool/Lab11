// Inventory Management App
class Product {}
  getTotalValue() { return this.price * this.quantity; }
  toString() { return `Product: ${this.name}, Price: $${this.price.toFixed(2)}, Quantity: ${this.quantity}`; }
class PerishableProduct extends Product {}
  toString() { return `Product: ${this.name}, Price: $${this.price.toFixed(2)}, Quantity: ${this.quantity}, Expiration Date: ${this.expirationDate}`; }
const milk = new PerishableProduct('Milk', 1.5, 10, '2024-12-31');
const apples = new PerishableProduct('Apples', 2.0, 30, '2025-01-15');
// Test static discount: Product.applyDiscount([...], 0.15)
class Store { constructor() { this.inventory = []; } }
const bread = new Product('Bread', 2.5, 20);
const cheese = new Product('Cheese', 4.0, 15);
const chocolate = new Product('Chocolate', 3.0, 25);
const store = new Store();
store.addProduct(milk);
store.addProduct(apples);
store.addProduct(bread);
store.addProduct(cheese);
store.addProduct(chocolate);
console.log('Before discount:', store.getInventoryValue());
Product.applyDiscount(store.inventory, 0.15);
console.log('After 15% discount:', store.getInventoryValue());
console.log('Search for Milk:', store.findProductByName('Milk')?.toString());
