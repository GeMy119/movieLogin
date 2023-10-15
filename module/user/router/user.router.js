
const { login, register, addToWatchList, getWatchList } = require("../controller/user.controller")
const validation = require("../../../middlware/validation")
const { regiserUserSchema, loginUserSchema } = require("../joi/user.joi")

const userRouter = require("express").Router()

userRouter.post("/register", validation(regiserUserSchema), register)
userRouter.post("/login", validation(loginUserSchema), login)
userRouter.post("/addToWatchList/:id", addToWatchList)
userRouter.get("/getWatchList/:id", getWatchList)





module.exports = userRouter