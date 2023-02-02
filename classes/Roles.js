const Employee = require('./Employee')
class Roles  {
  constructor (title, department, salary) {
    this.title = title,
    this.depName = department,
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