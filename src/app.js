const express = require("express");
const app = express();
const { adminAuth } = require("../middlewares/auth")
const db = require("./config/db");

app.use(express.json())

// Create sign up api
app.post("/signUp", (req, res) => {
    const { id, firstName, lastName, email, gender, age } = req.body;
    const q = `INSERT INTO user (firstName, lastName, email, gender, age) VALUES (?,?,?,?,?)`
    db.query(q, [firstName, lastName, email, gender, age], (err, result) => {
        if (err) {
            console.log("Error occured", err);
            res.status(500).send("Server Error")
            return;
        }
        res.send({
            message: "User created successfully!",
            user: [{
                id: result.insertId,
                firstName: firstName,
                lastName: lastName,
                email: email,
                gender: gender,
                age: age
            }
            ]
        });
    });
});

module.exports = app 