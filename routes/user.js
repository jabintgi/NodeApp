const express = require("express");
const route = express.Router();
const db= require("../utils/dbConnection")
const isAuthenticated  = require("../utils/authUser")
const {isAdmin} = require("../utils/userAccess")

route.get("/",isAuthenticated,isAdmin,(req,res)=>{
    const sql = "SELECT * FROM Users"
    db.query(sql,(err,result)=>{
        if(err){
            res.status(400);
            return res.json({success:false,message:err.sqlMessage});
        }
        else if(result.length==0){
            res.status(404);
            return res.json({success:false,message:"No users exist"})
        }
        return res.json({success:true,message:"Users list",data:result});
    });

})

route.post("/", (req, res) => {
    const {name,username,password,role} = req.body;
    const newUser = {name,username,password,role}
    db.query("INSERT INTO Users SET ?",newUser,(err,result)=>{
        if(err){
            res.status(400);
            return res.json({success:false,message:err.sqlMessage});
        }
        return res.json({success:true,message:"User added successfully"});
    })
});

route.put("/", (req, res) => {
    const {userId,name,username,password,role} = req.body;
    let sql = 'UPDATE users SET name = ?, username = ?, password = ?, role = ? WHERE id = ?'
    const values = [name,username, password, role,userId]
    sql = db.format(sql,values)
    db.query(sql,(err,result)=>{
        if(err){
            res.status(400);
            return res.json({success:false,message:err.sqlMessage});
        }
        else if(result.affectedRows==0){
            res.status(401);
            return res.json({success:false,message:"Error on updating user data"});
        }
        return res.json({success:true,message:"User updated successfully"});
    })
});

route.delete("/", (req, res) => {
    const userId = req.body.userId;
    db.query("DELETE FROM Users WHERE id=?",userId,(err,result)=>{
        if(err){
            res.status(400)
            return res.json({success:false,message:err.sqlMessage})
        }
        else if(result.affectedRows==0){
            res.status(401);
            return res.json({success:false,message:"No user exist"});
        }
        return res.json({success:true,message:"User removed successfully"});
    })
});

module.exports = route;
