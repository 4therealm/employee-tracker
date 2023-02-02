const inquirer = require('inquirer')

const Roles = require("./Roles");

const dbService = require("./DbService")
const Connection = require('mysql2/typings/mysql/lib/Connection')
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
    inquirer.prompt(empQ)
    .then(async (answerObj) => {
      const { first_name, last_name, department, role } = answerObj;
      const result = await db.query(`'INSERT INTO company_db.employees (${first_name}, ${last_name}, ${department}, ${role})'`, function (err, results) {
         return console.table(result)
    });
     
    });
  }

 addDepartment() {
  inquirer.prompt(depQ)
  .then(async (answerObj) => {
        const result = await db.query(`'INSERT INTO company_db.departments (d_name)
        values ("${answerObj.depName}")'`, function (err, results) {
       return console.table(result)
  });
   
  });
  }
  addRole() {
    inquirer.prompt(roleQ).then((answerObj) => {
      const { roleName, salary, department } = answerObj;
      rolesArray.push(new Roles(roleName, salary, department));
    });
  }
}

module.exports = Company

let instance = null;


async function SelectFrom(tbl, col) {
  try {
       const response = await new Promise((resolve, reject) => {
          const query = `"SELECT ${tbl} FROM ${col};"`

          connection.query(query, (err, res) => {
            if (err) reject(new Error(err.message));
            resolve(res)         
        })
    });
    return response
} catch (error) {
    console.log("🚀 ~ file: Company.js:116 ~ getQuery ~ error", error)
  
}
}