

class Employee {
  constructor ( id, firstName, lastName, role, department) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.department = department;
    this.role = role;
    
  }
  getName () {
    return this.name;
  }
  getId () {
    return this.id;
  }
  getDepartment () {
    return this.department;
  }
  getRole(){
    return this.constructor.name;
  }
}


module.exports = Employee;