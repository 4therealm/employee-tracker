const mysql = require('mysql2')

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "employee_tracker",
  port: 3306
})

connection.connect((err) => {
  if (err) {
      console.log(err.message)
  }
})

//the DbService class will provide the different methods for data manipulation

class DbService {
  static getDbServiceInstance(){
    return instance ? instance : new DbService();
  }

//async class methods

  async getDepartment(){
    try{
      const response = await new Promise((resolve, reject) => {
        const query = "SELECT * FROM department";

        connection.query(query, (err, results) => {
          if (err) reject(new Error(err.message))
          resolve(results)  
        })
      });

      return response;
    } catch (error){
      console.log("🚀 ~ file: dbService.js:39 ~ DbService ~ getAllData ~ error", error)
      
    }
  }



}

module.exports = DbService;