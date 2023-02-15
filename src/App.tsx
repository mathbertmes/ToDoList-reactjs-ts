import { Header } from "./components/Header"
import styles from "./App.module.css"

import "./global.css"
import { NewTaskForm } from "./components/NewTaskForm"

export function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <NewTaskForm />
      </div>
    </div>
  )
}

export default App
