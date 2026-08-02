const express = require("express");
const app = express();
const {adminAuth} = require("./middlewares/auth")

app.use("/admin", adminAuth)

app.get("/admin/getAllData", (req, res) => {
    // if the request is authorized
    res.send("send all data")
});


app.get("/admin/deleteUser", (req, res) => {
    // if the request is authorized
    res.send("delete user")

});

app.get("/user/deleteUser", (req, res) => {
    // if the request is authorized
    res.send("delete user")

});

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})