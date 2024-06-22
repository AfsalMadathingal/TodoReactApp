import TodoItem from "./TodoItem";
import styles from "./form.module.css";
import { useState } from "react";
export default function TodoList({ todos, setTodos }) {

  const sortedTodos = todos
    .slice()
    .sort((a, b) => Number(a.done) - Number(b.done));

  const unCompletedTodos = todos.filter((todo) => !todo.done);

    
  const [hide, setHide] = useState(false);
  const [hideStatus,setStatus] = useState("Hide List")
  const [completedHide, setCompletedHide] = useState(false)
  const [comp,  setComp] = useState([])
  

  function hideHandle() {
    setHide(!hide);
    hide ? setStatus("Hide List") : setStatus("UnHide List")
  }

  function handleHideCompleted(){

    setCompletedHide(!completedHide)

    

  }

  return (
    <div>
      <div  className={styles.mainDiv}>
        <button  className={styles.hidButtoin} onClick={handleHideCompleted}>{completedHide ? "Show All": "Hide Completed"}</button>
      <button onClick={hideHandle} className={styles.hidButtoin}>
       {hideStatus}
      </button>
      </div>


      {!hide&&
      
      completedHide?
      (unCompletedTodos.map((item) => (
        <TodoItem
          key={item.name}
          item={item}
          todos={todos}
          setTodos={setTodos}
        />
      ))):
       
      
      (
        sortedTodos.map((item) => (
          <TodoItem
            key={item.name}
            item={item}
            todos={todos}
            setTodos={setTodos}
          />
        ))
      ) }

    </div>
  );
}
