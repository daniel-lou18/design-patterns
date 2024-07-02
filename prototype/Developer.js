class Developer {
  constructor(name = "anyUser") {
    this._name = name;
    this._skills = [];
  }

  set name(name) {
    if (typeof name !== "string") throw new Error("Name must be a string");
    if (name.length < 2)
      throw new Error("Name must be at least 2 characters long");
    this._name = name;
  }

  set isAdmin(isAdmin) {
    this._isAdmin = isAdmin;
  }

  addSkill(skill) {
    this._skills.push(skill);
  }

  logSkills() {
    console.log(this._name + ": " + this._skills.join(" - "));
  }

  clone() {
    const proto = Object.getPrototypeOf(this);
    const clone = Object.create(proto);
    clone._name = this._name;
    clone._skills = [...this._skills];
    return clone;
  }
}

module.exports = Developer;
