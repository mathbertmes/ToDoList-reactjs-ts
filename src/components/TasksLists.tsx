import { v4 as uuidv4 } from 'uuid';
import { NewTaskForm } from "./NewTaskForm"
import styles from "./TasksList.module.css"

import imgEmptyTask from "../assets/empty-task.svg"
import { Task } from "./Task"
import { ChangeEvent, useState } from 'react';

interface TaskProps{
  id: string;
  title: string;
  isComplete: boolean;
}

export function TasksList(){

  const [tasks, setTasks] = useState<TaskProps[]>([])
  const [titleNewTask, setTitleNewTask] = useState("")
  const [counterTasksCompleted, setCounterTasksCompleted] = useState(0)

  function handleChangeTitleNewTask(event: ChangeEvent<HTMLInputElement>) {
    setTitleNewTask(event.target.value)
  }

  function handleAddNewTask(){
    const idNewTask = uuidv4()

    const newTask = {
      id: idNewTask,
      title: titleNewTask,
      isComplete: false
    }

    setTasks([...tasks, newTask])
  }

  function handleCompleteTask(id: string){
    const taskIndex = tasks.findIndex((task) => {
      return task.id == id;
    });
    
    const tempTasksList = [...tasks]
    tempTasksList[taskIndex].isComplete = !tempTasksList[taskIndex].isComplete
    
    setTasks(tempTasksList)

    if(tempTasksList[taskIndex].isComplete === true){
      setCounterTasksCompleted(counterTasksCompleted + 1)
    }else{
      setCounterTasksCompleted(counterTasksCompleted - 1)
    }
  }

  function handleDeleteTask(id: string){
    const newTasksList = tasks.filter(task => task.id !== id)
    setTasks(newTasksList)
  }


  return(
    <div className={styles.wrapper}>
      <NewTaskForm handleChangeTitleNewTask={handleChangeTitleNewTask} handleAddNewTask={handleAddNewTask}/>
      <div className={styles.headerAndListWrapper}>

        <div className={styles.header}>

          <div className={styles.taskCounterAndTextWrapper}>
            <p className={styles.tasksCreatedText}>Tarefas criadas </p>
            <div className={styles.taskCounter}>{tasks.length}</div>
          </div>

          <div className={styles.taskCounterAndTextWrapper}>
            <p className={styles.fineshedTasksText}>Concluidas</p>
            <div className={styles.taskCounter}>
              {counterTasksCompleted} de {tasks.length}
            </div>
          </div>

        </div>
        {
          tasks.length === 0 ? 
            <div className={styles.emptyTask}>
              <img src={imgEmptyTask} alt="empty task" />
              <strong>Você ainda não tem tarefas cadastradas</strong>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </div> 
            :         
            tasks.map(task => {
              return(
                <Task 
                  key={task.id} 
                  id={task.id} 
                  title={task.title} 
                  isComplete={task.isComplete} 
                  handleCompleteTask={handleCompleteTask} 
                  handleDeleteTask={handleDeleteTask}
                />
              )
            })
        }

      </div>
    </div>
  )
}