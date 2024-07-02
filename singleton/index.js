const Shop = require("./Shop");
const Customer = require("./Customer");

const daniel = new Customer("Daniel");
const lou = new Customer("Lou");
const shop = Shop.getInstance();

daniel.purchaseItem(1);
daniel.purchaseItem(1);
lou.purchaseItem(1);
lou.purchaseItem(1);
daniel.purchaseItem(2);
lou.purchaseItem(1);
lou.purchaseItem(1);

shop.printStock();
