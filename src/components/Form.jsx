import styles from "./form.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useState } from "react";
export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState({ name: "", done: false });

  function handleSubmit(e) {
    e.preventDefault();

    const validation = todos.some((item) => item.name === todo.name);

    if (validation) {
      toast.error("Already Exist");
      return;
    }
    if (!todo.name) {
      toast.error("Todo List cannot be empty");
      return;
    }
    setTodos([todo,...todos]);
    setTodo({ name: "", done: false });

    toast.success("Todo Added", { autoClose: 2000 });
  }

  return (
    <div>
      <form className={styles.todoform} onSubmit={handleSubmit} action="">
        <div className={styles.inputContainer}>
          <input
            className={styles.modernInput}
            placeholder="Enter Todo"
            onChange={(e) => setTodo({ name: e.target.value, done: false })}
            value={todo.name}
            type="text"
            name=""
            id=""
          />
          <button className={styles.modernButton} type="submit">
            {" "}
            ADD
          </button>
        </div>
      </form>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition:Bounce
      />
    </div>
  );
}
