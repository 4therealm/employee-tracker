const inquirer = require("inquirer");
const cTable = require("console.table")
const DbService = require("./classes/DbService")
const Employee = require("./classes/Employee")
const Department = require("./classes/Department")
const Roles = require("./classes/Roles")
const Company = require("./classes/Company")
const mysql = require('mysql2')
const CompanyDb=require("./classes/DbService")

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




process.stdin.on("keypress", function (_, key) {
  if (key.name === "escape") {
    exit();
  }
  });

  async function prepareQuery(input){
    try {
      const result = await new Promise((resolve, reject) => {
        (CompanyDb.dbInstance()).SelectFrom("*", `${input}`);
       resolve(console.table(result))
       })  
    } catch (error) {
      console.log("🚀 ~ file: test.js:53 ~ prepareQuery ~ error", error)
      
    }
    
  }

  function userChooses(){
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
          prepareQuery("departments")
          break;
        case "View all roles":
          prepareQuery("roles")
          break;
        case "View all employees":
          prepareQuery("employees")
          break;
        case "Add department":
          
          break;
        case "Add a role":
          
          break;
        case "Add employee":
          
          break;
      }
  })
  }






init()
function init(){
  db.query(`INSERT INTO employees(first_name, last_name, e_role_id, e_dep_id) 
  VALUES("${first_name}", "${last_name}", "${department}", "${role}");`, function (err, results) {
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
                const db = CompanyDb.dbInstance();
                const result = db.SelectFrom()
                console.table(result)
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
