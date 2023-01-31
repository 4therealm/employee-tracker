const Employee = require('./Employee')
class Department extends Employee {
  constructor (depName, depId) {
    this.depName = depName;
    this.depId = depId 
  }

  getDepName() {
    return this.depName
  }
  getDepId() {
    return this.depName
  }
}
module.exports = Department