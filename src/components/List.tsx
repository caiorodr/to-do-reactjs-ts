import styles from './List.module.css';
import Clipboard from '../assets/Clipboard.svg'
import { useState } from 'react';
import { Check, Trash } from 'phosphor-react';

export function List(){
    const [taskList, setTaskList] = useState('');
    
    return (
        <div>
            {taskList.length > 0 ?
                <div className={styles.empty}>
            
                    <article className={styles.emptyContent}>
                        <img src={Clipboard} />
                        <strong>Você ainda não tem tarefas cadastradas</strong>
                        <p>Crie tarefas e organize seus itens a fazer</p>
                    </article>
                </div>
            : 
                <article className={styles.notEmptyContent}>
                    <div className={styles.taskContent}>
                        <Check size={18}  className={styles.check}/>
                        <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
                        <Trash size={20}  className={styles.delete}/>
                    </div>
                    

                    <div className={styles.taskContent}>
                        <Check size={18}  className={styles.check}/>
                        <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
                        <Trash size={20} className={styles.delete}/>
                    </div>
                </article>
            }
        </div>
    )
}