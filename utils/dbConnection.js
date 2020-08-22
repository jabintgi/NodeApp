const mysql      = require("mysql");
const connection = mysql.createConnection({
  host     : "localhost",
  user     : "root",
  password : "password",
  database:"TestDb",
  multipleStatements:true
});

connection.connect(function(err) {
  if (err) {
    console.error(`Error : ${err.stack}`);
    return;
  }
  console.log("DB Connected.");
});

module.exports = connection;