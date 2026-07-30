const express =  require("express");

const app = express();

app.get("/user", (req,res)=>{
    res.send({
        firstName: "Harshita",
        lastName: "Singh"
    })
})

app.post("/user", (req,res)=>{
    console.log("Save data to databse");
    res.send("Data send to database")
})

app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})