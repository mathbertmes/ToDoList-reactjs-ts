import { NewTaskForm } from "./NewTaskForm"
import styles from "./TasksList.module.css"

export function TasksList(){
  return(
    <div className={styles.wrapper}>
      <NewTaskForm />
      <div className={styles.headerAndListWrapper}>

        <div className={styles.header}>

          <div className={styles.taskCounterAndTextWrapper}>
            <p className={styles.tasksCreatedText}>Tarefas criadas </p>
            <div className={styles.taskCounter}>0</div>
          </div>

          <div className={styles.taskCounterAndTextWrapper}>
            <p className={styles.fineshedTasksText}>Concluidas</p>
            <div className={styles.taskCounter}>0</div>
          </div>

        </div>
        <div>
          Lista em si
        </div>

      </div>
    </div>
  )
}