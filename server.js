const app = require("./src/app");
const db = require("./src/config/db")

db.connect((err) => {
    if (err) {
        console.error("Database connection failed", err);
        process.exit(1);
    }
    console.log("Database connected!");
    app.listen(3000, () => {
        console.log("Server is running on port 3000")
    });
});

