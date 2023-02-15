import styles from "./NewTaskForm.module.css"

export function NewTaskForm(){
  return(
    <div className={styles.newTaskWrapper}>
      <input type="text" placeholder="Adicione uma nova tarefa"/>
      <button><span>Criar</span></button>
    </div>
  )
}