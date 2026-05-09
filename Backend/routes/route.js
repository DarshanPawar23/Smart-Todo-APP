import {register,login,addTodo,getTodos,completeTodo,deleteTodo,filterTodos } from "../controllers/controller.js";
import verifyToken from "../middleware/middleware.js";
import express from  "express";

const route = express.Router();

route.post("/register",register);
route.post("/login",login)
route.post("/addTodo",verifyToken,addTodo);

route.get("/getTodo",verifyToken,getTodos);
route.get("/filter/:id",verifyToken,filterTodos);

route.delete("/todos/:id", verifyToken, deleteTodo);

route.put("/todos/:id", verifyToken, completeTodo);


export default route;

