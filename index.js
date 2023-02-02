const inquirer = require("inquirer");
const cTable = require("console.table")
const DbService = require("./classes/DbService")
const Employee = require("./classes/Employee")
const Department = require("./classes/Department")
const Roles = require("./classes/Roles")
const Company = require("./classes/Company")
const mysql = require('mysql2')

const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // MySQL password
    password: 'password',
    database: 'company_db'
  },
  console.log(`Connected to the classlist_db database.`)
);

// Query database
// db.query('SELECT * FROM employees', function (err, results) {
//   console.log(results);
// });




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
    return resolve(`\n${console.table(func)}\n`)
    
  }) 
}
async function AddToCompany(func) {
  const result = await new Promise((resolve) => {
    return resolve(func)
  });
} 

init()
function init(){
  db.query(`INSERT INTO employees(first_name, last_name, e_role_id, e_dep_id) 
  VALUES("maxxxxxxxxx", "aaaaaaaaswalt", 3, 3);`, function (err, results) {
    console.table(results)
  });
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
            db.query('SELECT * FROM company_db.departments', function (err, results) {
              console.table(results)
            });
            // render(myCompany.showDepartment()) 
            // nextAction()         
            break;
          case "View all roles":
            db.query('SELECT * FROM company_db.roles', function (err, results) {
              console.table(results)
            });
            break;
          case "View all employees":
            db.query('SELECT * FROM company_db.employees', function (err, results) {
              console.table(results)
            });
            break;
          case "Add department":
           AddToCompany(myCompany.addDepartment())
           nextAction()
            break;
          case "Add a role":
            myCompany.addRole()
            
            break;
          case "Add employee":
            
            new Employee(first_name, last_name, roles, departments)
            break;
        }
      });
  }
