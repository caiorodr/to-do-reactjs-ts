import { Header } from './components/Header';
import styles from './App.module.css';

import './global.css';
import { Task } from './components/Task';
import { Info } from './components/Info';
import { List } from './components/List';

export function App() {

  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <Task/>
        <Info/>
        <div  className={styles.empty}>
          <List/>
        </div>
        
      </div>
    </div>
  )
}
