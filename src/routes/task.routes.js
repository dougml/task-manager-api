const express = require("express");
const router = express.Router();

const TaskController = require("../controllers/task.controller");

router.get("/", TaskController.getAllTasks);
router.get("/:id", TaskController.getTaskById);
router.post("/", TaskController.createTask);
router.patch("/:id", TaskController.updateTask);
router.delete("/:id", TaskController.deleteTask);

module.exports = router;
