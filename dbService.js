const mysql = require('mysql2')

const connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USERNAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  port: process.env.DB_PORT
})

connection.connect((err) => {
  if (err) {
      console.log(err.message)
  }
})

//the DbService class will provide the different methods for data manipulation

