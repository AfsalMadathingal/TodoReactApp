import { useState } from "react";

export default function Todo() {
    
  const [todo, setTodo] = useState("");

  return (
    <div>
      <form action="">
        <input
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
          type="text"
          name=""
          id=""
        />
        <button type="submit"> ADD</button>
      </form>
    </div>
  );
}
