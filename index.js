const inquirer = require("inquirer");
const cTable = require("console.table");
const mysql = require("mysql2");
const mysqlPromise = require("mysql2/promise");


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


// addRole()
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
        // "Update employee",
      ],
    })
    .then((choice) => {
      switch (choice.nextAction) {
        case "View all departments":
          viewDepartments();
          break;
        case "View all roles":
          viewRoles();
          break;
        case "View all employees":
          viewEmployees();
          break;
        case "Add department":
          addDepartment();
          break;
        case "Add a role":
          addRole();
          break;
        case "Add employee":
          addEmployee();
          break;
      }
    });
}


async function viewDepartments() {
  try {
    const query = `SELECT id as 'Department Id', d_name as Department
      FROM company_db.departments;`;
    const results = await new Promise((resolve, reject) => {
      connection.query(query, (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
    console.table(results);
  } catch (error) {
    console.log(error);
  } finally {
    userChooses();
  }
}




async function viewEmployees() {
  try {
    const results = await connection.promise().query(
      `select e.id AS Id, first_name AS 'first name',last_name AS 'last name', r.r_name AS Title , d.d_name AS Department, r.salary AS Salary , e.manager_id AS 'Manager Id'  
  from employees e
  inner join roles r on e.role_id = r.id
  inner join departments d on e.manager_id = r.id;`
    );
    console.table(results[0]);
    userChooses();
  } catch (err) {
    console.error(err);
  }
}

// 
async function viewRoles() {
  try {
    const results = await connection.promise().query(`
      SELECT  id as Id, r_name as Title, dep_id as Department, salary as Salary
      FROM company_db.roles;
    `);
    console.table(results[0]);
    userChooses();
  } catch (err) {
    console.log(err);
  }
}

async function addEmployee() {
  try {
    const rolesResult = await connection.promise().query("SELECT * FROM company_db.roles");
    const employeeResult = await connection.promise().query("SELECT * FROM company_db.employees");
    const rolesArr = rolesResult[0].map((role) => ({
      name: role.r_name,
      value: role.id,
    }));
    const empArr = employeeResult[0].map((emp) => ({
      name: emp.first_name + " " + emp.last_name,
      value: emp.id
    }));
    empArr.push({ name: "none", value: null });
    const answer = await inquirer.prompt([
      {
        type: "input",
        name: "first_name",
        message: "First name?",
      },
      {
        type: "input",
        name: "last_name",
        message: "Last name?",
      },
      {
        type: "list",
        name: "role_name",
        message: "what is their position?",
        choices: rolesArr,
      },
      {
        type: "list",
        name: "manager",
        message: "who is their manager?",
        choices: empArr,
      },
    ]);
    console.log("🚀 ~ file: index.js:108 ~ .then ~ answer", answer);
    const { first_name, last_name, role_name, manager } = answer;
    const empQuery = "INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?);";
    const [result] = await connection.promise().query(empQuery, [first_name, last_name, role_name, manager]);
    console.table(result);
  } catch (error) {
    console.log(error);
  } finally {
    userChooses();
  }
}


async function addDepartment() {
    try {
    const answer = await inquirer.prompt({
      type: "input",
      name: "dep_name",
      message: "what is the name of the department?",
    }).then(answer => {    
    const depQuery = "INSERT INTO departments (d_name) VALUES (?);"
    const result = connection.promise().execute(depQuery, [answer.dep_name])
  
  });
      
 userChooses() } catch (err) {
    console.log(err);
  }
}
async function addRole() {
 try {
   const departmentsResult = await connection.promise().query("SELECT d_name, id FROM company_db.departments");
    const depArr = departmentsResult[0].map((dep) => ({
      name: dep.d_name,
      value: dep.id,
    }));
  const answers = await inquirer.prompt([
    {
      type: "input",
      name: "r_name",
      message: "what is the name of the role?",
    },
    {
      type: "input",
      name: "r_salary",
      message: "what is the salary for that position?",
    },
    {
      type: "list",
      name: "dep_id",
      message: "What department is it in?",
      choices: depArr
    },
  ]);
  const { r_name, r_salary, dep_id } = answers;
  const roleQuery = "INSERT INTO roles (r_name, salary, dep_id) VALUES (?, ?, ?);";
    const [result] = await connection.promise().execute(roleQuery, [r_name, r_salary, dep_id]);
    console.table(result);
  } catch (err) {
    console.log(err);
  } userChooses()
}
