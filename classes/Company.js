const inquirer = require('inquirer')
const Department = require("./Department");
const questions = require("../questions");
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
  showDepartments() {
    return this.departments;
  }
  showEmployees() {
    return this.employees;
  }

  addEmployee() {
    inquirer.prompt(empQ).then((answerObj) => {
      const { first_name, last_name, department, role } = answerObj;
      //the step bollow will be replaced with a function to store in db
      employeeArray.push(new Employee(first_name, last_name, department, role));
      return employeeArray
    });
  }

  async addDepartment() {
    inquirer.prompt(departmentQ).then((answerObj) => {
      departmentArray.push(new Department(answerObj.depName));
    nextAction()
    });
  }
  addRole() {
    inquirer.prompt(roleQ).then((answerObj) => {
      //the step bollow will be replaced with a function to store in db
      const { roleName, salary, department } = answerObj;
      rolesArray.push(new Roles(roleName, salary, department));
      return rolesArray
    });
    nextAction();
  }
}

module.exports = Company
