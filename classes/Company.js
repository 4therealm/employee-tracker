class Company {
  constructor(roles, departments, employees){
    this.roles = roles
    this.departments = departments
    this.employees = employees
  }


  showRoles(){
    return this.roles
  }
  showDepartments() {
    return this.departments
  }
  showEmployees() {
    return this.employees
  }

  addEmployee(emp){
    this.employees.push(emp)
  }

  addDepartment(){
    this.departments.push(dep)
  }
}

module.exports = Company