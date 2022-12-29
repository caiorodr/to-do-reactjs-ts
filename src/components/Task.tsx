import { PlusCircle } from 'phosphor-react'
import styles from './Task.module.css'

export function Task() {
  return (
    <header className={styles.newTask}>
      <input type="newTask" placeholder='Adicione uma nova tarefa' />
        <button>
          Criar
          <PlusCircle size={24} />
        </button>
    </header>
  )
}