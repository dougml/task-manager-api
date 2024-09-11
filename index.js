const express = require("express");
require("dotenv").config();
const TaskRouter = require('./src/routes/task.routes')
const cors = require('cors')

const app = express();
app.use(cors())
app.use(express.json());

const PORT = process.env.PORT || 3333;
const connectToDatabase = require("./src/db/db.conn");

connectToDatabase();

app.use('/tasks', TaskRouter)


app.listen(PORT, () => {
    console.log(`Server is running in port: ${PORT}`);
});
