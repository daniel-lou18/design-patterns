const path = require("path");
const FS_Proxy = require("./FS_Proxy");

const fs = new FS_Proxy(require("fs"));

const readmeMdPath = path.join(__dirname, "Readme.md");
const readmeTxtPath = path.join(__dirname, "Readme.txt");

function resultHandler(err, data) {
  if (err) {
    console.error(err);
    process.exit(0);
  } else {
    console.log("Data retrieved: ");
    console.log(data);
  }
}

fs.readFile(readmeMdPath, "utf-8", resultHandler);
// fs.readFile(readmeTxtPath, "utf-8", resultHandler);
