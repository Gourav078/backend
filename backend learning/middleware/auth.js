const jwt = require("jsonwebtoken");
const SECRET_KEY ="NOTESAPI";

const auth = (req,res,next)=>{
    try {
        let token= req.headers.authorization;
        if(token){
            token= token.split(" ")[1];
            let user = jwt.verify (token, SECRET_KEY);
            // console.log("Decoded User:", user);
            req.userId =user.id;
        }
        else{
            
            res.status(401).json({ message: "Token not provided" });

        }
        next();

    } catch (error) {
        // console.error("Token Verification Error:", error);
        res.status(401).json({ message: "Unauthorized user" });
        
    }
}
module.exports=auth;