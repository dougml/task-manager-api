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

app.get("/tasks/:id", async (req, res) => {
    try {
        const taskId = req.params.id;
        const task = await TaskModel.findById(taskId);

        if (!task) {
            res.status(404).send("Task not found");
        } else {
            res.status(200).send(task);
        }
    } catch (error) {
        res.status(500).send("Internal server error");
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

app.patch("/tasks/:id", async (req, res) => {
    try {
        const taskId = req.params.id;
        const { description, isCompleted } = req.body;

        // Verifica se a tentativa de atualizar o campo "description" foi feita
        if (description) {
            return res
                .status(400)
                .send("Is not possible to update task description");
        }

        // Verifica se o campo "isCompleted" foi passado no corpo da requisição
        if (typeof isCompleted !== "boolean") {
            return res.status(400).send("Invalid value for isCompleted");
        }

        // Atualiza apenas o campo "isCompleted" no banco de dados
        const updatedTask = await TaskModel.findByIdAndUpdate(
            taskId,
            { isCompleted },
            { new: true, runValidators: true }
        );

        if (!updatedTask) {
            return res.status(404).send("Task not found");
        }

        res.status(200).send(updatedTask);
    } catch (error) {
        res.status(500).send("Internal server error");
    }
});

app.delete("/tasks/:id", async (req, res) => {
    try {
        const idTask = req.params.id;

        const deletedTask = await TaskModel.findByIdAndDelete(idTask);

        if (!deletedTask) {
            res.status(404).send(`Task not Found`);
        } else {
            res.status(200).send(deletedTask);
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.listen(PORT, () => {
    console.log(`Server is running in port: ${PORT}`);
});
