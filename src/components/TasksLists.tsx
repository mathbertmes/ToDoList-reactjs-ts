import { NewTaskForm } from "./NewTaskForm"
import styles from "./TasksList.module.css"

import imgEmptyTask from "../assets/empty-task.svg"
import { Task } from "./Task"

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
        {/* <div className={styles.emptyTask}>
          <img src={imgEmptyTask} alt="empty task" />
          <strong>Você ainda não tem tarefas cadastradas</strong>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div> */}
        <Task />

      </div>
    </div>
  )
}