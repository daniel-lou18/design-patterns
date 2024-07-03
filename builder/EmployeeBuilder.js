const Employee = require("./Employee");

class EmployeeBuilder {
  constructor(name) {
    this.name = name;
  }

  makeJuniorDev(salary = 15000) {
    this.job = "Junior Developer";
    this.salary = salary;
    return this;
  }

  makeLeadDev(salary = 80000) {
    this.job = "Lead Developer";
    this.salary = salary;
    return this;
  }

  makeManager() {
    this.isManager = true;
    this.isAdmin = true;
    return this;
  }

  makeAdmin() {
    this.isAdmin = true;
    return this;
  }

  addBasicSkills() {
    this.skills = ["JavaScript", "TypeScript", "React"];
    return this;
  }

  addLeadSkills() {
    this.skills = [
      ...this.skills,
      "Express",
      "Node",
      "SQL",
      "Jenkins",
      "C++",
      "Java",
    ];
    return this;
  }

  build() {
    return new Employee(this);
  }
}

module.exports = EmployeeBuilder;
