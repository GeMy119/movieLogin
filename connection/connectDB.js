const mongoose = require("mongoose")

const connection = () => {
    mongoose.connect("mongodb://127.0.0.1:27017/movieUser").then((result) => {
        console.log("db Running")
    }).catch((err) => {
        console.log(err)
    })
}
module.exports = connection

//mongodb+srv://movieLogin:movieLogin@atlascluster.zgoi85r.mongodb.net/