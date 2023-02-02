const mysql = require("mysql2");
let instance = null;

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

class CompanyDb {
  static dbInstance() {
    return instance ? instance : new CompanyDb();
  }
  //im guessing instance is boolean meta data related to a current connection
}


module.exports = CompanyDb