import db from "./config/db.js"
import express from "express";
import cors from "cors";
import routes from "../routes/route.js";
import dotenv from "dotenv";


const app = express();
let port = 3000;

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", routes);

app.listen(port,()=>{
    console.log(`The server is running on ports ${port} `);
})