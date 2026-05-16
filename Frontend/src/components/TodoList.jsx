import TodoItem from "./TodoItem";

function TodoList({
    todos,
    deleteTodo,
    completeTodo
}) {
    return (
        <div>

            {
                todos.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        deleteTodo={deleteTodo}
                        completeTodo={completeTodo}
                    />
                ))
            }
        </div>
    );
}

export default TodoList;