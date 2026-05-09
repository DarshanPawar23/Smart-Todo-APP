import db from "./config/db.js"
import express from "express";
import cors from "cors";
import route from "./routes/route.js";
import dotenv from "dotenv";

const app = express();
let port = 3000;

dotenv.config();


app.use(cors());
app.use(express.json());

app.use("/api", route);

app.listen(port,()=>{
    console.log(`The server is running on ports ${port} `);
})