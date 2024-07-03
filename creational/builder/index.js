const EmployeeBuilder = require("./EmployeeBuilder");

const daniel = new EmployeeBuilder("Daniel")
  .makeJuniorDev(25000)
  .addBasicSkills()
  .build();
const lou = new EmployeeBuilder("Lou")
  .makeLeadDev(100000)
  .addBasicSkills()
  .addLeadSkills()
  .makeManager()
  .build();

daniel.logProfile();
lou.logProfile();
console.log(lou._isManager);
console.log(daniel._isManager);
