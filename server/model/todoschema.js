const mongoose = requrie("mongoose");

const todoschema = new mongoose.create({
    todo : {
        type : String,
        requrie : true,
    },
    task  : [String]
})

exports.module = mongoose.model("Todo" , todoschema)