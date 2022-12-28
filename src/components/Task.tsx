import styles from './Task.module.css'

export function Task() {
  return (
    <header className={styles.newTask}>
      <input type="newTaks" placeholder='Adicione uma nova tarefa' />
        <button>
          Criar
          
        </button>
    </header>
  )
}