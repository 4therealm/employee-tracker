const Employee = require('./Employee')
class Roles  {
  constructor (title, roleId, depName, salary) {
    this.title = title,
    this.roleId = roleId,
    this.depName = depName,
    this.salary = salary
  }

  getRole() {
    return this.title
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