import { PlusCircle } from 'phosphor-react'
import { ChangeEvent, useState } from 'react'
import { Info } from './Info';
import { List } from './List';
import styles from './Task.module.css'


interface propsTaks {
  id: number; 
  text: string;
  clickTask: string;
  title: string;
}

export function Task() {

  const [listToTasks, setListToTasks] = useState([{id: 0 , text: '', clickTask: '', title: ''}]);
  const [newTextInput, setNewTextInput] = useState('');
  const [tasksCreated, setTasksCreated] = useState(0);
  const [taksCompleted, setTaksCompleted] = useState(0);

  function handleTextInputChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTextInput(event.target.value);
  }

  function handleCriarNewTask(): void {
    setListToTasks([...listToTasks,{id: Math.random(), text: newTextInput, clickTask: 'unChecked', title: 'Marcar tarefa'}]);
    setTasksCreated(listToTasks.length);
    setNewTextInput('');
  }

  function completedTask(taskCompleted: propsTaks[]) {

    const findTaskCompleted = taskCompleted.filter((task: any) => {
      return task.clickTask === 'checked';
    })
    const contTaksCompleted = findTaskCompleted.length;

    setTaksCompleted(contTaksCompleted);
    setListToTasks(taskCompleted);
    
  }

  function removeListTask(taskRemoved: propsTaks[]) {

    const findTaskCompleted = taskRemoved.filter((task: any) => {
      return task.clickTask === 'checked';
    })
    const contTaksCompleted = findTaskCompleted.length;

    setTaksCompleted(contTaksCompleted);

    setListToTasks(taskRemoved);
    setTasksCreated(taskRemoved.length -1);
  }

  return (
    <div>
      <header className={styles.newTask}>
        <input 
          type="newTask"
          placeholder='Adicione uma nova tarefa'
          onChange={handleTextInputChange}
          value={newTextInput}
        />
        <button
          onClick={handleCriarNewTask}
          disabled={!(newTextInput.length > 0)}
        >
          Criar
          <PlusCircle size={24} />
        </button>
      </header>

      <Info
        tasksCreated={tasksCreated}
        contTaksCompleted={taksCompleted}
      />

      <div className={styles.listToTaks}>
        <List 
        listToTasks={listToTasks} 
        isCompletedTask={completedTask}
        onRemoveTask={removeListTask}
      />
      </div>
      
    </div>

  )
}