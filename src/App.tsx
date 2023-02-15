import { Header } from "./components/Header"
import styles from "./App.module.css"

import "./global.css"
import { NewTaskForm } from "./components/NewTaskForm"
import { TasksList } from "./components/TasksLists"

export function App() {

  return (
    <div>
      <Header />
      <TasksList />
    </div>
  )
}

export default App
