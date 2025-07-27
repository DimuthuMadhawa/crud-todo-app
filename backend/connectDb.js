const mongoose = require("mongoose");
require("dotenv").config();

const connectToDb = async () => {
    try {
        // console.log(process.env.DB_CONNECTION_STRING); 
        await mongoose.connect("mongodb+srv://dimuthu:1234@cluster-a.df6kwmo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster-A");
        console.log(`Database Connected`);

    } catch (error){
        console.error("DB connection failed");

    }
};

module.exports = connectToDb;