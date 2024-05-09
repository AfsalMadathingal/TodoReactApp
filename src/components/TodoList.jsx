import TodoItem from "./TodoItem";

export default function TodoList({todos,setTodos}) {

  console.log(todos);
  return (


    <div>

      {todos.map((item) => (
        <TodoItem  key={item.name} item={item} todos={todos} setTodos={setTodos} />
      ))}

    </div>
  );
}
