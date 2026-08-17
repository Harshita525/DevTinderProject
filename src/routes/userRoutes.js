const express = require("express");
const router = express.Router();
const validate = require("../middlewares/validate");
const userValidation = require("../validators/userValidator")
const { createUser, getUserByEmail, findAllUsers, getUserById, deleteUserById, updateUserById } = require("../controllers/userController")

router.post("/signUp", userValidation, validate, createUser)
router.get("/user", getUserByEmail);
router.get("/feed", findAllUsers);
router.get("/user/:id", getUserById);
router.delete("/user/:id", deleteUserById);
router.patch("/user/:id", userValidation, updateUserById);


module.exports = router 