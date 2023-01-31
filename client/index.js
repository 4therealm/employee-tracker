const inquirer = require("inquirer");
//retrieves all data from db
const getDepartment = () =>
  fetch('/api/department', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
const getRoles = () =>
  fetch('/api/roles', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
const getEmployee = () =>
  fetch('/api/employee', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
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

  module.exports = nextAction