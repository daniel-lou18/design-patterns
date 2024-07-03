const jsDev_prototype = require("./jsDev_prototype");

const daniel = jsDev_prototype.clone();
daniel.name = "Daniel";

jsDev_prototype.addSkill("TypeScript");

const lou = jsDev_prototype.clone();
lou.name = "Lou";

try {
  lou.name = 5;
} catch (err) {
  console.error(err);
}

try {
  lou.name = "X";
} catch (err) {
  console.error(err);
}

lou.logSkills();
daniel.logSkills();
