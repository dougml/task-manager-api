const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
    description: {
        type: String,
        require: true,
    },
    isCompleted: {
        type: Boolean,
        default: false,
    },
});

const TaskModel = mongoose.model("Task", TaskSchema);

module.exports = TaskModel;
