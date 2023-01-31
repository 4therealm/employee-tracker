/*
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
*/

class Employee {
  constructor ( id, firstName, lastName, jobTitle, department, salary, reportsTo ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.jobTitle = jobTitle;
    this.department = department;
    this.salary = salary;
    this.reportsTo = reportsTo
    
  }
  getName () {
    return this.name;
  }
  getId () {
    return this.id;
  }
  getEmail () {
    return this.email;
  }
  getRole(){
    return this.constructor.name;
  }
}


module.exports = Employee;