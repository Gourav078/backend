//importing libary
const exp = require("express");
const cors = require('cors');



const server = exp();

const body_parser = require("body-parser")

//adding routes
const postroute = require("./routes/post");
const notesroute = require("./routes/notes");


server.use(exp.json());

server.use(cors());


//adding middlewares
server.use((req,res,next)=>{
    console.log("HTTP Method -" + req.method+", URL -"+ req.url);
    next(); 
});

server.use(body_parser.json())
server.use("/user", postroute);
server.use("/note", notesroute);




//connect to database
require("./config/db")

//port listener
server.listen(8081, () => console.log("hello"));