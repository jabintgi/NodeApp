const express = require("express");
const route = express.Router();
const db = require("../utils/dbConnection")

route.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  let sql = "SELECT * FROM Users WHERE ?? = ? and ?? = ?"
  const values = ["username", username, "password", password]
  sql = db.format(sql, values)
  db.query(sql, (err, result) => {
    if (err) {
      res.status(400)
      return res.json({ success: false, "message": err.sqlMessage })
    }else if(result.length==0){
      res.status(401)
      return res.json({ success: false, "message": "Invalid username or password"})
    }
    const {id,name} = result[0]
    return res.json({ success: true, message: "Login successfull", data: {userId:id,name} })
  });
});


module.exports = route;
