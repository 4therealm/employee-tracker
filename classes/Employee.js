/*
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
*/

class Employee {
  constructor ( id, firstName, lastName, department, role) {
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