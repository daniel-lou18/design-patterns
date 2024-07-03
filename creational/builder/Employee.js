class Employee {
  constructor(builder) {
    this._name = builder.name;
    this._job = builder.job || "employee";
    this._isAdmin = builder.isAdmin || false;
    this._isManager = builder.isManager || false;
    this._skills = builder.skills || [];
    this._salary = builder.salary || 0;
  }

  logProfile() {
    console.log(
      `${this._name} is a ${
        this._job
      } who has the following skills: ${this._skills.join(" - ")} and makes ${
        this._salary
      }`
    );
  }
}

module.exports = Employee;
