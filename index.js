const inquirer = require("inquirer");
const cTable = require("console.table");
// const DbService = require("./classes/DbService")
// const Employee = require("./classes/Employee")
// const Department = require("./classes/Department")
// const Roles = require("./classes/Roles")
// const Company = require("./classes/Company")
const mysql = require("mysql2");
const CompanyDb = require("./classes/DbService");
const depArr = [];
const roleArr = [];
const employee = [];
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "company_db",
  port: 3306,
});

connection.connect((err) => {
  if (err) {
    console.log(err.message);
  }
  console.log("db " + connection.state);
});

function prepareQuery(input) {
  db.query(`'SELECT * FROM classlist_db.${input}'`, function (err, results) {
    console.log("🚀 ~ file: server.js:27 ~ results", results);
  });
}

userChooses();
function userChooses() {
  inquirer
    .prompt({
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
        "Update employee",
      ],
    })
    .then((choice) => {
      switch (choice.nextAction) {
        case "View all departments":
          connection.query(
            "SELECT * FROM company_db.departments",
            function (err, results) {
              console.table(results);
              userChooses();
            }
          );
          break;
        case "View all roles":
          connection.query(
            "SELECT * FROM company_db.roles",
            function (err, results) {
              console.table(results);
              userChooses();
            }
          );
          break;
        case "View all employees":
          connection.query(
            "SELECT * FROM company_db.employees",
            function (err, results) {
              console.table(results);
              userChooses();
            }
          );
          break;
        case "Add department":
            addDepartment()
          break;
        case "Add a role":
            addRole()
          break;
        case "Add employee":
            addEmployee()
          break;
      }
    });
}

function selectFrom(col, tbl){
  connection.query(
    "SELECT * FROM company_db.departments",
    function (err, results) {
      console.table(results);
      userChooses();
    }
  );
}


function addDepartment() {
  inquirer.prompt(
    {
      type: "input", name: "dep_name", message: "what is the name of the department?"
    })
  .then((answer) => {
    // console.log("🚀 ~ file: index.js:108 ~ .then ~ answer", answer)
    const depQuery = "INSERT INTO departments (d_name) VALUES (?);";
    const depResults = connection.query(depQuery, `${answer.dep_name}`, (err, result) => {
      err ? console.log(err) : console.table(result);
    });
  });
}
async function addRole() {
  const result = await inquirer.prompt(
    {
      type: "input", name: "r_name", message: "what is the name of the role?"
    },
    {
      type: "input", name: "r_salary", message: "what is the salary for that position?"
    })
  .then((answer) => {
    const {r_name, r_salary} = answer
    console.log("🚀 ~ file: index.js:108 ~ .then ~ answer", answer)
    const roleQuery = "INSERT INTO roles (r_name, r_salary) VALUES (?, ?);";
    const roleResults = connection.query(depQuery, `${r_name}, ${r_salary}`, (err, result) => {
      err ? console.log(err) : console.table(result);
    });
  });
}
function addEmployee() {
  inquirer.prompt(
    {
      type: "input", name: "first_name", message: "First name?"
    },
    {
      type: "input", name: "last_name", message: "Last name?"
    },
    {
      type: "select", name: "role_name", message: "what is their position?", choices: [...roleArr]
    },
    {
      type: "select", name: "dep_name", message: "in what department?", choices: [...depArr]
    })
  .then((answer) => {
    const {first_name, last_name, role_name, dep_name} = answer
    console.log("🚀 ~ file: index.js:108 ~ .then ~ answer", answer)
    const depQuery = "INSERT INTO departments (first_name, last_name, e_role_id, e_dep_id) VALUES (?, ?, ?, ?);";
    const depResults = connection.query(depQuery, [`${first_name}, ${last_name}, ${role_name}, ${dep_name} `], (err, result) => {
      err ? console.log(err) : console.table(result);
    });
  });
}