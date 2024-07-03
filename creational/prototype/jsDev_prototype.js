const Developer = require("./Developer");

const javasriptDeveloper = new Developer();
javasriptDeveloper._isAdmin = true;
javasriptDeveloper.addSkill("React");
javasriptDeveloper.addSkill("Next JS");
javasriptDeveloper.addSkill("Node.js");
javasriptDeveloper.addSkill("Nest JS");

module.exports = javasriptDeveloper;
