const inquirer = require("inquirer");
const DbService = require("./classes/DbService")
const cTable = require('console.table')

console.table([
  {
    name: 'foo',
    age: 10
  }, {
    name: 'bar',
    age: 20
  }
]);
const table = cTable.getTable([
  {
    name: 'foo',
    age: 10
  }, {
    name: 'bar',
    age: 20
  }
]);
//retrieves all data from db

    
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
            getDepartment();
            break;
          case "View all roles":
            previewTeam();
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
            exit();
            break;
          case "Update employee":
            exit();
            break;
        }
      });
  }
