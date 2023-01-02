import styles from './Info.module.css';

interface prospsInfo {
    tasksCreated: number;
    contTaksCompleted: number;
}

export function Info({tasksCreated, contTaksCompleted}: prospsInfo) {
    return (
        <div className={styles.info}>
            <strong className={styles.created}>
                Tarefas criadas 
                <span>{tasksCreated}</span>
            </strong>

            <strong className={styles.completed}>
                Concluídas 
                <span>{contTaksCompleted} de {tasksCreated}</span>
            </strong>
        </div>
    )
}