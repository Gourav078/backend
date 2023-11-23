
const mang = require("mongoose");
const PostSchema= mang.Schema({
    username:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
    date:{
        type: String,
        default: Date.now,
        
    },
   
},
{
    timestamps: true
}
)



module.exports = mang.model("Post", PostSchema);