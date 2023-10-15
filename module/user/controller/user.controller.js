const { StatusCodes } = require("http-status-codes")
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('../../../connection/userModel')

const register = async (req, res) => {
    try {
        const { userName, email, age, password, phone } = req.body
        const user = await User.findOne(email)
        if (user) {
            res.status(StatusCodes.BAD_REQUSET).json({ message: "already registerd" })
        }
        else {
            let newUser = new User({ userName, email, age, password, phone })
            await newUser.save()
            res.status(StatusCodes.CREATED).json({ message: "done" })
        }
    } catch (error) {
        res.status(StatusCodes.BAD_REQUSET).json({ message: "error", error })
    }
}
const login = async (req, res) => {
    try {
        let { email, password } = req.body
        const user = await User.findOne(email)
        if (!user) {
            res.status(StatusCodes.BAD_REQUSET).json({ message: "email is not founded" })
        }
        else {
            const match = await bcrypt.compare(password, user.password)
            if (!match) {
                res.status(StatusCodes.BAD_REQUSET).json({ message: "password is in correct" })
            }
            else {
                const token = jwt.sign({ id: user._id, name: user.userName }, "gemy")
                res.status(StatusCodes.BAD_REQUSET).json({ message: "welcome", token })
            }
        }

    } catch (error) {
        res.status(StatusCodes.BAD_REQUSET).json({ message: "error", error })
    }
}
const addToWatchList = async (req, res) => {
    try {
        const { id } = req.params
        const { movie } = req.body
        const user = await User.findById(id)
        if (user) {
            user.watchList.push(movie)
            await user.save
            res.status(StatusCodes.Ok).json({ message: "added" })
        }
        else {
            res.status(StatusCodes.BAD_REQUSET).json({ message: "user is not founded" })
        }
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Server error" });
    }
}
const getWatchList = async (req, res) => {
    try {
        const { id } = rea.params
        const user = await user.findById(id)
        if (user) {
            let watchList = user.watchList
            res.status(StatusCodes.Ok).json({ message: "watchList", watchList })
        }
        else {
            res.status(StatusCodes.BAD_REQUSET).json({ message: "user is not founded" })
        }
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Server error" });
    }
}
module.exports = { register, login, addToWatchList, getWatchList }