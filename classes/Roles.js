const Employee = require('./Employee')
class Roles extends Employee {
  constructor (role, roleId, depName, salary) {
    this.role = role,
    this.roleId = roleId,
    this.depName = depName,
    this.salary = salary
  }

  getRole() {
    return this.jobRole
  }
  getRoleId() {
    return this.roleId
  }
  getDep() {
    return this.depName
  }
  getSalary() {
    return this.salary
  }
}
module.exports = Roles