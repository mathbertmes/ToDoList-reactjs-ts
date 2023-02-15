import styles from "./Header.module.css"
import toDoListLogo from "../assets/toDoList-logo.svg";

export function Header(){
  return(
    <header className={styles.header}>
        <img src={toDoListLogo} alt="Logo do projeto to do list" />
    </header>
  )
}