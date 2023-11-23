const mang = require ("mongoose");

const url = process.env.MONGO_URL

require("dotenv/config") 

mang.connect("mongodb://0.0.0.0:27017/practice")

const db = mang.connection;
db.on("open", ()=> {console.log("connected")} )

module.exports = db;