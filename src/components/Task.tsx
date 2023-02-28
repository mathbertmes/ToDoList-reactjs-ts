import { Circle, Trash } from "phosphor-react"
import { useState } from "react"

import styles from "./Task.module.css"

interface TaskProps{
  id: string;
  title: string;
  isComplete: boolean;
  handleCompleteTask: (id:string) => void;
  handleDeleteTask: (id:string) => void;
}

export function Task({id, title, isComplete, handleCompleteTask, handleDeleteTask} : TaskProps){

  const [checkTaskComplete, setCheckTaskComplete] = useState(false)

  function handleMarkCompleteTask(){
    handleCompleteTask(id)
  }

  function prepareToDeleteTask(){
    handleDeleteTask(id)
  }


  return(
    <div className={styles.taskWrapper}>
      <div className={styles.markAndText}>
        <input  onChange={handleMarkCompleteTask} checked={isComplete} type="checkbox" className={styles.markCompleteButton} />
        <p className={isComplete ? styles.taskCompletedTextDesign : ""}>{title}</p>  
      </div>
      <button onClick={prepareToDeleteTask} className={styles.trashButton}>
        <Trash className={styles.trashIcon} size={22}/>
      </button>
      
      
      
      
    </div>
  )
}