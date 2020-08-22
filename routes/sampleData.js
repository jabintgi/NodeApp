const express = require("express");
const route = express.Router();
const db = require("../utils/dbConnection")
const Role = require("../utils/roles")

route.get("/create", (req, res) => {
    const sql = "CREATE TABLE IF NOT EXISTS Users(id INT AUTO_INCREMENT PRIMARY KEY,name VARCHAR(30),username VARCHAR(30),password VARCHAR(10),role TEXT)"
    db.query(sql, (err, result) => {
        if (err) {
            //   console.log(err.sqlMessage)
            res.status(409)
            return res.json({ success: false, message: err.sqlMessage })
        }
        // console.log(result)
        return res.json({ success: true, message: "Table created successfully." })
    });

});

route.get('/insert', (req, res) => {
    const user1 = [ "John Doe", "admin",  "123456",  Role.ADMIN ];
    const user2 = [ "Ben", "manager", "manager12",Role.MANAGER ];
    const user3 = ["Joseph","joseph","joseph123",Role.USER ];
    db.query("INSERT INTO Users (name, username, password,role) VALUES ?", [[user1,user2,user3]], (err, result) => {
        if (err) {
            res.status(400);
            return res.json({ success: false, "message": err.sqlMessage })
        }
        return res.json({ success: true, "message": "Users inserted successfully." })
    })
});



module.exports = route;
