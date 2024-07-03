const path = require("path");

class FS_Proxy {
  constructor(realFs) {
    this.fs = realFs;
  }
  readFile(path, encoding, callback) {
    if (!path.match(/.md$|.MD$/)) {
      return callback(new Error("Can only read Markdown (.md) files"));
    } else {
      this.fs.readFile(path, encoding, (error, content) => {
        if (error) {
          console.error(error);
          return callback(error);
        } else {
          return callback(null, content);
        }
      });
    }
  }
}

module.exports = FS_Proxy;
