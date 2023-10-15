const mongoose = require("mongoose")

const connection = () => {
    mongoose.connect("mongodb+srv://movieLogin:movieLogin@atlascluster.zgoi85r.mongodb.net/").then((result) => {
        console.log("db Running")
    }).catch((err) => {
        console.log(err)
    })
}
module.exports = connection

//mongodb+srv://movieLogin:movieLogin@atlascluster.zgoi85r.mongodb.net/