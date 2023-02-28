import { ChangeEvent } from "react";
import styles from "./NewTaskForm.module.css"

interface NewTaskFormProps{
  handleAddNewTask: () => void;
  handleChangeTitleNewTask: (event: ChangeEvent<HTMLInputElement>) => void;
}

export function NewTaskForm({ handleAddNewTask, handleChangeTitleNewTask } : NewTaskFormProps){
  return(
    <div className={styles.newTaskWrapper}>
      <input onChange={handleChangeTitleNewTask} type="text" placeholder="Adicione uma nova tarefa"/>
      <button onClick={handleAddNewTask}><span>Criar</span></button>
    </div>
  )
}