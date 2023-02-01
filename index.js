const inquirer = require("inquirer");
const cTable = require("console.table")
const DbService = require("./classes/DbService")
const Employee = require("./classes/Employee")
const Department = require("./classes/Department")
const Roles = require("./classes/Roles")
const Company = require("./classes/Company")





process.stdin.on("keypress", function (_, key) {
  if (key.name === "escape") {
    exit();
  }
  });

  const departments = [
  new Department("sales", "1"),
  new Department("marketing", "2"),
  new Department("customer service", "3")
]
const employees = [
  new Employee(11, "max", "walters", "sales", "manager"),
  new Employee(12, "rob", "davidson", "sales", "employee"),
  new Employee(13, "jacy", "hohan", "marketing", "manager"),
  new Employee(14, "isia", "bleep", "marketing", "employee"),
  new Employee(15, "sam", "sdf", "customer service", "manager"),
  new Employee(16, "benny", "kalli", "customer service", "employee")
]
const roles = [
  new Roles("manager", "5", "marketing", 8000),
  new Roles("employee", "6", "marketing", 8000)
]


const myCompany = new Company([...roles], [...departments], [...employees])

async function render(func) {
  const result = await new Promise((resolve) => {
    return resolve(console.table(func))
    
  }) 
}
init()
function init(){
  nextAction()
}

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
            render(myCompany.showDepartments()) 
            nextAction()         
            break;
          case "View all roles":
            render(myCompany.showRoles())
            nextAction()
            break;
          case "View all employees":
            render(myCompany.showEmployees())
            nextAction()
            break;
          case "Add department":
            myCompany.addDepartment()
            
            break;
          case "Add a role":
            myCompany.addRole()
            nextAction()
            break;
          case "Add employee":
            myCompany.addEmployee()
            nextAction()
            break;
        }
      });
  }
