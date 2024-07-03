const { writeFile, existsSync, readFileSync, unlink } = require("fs");

class LocalStorage {
  constructor() {
    if (existsSync("localstorage.json")) {
      const text = readFileSync("localstorage.json");
      this.items = JSON.parse(text);
    } else {
      this.items = {};
    }
  }

  getItem(key) {
    return this.items[key];
  }

  setItem(key, value) {
    this.items[key] = value;
    writeFile("localstorage.json", JSON.stringify(this.items), (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log(`${key} successfully stored!`);
      }
    });
  }

  clear() {
    unlink("localstorage.json", (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log("localStorage successfully cleared");
      }
    });
  }
}

module.exports = new LocalStorage();
