const db = require("../config/db")

const createUserModel = (userData) => {
    return new Promise((resolve, reject) => {
        const { firstName, lastName, email, gender, age } = userData;

        const query = ` INSERT INTO user
        (firstName, lastName, email, gender, age)
        VALUES (?, ?, ?, ?, ?)`

        db.query(query, [firstName, lastName, email, gender, age], (err, result) => {
            if (err) {
                console.log(err)
                reject(err);
            } else {
                resolve({
                    id: result.insertId,
                    firstName,
                    lastName,
                    email,
                    gender,
                    age
                })
            }
        });
    });
};

const findUserByEmail = (email) => {
    return new Promise((resolve, reject) => {
        const q = `SELECT * FROM user WHERE email = ?`;
        db.query(q, [email], (err, result) => {
            if (err) {
                console.log(err);
                reject(err);
            } else {
                resolve(result)
            }
        });
    });
};

const getAllUser = () => {
    return new Promise((resolve, reject) => {
        const q = `SELECT * FROM user`;
        db.query(q, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result)
            }
        });
    });
};

const findUserById = (id) => {
    return new Promise((resolve, reject) => {
        const query = `SELECT * FROM user WHERE id = ?`;
        db.query(query, [id], (err, result) => {
            if (err) {
                return reject(err)
            }
            return resolve(result);
        })

    })

}

const deleteUser = (id) => {
    return new Promise((resolve, reject) => {
        const query = `DELETE FROM user WHERE id = ?`;
        db.query(query, [id], (err, result) => {
            if (err) {
                return reject(err)
            }
            return resolve(result);
        })

    })
}

const updateUser = (id, firstName) => {
    return new Promise((resolve, reject) => {
        const query = `UPDATE user SET firstName=? WHERE id = ?`;
        db.query(query, [firstName, id], (err, result) => {
            if (err) {
                return reject(err)
            }
            return resolve(result);
        })
    })
}

module.exports = { createUserModel, findUserByEmail, getAllUser, findUserById, deleteUser, updateUser }