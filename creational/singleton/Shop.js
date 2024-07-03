class Shop {
  constructor() {
    this.items = [
      { id: 1, name: "pants", quantity: 5 },
      { id: 2, name: "shirt", quantity: 5 },
      { id: 3, name: "shoes", quantity: 5 },
    ];
  }

  buyItem(itemId) {
    const item = this.items.find((item) => item.id === itemId);

    if (item) {
      if (item.quantity < 1) {
        console.log("Out of stock");
        return;
      }
      item.quantity -= 1;
    } else {
      console.log("Item not found");
    }
  }

  printStock() {
    this.items.forEach((item) => console.log(item.name + ": " + item.quantity));
  }
}

class Singleton {
  static instance = null;

  constructor() {
    throw Error("Please call getInstance() instead of creating a new instance");
  }

  static getInstance() {
    if (!Singleton.instance) {
      Singleton.instance = new Shop();
    }
    return Singleton.instance;
  }
}

module.exports = Singleton;
