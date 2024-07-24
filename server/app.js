const express = require("express")
const app = express();
app.get("/",(req , res)=>{
    res.send("all are ok")
})
app.listen(3000,()=>{
    console.log("app is listing in to the port 3000")
})
module.exports = app