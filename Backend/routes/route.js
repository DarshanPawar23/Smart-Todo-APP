import {register,login,addTodo } from "../controllers/controller.js";
import verifyToken from "../middleware/middleware.js";
import express from  "express";

const route = express.Router();

route.post("/register",register);
route.post("/login",login)
route.post("/addTodo",verifyToken,addTodo);
export default route;

