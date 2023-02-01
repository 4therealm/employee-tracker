const {default: Choice}=require("inquirer/lib/objects/choice")

// empQuestions = [

//   {
//     type: "input",
//     message: "What is their first name?",
//     name: "first_name",
//   },
//   {
//     type: "input",
//     message: "What is their last name?",
//     name: "last_name",
//   },
//   {
//     type: "input",
//     message: "What is their department?",
//     name: `"${[...departmentArray]}"`,
//   },
//   {
//     type: "list",
//     message: "what is their role?",
//     name: "role",
//     choices: `"${[...rolesArray]}"`
//   },
// ]

// const roleQ = [
//   {
//     type: "input",
//     message: "name of role?",
//     name: "roleName"
//   },
//   {
//     type: "input",
//     message: "salary",
//     name: "salary"
//   },
//   {
//     type: "list",
//     message: "in what department?",
//     name: "department",
//     choices: `"${[...rolesArray]}"`
//   }
// ]

// const departmentQ = {
//   type: "input",
//   message: "what is the departments name?",
//   name: "depName"
// }
// const questionsExports = [empQuestions, roleQ, departmentQ]
// module.exports = questionsExports