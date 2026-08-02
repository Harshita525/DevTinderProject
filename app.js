const express = require("express");
const app = express();
const { adminAuth } = require("./middlewares/auth")

app.get("/getUser", (req, res) => {
    try {
        throw new Error("dekdke");
        res.send("user data sent")
    } catch (err) {
        res.status(500).send("some err contact support for help")

    }

})

app.use("/", (err, req, res, next) => {
    if (err) {
        // log your err

        res.status(500).send("Something went wrong!")
    }
})

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})