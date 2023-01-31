const inquirer = require("inquirer");
const cTable = require("console.table")
const DbService = require("./classes/DbService")
const Employee = require("./classes/Employee")
const Department = require("./classes/Department")
const Roles = require("./classes/Roles")
const Company = require("./classes/Company")

// const departments = [
//   new Department("sales", "1"),
//   new Department("marketing", "2"),
//   new Department("customer service", "3")
// ]
// const employees = [
//   new Employee(11, "max", "walters", "sales", "manager"),
//   new Employee(11, "rob", "davidson", "sales", "employee"),
//   new Employee(11, "jacy", "hohan", "marketing", "manager"),
//   new Employee(11, "isia", "bleep", "marketing", "employee"),
//   new Employee(11, "sam", "sdf", "customer service", "manager"),
//   new Employee(11, "benny", "kalli", "customer service", "employee")
// ]
// const roles = [
//   new Role()
// ]

const roles =[]
const departments = []
const employees = []
const myCompany = new Company(...roles, ...departments, ...employees)


// console.table([
//   {
//     name: 'foo',
//     age: 10
//   }, {
//     name: 'bar',
//     age: 20
//   }
// ]);
// const table = cTable.getTable([
//   {
//     name: 'foo',
//     age: 10
//   }, {
//     name: 'bar',
//     age: 20
//   }
// ]);
// //retrieves all data from db


function addEmployee(){
  inquirer.prompt(questions).then( answerObj => { 
    const {empId, first_name, last_name, department, role} = answerObj
    Company.push(new Employee(empId, first_name, last_name, department, role))
})
}

    nextAction(

    )
  function nextAction() {
    inquirer
      .prompt( {
        type: "list",
        name: "nextAction",
        message: "What would you like to do?",
        choices: [
          "View all departments",
          "View all roles",
          "View all employees",
          "Add department",
          "Add a role",
          "Add employee",
          "Update employee"],
      })
      .then((choice) => {
        switch (choice.nextAction) {
          case "View all departments":
            return console.log('this is frustrating')
            break;
          case "View all roles":
            
            break;
          case "View all employees":
            exit();
            break;
          case "Add department":
            exit();
            break;
          case "Add a role":
            exit();
            break;
          case "Add employee":
            addEmployee();
            break;
          case "Update employee":
            
            break;
        }
      });
  }
