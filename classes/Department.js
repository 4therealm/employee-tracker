


  const mysql = require('mysql2/promise');
  const inquirer = require('inquirer');
  
  async function addDepartment() {
    try {
      const answer = await inquirer.prompt({
        type: "input",
        name: "dep_name",
        message: "what is the name of the department?",
      });
      
      const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'test_db'
      });
  
      const depQuery = "INSERT INTO departments (d_name) VALUES (?);"
      const [results] = await connection.query(depQuery, [answer.dep_name]);
      console.log(results);
  
      connection.end();
    } catch (error) {
      console.error(error);
    }
  }
  
module.exports = Department