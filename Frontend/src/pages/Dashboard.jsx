import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import API from "../api/axios";
function Dashboard() {
    const [todos, setTodos] = useState([]);

    const fetchTodos = async() => {
        try {
            const res =await  API.get("/getTodo");
            setTodos(res.data);
        }
        catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchTodos();
    }, []);

    const addTodo = async (title) => {
        try {
            await API.post("/addTodo", { title });
            fetchTodos();
        }
        catch (error) {
            console.log(error);
        }
    }

    const deleteTodo = async (id) => {

        try{

            await API.delete(`/todos/${id}`);

            fetchTodos();

        }
        catch(error){

            console.log(error);
        }
    };
    
     const completeTodo = async (id) => {

        try{

            await API.put(`/todos/${id}`);

            fetchTodos();

        }
        catch(error){

            console.log(error);
        }
    };

        const filterTodos = async (status) => {

        try{

            const res = await API.get(
                `/filter/${status}`
            );

            setTodos(res.data);

        }
        catch(error){

            console.log(error);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100">

            <Navbar />

            <div className="max-w-3xl mx-auto mt-10">

                <TodoForm addTodo={addTodo} />

                <div className="flex gap-4 mb-6">

                    <button
                        onClick={fetchTodos}
                        className="
                        bg-black
                        text-white
                        px-4
                        py-2
                        rounded
                        "
                    >
                        All
                    </button>

                    <button
                        onClick={() =>
                            filterTodos("completed")
                        }
                        className="
                        bg-green-500
                        text-white
                        px-4
                        py-2
                        rounded
                        "
                    >
                        Completed
                    </button>

                    <button
                        onClick={() =>
                            filterTodos("pending")
                        }
                        className="
                        bg-yellow-500
                        text-white
                        px-4
                        py-2
                        rounded
                        "
                    >
                        Pending
                    </button>

                </div>

                <TodoList
                    todos={todos}
                    deleteTodo={deleteTodo}
                    completeTodo={completeTodo}
                />

            </div>

        </div>
    )
}

export default Dashboard;