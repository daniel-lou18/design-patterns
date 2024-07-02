const jsDev_prototype = require("./jsDev_prototype");

const daniel = jsDev_prototype.clone();
daniel.name = "Daniel";

const lou = jsDev_prototype.clone();

// try {
//   lou.name = 5;
// } catch (err) {
//   console.error(err);
// }

// try {
//   lou.name = "X";
// } catch (err) {
//   console.error(err);
// }

lou.name = "Lou";
lou.addSkill("SQL");

lou.logSkills();
daniel.logSkills();
