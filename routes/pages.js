const express = require("express");
const route = express.Router();
const isAuthenticated  = require("../utils/authUser")
const {isAdmin,isManager} = require("../utils/userAccess")


route.get("/",(req,res)=>{
    res.send("Public Home Page")
})

route.get("/admin",isAuthenticated,isAdmin,(req,res)=>{
    res.send("Admin panel")
});

route.get("/manage",isAuthenticated,isManager,(req,res)=>{
    res.send("Management Dashboard")
});

module.exports = route;
