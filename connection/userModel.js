const mongoose = require("mongoose")
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    userName: { type: String },
    email: { type: String },
    age: { type: Number },
    password: { type: String },
    phone: { type: Number },
    watchList: { type: [Object] }
},
    {
        timestamps: true
    }
)

userSchema.pre("save", async function (next) {
    this.password = await bcrypt.hash(this.password, 8)
    next()
})

const User = mongoose.model("user", userSchema)

module.exports = User