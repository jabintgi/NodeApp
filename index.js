const express = require("express")
const app =express()
const authRoute = require("./routes/auth")
const sampleDataAdditionRoute = require("./routes/sampleData")
const userManagementRoute = require("./routes/user")
const pagesRotute = require("./routes/pages")
const port = 3000 || process.env.PORT;



// Root Route

//Middlewares
app.use(express.json())
app.use("/api/auth", authRoute); ///Login Q1
app.use("/api/data", sampleDataAdditionRoute);  //Create Users table,Insert Sample data Q2
app.use("/api/user",userManagementRoute);  //User management
app.use("/",pagesRotute); 

app.listen(port,()=>console.log(`Server started on port ${port}`))