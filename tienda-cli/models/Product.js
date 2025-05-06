// models/Product.js
export class Product {
    constructor(title, price, category) {
      this.title = title;
      this.price = price;
      this.category = category;
      this.description = 'Default description';
      this.image = 'https://i.pravatar.cc';
    }
  }
  