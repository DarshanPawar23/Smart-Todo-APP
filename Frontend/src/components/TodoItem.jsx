function TodoItem({
    todo,
    deleteTodo,
    completeTodo
}){

    return(

        <div
            className="
            bg-white
            shadow-md
            rounded-xl
            p-4
            flex
            justify-between
            items-center
            mb-4
            "
        >

            <h2
                className={`
                    text-lg
                    font-semibold
                    ${
                        todo.completed
                        ? "line-through text-gray-400"
                        : ""
                    }
                `}
            >
                {todo.title}
            </h2>

            <div className="flex gap-3">

                <button
                    onClick={() =>
                        completeTodo(todo.id)
                    }
                    className="
                    bg-green-500
                    text-white
                    px-4
                    py-2
                    rounded
                    "
                >
                    Done
                </button>

                <button
                    onClick={() =>
                        deleteTodo(todo.id)
                    }
                    className="
                    bg-red-500
                    text-white
                    px-4
                    py-2
                    rounded
                    "
                >
                    Delete
                </button>

            </div>

        </div>
    );
}

export default TodoItem;