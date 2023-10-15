const express = require("express")
const connection = require("./connection/connectDB")
const userRouter = require("./module/user/router/user.router")
const app = express()


app.use(express.json())
connection()
app.use(userRouter)


app.listen(5000,()=>{
    console.log("app running in port 5000")
})