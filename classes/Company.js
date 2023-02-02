const inquirer = require('inquirer')
const Department = require("./Department");
const Roles = require("./Roles");
const Employee = require("./Employee");
const dbService = require("./DbService")
const departmentArray = []
const rolesArray = []
const employeeArray = []
const empQ = [

  {
    type: "input",
    message: "What is their first name?",
    name: "first_name",
  },
  {
    type: "input",
    message: "What is their last name?",
    name: "last_name",
  },
  {
    type: "input",
    message: "What is their department?",
    name: `"${[...departmentArray]}"`,
  },
  {
    type: "list",
    message: "what is their role?",
    name: "role",
    choices: `"${[...rolesArray]}"`
  },
]

const roleQ = [
  {
    type: "input",
    message: "name of role?",
    name: "roleName"
  },
  {
    type: "input",
    message: "salary",
    name: "salary"
  },
  {
    type: "list",
    message: "in what department?",
    name: "department",
    choices: `"${[...rolesArray]}"`
  }
]

const departmentQ = {
  type: "input",
  message: "what is the departments name?",
  name: "depName"
}
class Company {
  constructor(roles, departments, employees) {
    this.roles = roles;
    this.departments = departments;
    this.employees = employees;
  }

  showRoles() {
    return this.roles;
  }
  showDepartment() {
    const db = dbService.getDbServiceInstance();

    const result = db.getDepartment();
    return result
  }
  showEmployees() {
    return this.employees;
  }
//we will need to convert the answer value into a number
  addEmployee() {
    inquirer.prompt(empQ).then((answerObj) => {
      const { first_name, last_name, department, role } = answerObj;
      db.query(`'INSERT INTO company_db.employees (${first_name}, ${last_name}, ${role}, ${department}) '`, function (err, results) {
        console.table(results)
      });
      ;
    });
  }

 async addDepartment() {
  const something = await inquirer.prompt(departmentQ).then((answerObj) => {
      departmentArray.push(new Department(answerObj.depName));
    });
    return something
  }
  addRole() {
    inquirer.prompt(roleQ).then((answerObj) => {
      const { roleName, salary, department } = answerObj;
      rolesArray.push(new Roles(roleName, salary, department));
    });
  }
}

module.exports = Company
