import { Circle, Trash } from "phosphor-react"

import styles from "./Task.module.css"

export function Task(){
  return(
    <div className={styles.taskWrapper}>
      <div className={styles.markAndText}>
        <input checked={false} type="checkbox" className={styles.markCompleteButton} />
        <p>Bdhbeklfblshfblsf fhbfgehfgeufgh kdhfbkeb bcdhbfjdvbfiw jhfwehjf egeg ufdgeig eugdry3e yuerg3 dbie ueghdfe </p>
      </div>
      <button className={styles.trashButton}>
        <Trash className={styles.trashIcon} size={22}/>
      </button>
      
      
      
      
    </div>
  )
}