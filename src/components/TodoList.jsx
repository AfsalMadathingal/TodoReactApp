import TodoItem from "./TodoItem";

export default function TodoList({todos,setTodos}) {

  const sortedTodos= todos.slice().sort((a,b)=>Number(a.done)-Number(b.done))

  return (


    <div>

      {sortedTodos.map((item) => (
        <TodoItem  key={item.name} item={item} todos={todos} setTodos={setTodos} />
      ))}

    </div>
  );
}
