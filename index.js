const express = require("express");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT;
const connectToDatabase = require("./src/db/db.conn");
connectToDatabase();

app.get("/", (req, res) => {
    res.status(200).send({
        message: "Olá",
        secondMessage: "Mundo",
    });
});

app.listen(PORT, () => {
    console.log(`Server is running in port: ${PORT}`);
});
