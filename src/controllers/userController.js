const { createUserModel, findUserByEmail, getAllUser, findUserById, deleteUser, updateUser } = require("../models/userModel")
const { validationResult } = require("express-validator");


const createUser = async (req, res) => {
    const errors = validationResult(req);

    try {
        const user = await createUserModel(req.body);
        return res.status(201).json({
            message: "User created successfully",
            data: [user],

        });
    } catch (err) {
        console.log(err);

        if (err.code === "ER_DUP_ENTRY") {
            return res.status(409).json({
                message: "Email already exists"
            });
        }

        return res.status(500).json({
            message: "Something went wrong"
        })
    }



}

const getUserByEmail = async (req, res) => {
    try {
        const email = req.query.email;
        if (!email) {
            return res.status(400).json({
                message: "Please enter emailId"
            })
        }
        const user = await findUserByEmail(email);
        if (user.length === 0) {
            return res.status(404).json({
                message: "User not found!"
            })
        }
        res.status(200).json({
            success: true,
            message: "User fetched successfully.",
            data: user[0]
        })

    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Internal server error."
        })

    }
}

const findAllUsers = async (req, res) => {
    try {
        const user = await getAllUser();
        if (user.length === 0) {
            return res.status(404).json({
                status: false,
                message: "User not found!"
            })
        }

        res.status(200).json({
            status: true,
            message: "User fetched successfully",
            data: user
        })
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
}

const getUserById = async (req, res) => {
    try {
        const id = req.params.id;
        if (!id) {
            return res.status(404).json({
                message: "Please enter Id"
            })
        }

        const user = await findUserById(id);

        if (user.length === 0) {
            res.status(404).json({
                message: "User not found"
            })
        }

        res.status(200).json({
            success: true,
            message: "User fetched successfully",
            data: user[0]
        })

    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Internal server error."
        });
    };
}

const deleteUserById = async (req, res) => {
    try {
        const id = req.params.id;
        if (!id) {
            return res.status(404).json({
                message: "Id not found!"
            })
        }

        const deletedUser = await deleteUser(id)

        res.status(200).json({
            success: true,
            message: "User deleted successfully"
        })

    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Internal server error"
        })

    }
}

const updateUserById = async (req, res) => {
    try {
        const id = req.params.id;
        const firstName = req.body.firstName;

        if (!id || !firstName) {
            return res.status(400).json({
                success: false,
                message: "Id or name is missing"
            })
        }

        const user = await updateUser(id, firstName);
        return res.status(200).json({
            success: true,
            message: "User updated successfully",
            data: user
        })
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        })

    }

}

module.exports = { createUser, getUserByEmail, findAllUsers, getUserById, deleteUserById, updateUserById }