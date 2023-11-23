
const { default: mongoose } = require("mongoose");
const mang = require("mongoose");
const NoteSchema= mang.Schema({
    title:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        required: true
    }
   
},
{
    timestamps: true
}
)



module.exports = mang.model("Note", NoteSchema);