const express = require("express");
const cors = require("cors");


const app = express();
app.use(cors());
app.use(express.json());

const routes = require("./routes");
app.use("/api", routes);

/*app.get("/hello", (req,res) => {
    res.status(200).json({msg:"Hello world"})
})
*/

const connectDB = require("./connectDb");

const port = 5000;

// app.listen(port, ()=> {
//     console.log(`Server is listing on http://localhost: ${port}`)
// })

const startServer = async () => {
    await connectDB();

    app.listen(port, ()=> {
        console.log(`Server is listing on http://localhost: ${port}`)
    })
}
startServer()
