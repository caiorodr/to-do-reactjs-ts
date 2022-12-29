import styles from './Info.module.css';

export function Info() {
    return (
        <div className={styles.info}>
            <strong className={styles.created}>
                Tarefas criadas 
                <span>0</span>
            </strong>

            <strong className={styles.completed}>
                Concluídas 
                <span>0</span>
            </strong>
        </div>
    )
}