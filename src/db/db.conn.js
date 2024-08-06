require("dotenv").config();
const mongoose = require("mongoose");

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@taskmanagercluster.iysps.mongodb.net/taskManagerCluster?retryWrites=true&w=majority`;

const connectToDatabase = async () => {
    try {
        // Conecta ao MongoDB usando Mongoose
        await mongoose.connect(uri, {
            serverApi: {
                version: "1",
                strict: true,
                deprecationErrors: true,
            },
        });

        console.log("You successfully connected to MongoDB with Mongoose!");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    } 
};

// connectToDatabase().catch(console.error);

module.exports = connectToDatabase;
