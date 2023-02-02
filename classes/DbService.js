const mysql = require("mysql2");
let instance = null;

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "employee_tracker",
  port: 3306,
});

connection.connect((err) => {
  if (err) {
    console.log(err.message);
  }
  console.log("db " + connection.state);
});

class CompanyDb {
  static dbInstance() {
    return instance ? instance : new CompanyDb();
  }
  //im guessing instance is boolean meta data related to a current connection

  async SelectFrom(tbl, col) {
    try {
      const response = await new Promise((resolve, reject) => {
        const query = `"SELECT ${col} FROM ${tbl};"`;

        connection.query(query, (err, res) => {
          if (err) reject(new Error(err.message));
          resolve(res);
        });
      });
      return response;
    } catch (error) {
      console.log("🚀 ~ file: Company.js:116 ~ getQuery ~ error", error);
    }
  }

  async insertInto(table, val) {
    let query = "";
    let values = [val];
    try {
      switch (table) {
        case "departments":
          query = "INSERT INTO departments (d_name) VALUES (?);";
          break;
        case "roles":
          query = "INSERT INTO roles (r_name, r_salary) VALUES (?, ?);";
          break;
        case "employees":
          query =
            "INSERT INTO employees (first_name, last_name, title, department) VALUES (?, ?, ?, ?);";
          break;
      }
      const response = await new Promise((resolve, reject) => {
        connection.query(query, [...values], (err, result) => {
          err ? reject(new Error(err.message)) : resolve(result);
        });
      });
    } catch (err) {
      console.log(
        "🚀 ~ file: DbService.js:72 ~ CompanyDb ~ insertInto ~ err",
        err
      );
    }
  }
}

module.exports = CompanyDb