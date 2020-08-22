const db = require("../utils/dbConnection")
const ROLE = require("../utils/roles")

function isAdmin(req,res,next){
    const userId = req.body.userId;
    db.query("SELECT * FROM Users WHERE id=?",userId,(err,result)=>{
        if(err) {
            res.status(404);
            return res.json({success:false,messages:err.sqlMessage})
        }
        else if(result.length==0){
            res.status(401)
            return res.json({success:false,messages:"user not exist"})
        }
        const role = result[0].role;
        if(role===ROLE.ADMIN){
            next()
        }else{
            res.status(403);
            return res.json({success:false,messages:"You dont have access"})
        }  
    })
}

function isManager(req,res,next){
    const userId = req.body.userId;
    db.query("SELECT * FROM Users WHERE id=?",userId,(err,result)=>{
        if(err) {
            res.status(404);
            return res.json({success:false,messages:err.sqlMessage})
        }
        else if(result.length==0){
            res.status(401)
            return res.json({success:false,messages:"user not exist"})
        }
        const role = result[0].role;
        if(role===ROLE.ADMIN || role==ROLE.MANAGER){
            next()
        }else{
            res.status(403);
            return res.json({success:false,messages:"You dont have access"})
        }  
    })
}

module.exports = {isAdmin,isManager};