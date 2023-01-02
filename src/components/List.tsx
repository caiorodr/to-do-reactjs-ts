import styles from './List.module.css';
import Clipboard from '../assets/Clipboard.svg'
import { Check, Trash } from 'phosphor-react';


interface listTask {
    id: number; 
    text: string;
    clickTask: string;
    title: string;
}

interface propsListTask {
    listToTasks: listTask[];
    isCompletedTask: (listTask: listTask[]) => void;
    onRemoveTask: (listTask: listTask[]) => void;
}

export function List({listToTasks, isCompletedTask, onRemoveTask}: propsListTask){
    const validListToTasks: boolean = listToTasks.length > 1 ? true : false;

    function handleCheckedTask(id: number) {

        // Acha o index do elemento
        const taskIndex = listToTasks.findIndex((task: listTask) => {
            return task.id == id;
        });

        const tempTasks = [...listToTasks];
        if (tempTasks[taskIndex].clickTask === 'checked'){
            tempTasks[taskIndex].clickTask = 'unChecked';
        }else {
            tempTasks[taskIndex].clickTask = 'checked';
        }
        
        tempTasks[taskIndex].title = 'Desmarcar tarefa';

        isCompletedTask(tempTasks)
    }

    function handleDeleteTask(id: number) {
        const taskFilterRemoved = listToTasks.filter((task: listTask) => {
            return task.id !== id;
        })

        onRemoveTask(taskFilterRemoved);
    }
    
    return (
        <div>
            {validListToTasks ?
                <article className={styles.notEmptyContent}>
                    {listToTasks.map((task: listTask) => {
                        if(task.text.length > 0) {
                            return (
                                <div key={task.id} className={styles.taskContent}>
                                    <div className={task.clickTask === 'checked' ? styles.taskChecked : styles.taskUnChecked}>
                                        <button 
                                            title={task.title} 
                                            name={task.clickTask}
                                            onClick={() => handleCheckedTask(task.id)}
                                        >
                                            <Check 
                                                weight="bold" 
                                                size={12}
                                            />
                                        </button>
                                        <p>{task.text}</p>
                                        <button
                                            title="Deletar Tarefa"
                                            name='delete'
                                            onClick={() => handleDeleteTask(task.id)}
                                        >
                                            <Trash size={20}/>
                                        </button>
                                    </div>
                                </div>
                            )
                        }
                    })}
                </article>
            : 
                <div className={styles.empty}>
                    <article className={styles.emptyContent}>
                        <img src={Clipboard} />
                        <strong>Você ainda não tem tarefas cadastradas</strong>
                        <p>Crie tarefas e organize seus itens a fazer</p>
                    </article>
                </div>
            }
        </div>
    )
}