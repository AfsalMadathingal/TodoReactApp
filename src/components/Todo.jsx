import { useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";

export default function Todo() {

  const [todos,setTodos] = useState([])

  return (
    <div>
      <Form todos={todos} setTodos={setTodos}></Form>
      <TodoList todos={todos} setTodos={setTodos}></TodoList>
    </div>
  );
}
