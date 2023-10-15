const express = require("express")
const connection = require("./connection/connectDB")
const userRouter = require("./module/user/router/user.router")
const app = express()
const port = process.env.PORT || 5000;

app.use(express.json())
connection()
app.use(userRouter)


app.listen(port, () => {
    console.log(`app running in port ${port}`)
})