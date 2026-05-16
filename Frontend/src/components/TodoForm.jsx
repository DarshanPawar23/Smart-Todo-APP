import { useState } from "react"

function TodoForm({ addTodo }) {
    const [title, setTitle] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(title);
        setTitle = "";
    }
    return (
        <form onSubmit={handleSubmit}
            className="flex gap-4 mb-6">

            <input type="text"
                placeholder="Enter task..."
                value={title}
                onChange={(e) =>
                    setTitle(e.target.value)
                }
                className="
                flex-1
                border
                p-3
                rounded-lg
                "/>
            <button
                className="
                bg-black
                text-white
                px-6
                rounded-lg
                "
            >
                Add
            </button>
        </form>
    )
}
export default TodoForm;