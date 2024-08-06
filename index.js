const express = require("express");
require("dotenv").config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT;
const connectToDatabase = require("./src/db/db.conn");
const TaskModel = require("./src/models/task.model");
const { default: mongoose } = require("mongoose");
connectToDatabase();

app.get("/tasks", async (req, res) => {
    try {
        const taskLisk = await TaskModel.find({});

        res.status(200).send(taskLisk);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.post("/tasks", async (req, res) => {
    try {
        const newTask = new TaskModel(req.body);

        await newTask.save();
        res.status(201).send(newTask);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.listen(PORT, () => {
    console.log(`Server is running in port: ${PORT}`);
});
