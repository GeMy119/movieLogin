const express = require("express")
const connection = require("./connection/connectDB")
const userRouter = require("./module/user/router/user.router")
const cors = require("cors")
const app = express()
const port = process.env.PORT || 5000;


const corsOptions = {
    origin: 'http://localhost:61447',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
};
app.use(cors(corsOptions));
app.use(express.json())
connection()
app.use(userRouter)


app.listen(port, () => {
    console.log(`app running in port ${port}`)
})