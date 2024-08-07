const TaskModel = require("../models/task.model");

module.exports = class TaskController {
    // Método para obter todas as tarefas
    static async getAllTasks(req, res) {
        try {
            const taskList = await TaskModel.find({});
            res.status(200).send(taskList);
        } catch (error) {
            res.status(500).send(error.message);
        }
    }

    // Método para obter uma tarefa por ID
    static async getTaskById(req, res) {
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
    }

    // Método para criar uma nova tarefa
    static async createTask(req, res) {
        try {
            const newTask = new TaskModel(req.body);
            await newTask.save();
            res.status(201).send(newTask);
        } catch (error) {
            res.status(500).send(error.message);
        }
    }

    // Método para atualizar uma tarefa (campo isCompleted)
    static async updateTask(req, res) {
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
    }

    // Método para deletar uma tarefa
    static async deleteTask(req, res) {
        try {
            const taskId = req.params.id;
            const deletedTask = await TaskModel.findByIdAndDelete(taskId);

            if (!deletedTask) {
                res.status(404).send("Task not found");
            } else {
                res.status(200).send(deletedTask);
            }
        } catch (error) {
            res.status(500).send(error.message);
        }
    }
};
