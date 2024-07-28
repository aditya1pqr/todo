const mongoose = require("mongoose")
const dbconnect = ()=>{
    mongoose.connect(MONGO_URI).then(()=>{
        console.log("Db is connected is succesfully")
    }).catch((error)=>{
        console.log(err)
        console.log(error.message)
    
    })
}
module.exports = dbconnect;