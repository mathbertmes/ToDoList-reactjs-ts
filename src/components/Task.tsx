import { Circle, Trash } from "phosphor-react"
import { useState } from "react"

import styles from "./Task.module.css"

export function Task(){

  const [checkTaskComplete, setCheckTaskComplete] = useState(false)

  function handleMarkCompleteTask(){
    setCheckTaskComplete(!checkTaskComplete)
  }


  return(
    <div className={styles.taskWrapper}>
      <div className={styles.markAndText}>
        <input  onClick={handleMarkCompleteTask} checked={checkTaskComplete} type="checkbox" className={styles.markCompleteButton} />
        <p>Bdhbeklfblshfblsf fhbfgehfgeufgh kdhfbkeb bcdhbfjdvbfiw jhfwehjf egeg ufdgeig eugdry3e yuerg3 dbie ueghdfe </p>
      </div>
      <button className={styles.trashButton}>
        <Trash className={styles.trashIcon} size={22}/>
      </button>
      
      
      
      
    </div>
  )
}