import styles from "./footer.module.css"

export default function Footer({completedTodos,totalTodos}){

    return <div className={styles.footer}>
        <span>completed  <i class="fa-solid fa-square-check"></i> : {completedTodos} </span>
        <span>Total <i class="fa-solid fa-hourglass-start"></i>  : {totalTodos} </span>
    </div>

}