const Shop = require("./Shop");

const shop = Shop.getInstance();

class Customer {
  constructor(name) {
    this.name = name;
  }

  purchaseItem(itemId) {
    shop.buyItem(itemId);
  }
}

module.exports = Customer;
