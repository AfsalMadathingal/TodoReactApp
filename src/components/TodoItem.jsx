import styles from "./todoItem.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function TodoItem(props) {
  function handleDelete(item) {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this item!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {

        props.setTodos(props.todos.filter((todo) => todo.name !== item));
        toast.error("Deleted")
      }
      
    })
   
  }

  function handleComplet(item) {
    

    props.setTodos(props.todos.map((todo) => {
      return todo.name === item ? { ...todo, done: !todo.done } : todo;
    }));
    toast.success("Done")
  }

  const className = props.item.done ? styles.taskCompleted : "";

  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <span className={className}>{props.item.name}</span>

        <div className={styles.buttonContainer}>
          <button
            onClick={() => handleComplet(props.item.name)}
            className={styles.completed}
          >
            {" "}
            Mark as Completed <i className="fa-solid fa-circle-check"></i>{" "}
          </button>
          <button
            onClick={() => {
              handleDelete(props.item.name);
            }}
            className={styles.delete}
          >
            {" "}
            Delete <i className="fa-solid fa-trash"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
