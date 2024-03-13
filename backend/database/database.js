// Step 1: Define Parameters
const mysql = require("mysql");

require("dotenv").config({ path: "../config/.env" });

parameters = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  multipleStatements: true,
};

// Step 2: establish a connection to the database
// now we use the methods available from the mysql module
// first invoke the mysql module’s .createConnection method
const mysqlConnection = mysql.createConnection(parameters);

// now invoke the .connect method
mysqlConnection.connect((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Connected to MySQL"); //Successful Connection
  }
});

module.exports = { connection };
