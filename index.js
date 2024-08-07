const express = require("express");
require("dotenv").config();
const TaskRouter = require('./src/routes/task.routes')

const app = express();
app.use(express.json());

const PORT = process.env.PORT;
const connectToDatabase = require("./src/db/db.conn");

connectToDatabase();

app.use('/tasks', TaskRouter)


app.listen(PORT, () => {
    console.log(`Server is running in port: ${PORT}`);
});
